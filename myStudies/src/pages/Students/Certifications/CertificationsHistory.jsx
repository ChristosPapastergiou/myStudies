import React from "react";
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../components/UserContext";

import Footer from "../../../components/Common/Footer";
import Navbar from "../../../components/Common/Navbar";
import NavBarOptions from "../../../components/Common/NavBarOptions";

const Path = ({ id }) => {
    return (
        <nav class="flex items-center justify-center m-6">
            <ol class="flex flex-row items-center">
                <li class="flex flex-col items-center">
                    <Link to={`/student/${id}`} class="inline-flex items-center text-sm text-gray-600 hover:text-green-700 font-medium dark:text-gray-400 dark:hover:text-white">
                        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        <span> Αρχική Σελίδα </span>
                    </Link>
                </li>

                <li class="flex flex-col items-center">
                    <div class="flex items-center justify-center">
                        <svg class="rtl:rotate-180 text-gray-500 w-3 h-3 m-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <a href={`/student/certifications/${id}`} class="inline-flex items-center text-sm text-gray-700 hover:text-green-700 font-medium dark:text-gray-400 dark:hover:text-white"> Πιστοποιητικά </a>
                    </div>
                </li>

                <li class="flex flex-col items-center">
                    <div class="flex items-center justify-center">
                        <svg class="rtl:rotate-180 text-gray-500 w-3 h-3 m-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="text-sm text-gray-500 font-medium  dark:text-gray-400"> Ιστορικό Aιτήσεων </span>
                    </div>
                </li>
            </ol>
        </nav>
    );
};
const Status = () => {
    const navigate = useNavigate();

    const { user } = useContext(UserContext);
    const [status, setStatus] = useState(false);
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get(`/certification-requests/${user._id}`);
                setRequests(response.data);
            } catch (error) {
                console.error("Error fetching certification requests:", error);
            }
        };

        fetchRequests();
    }, [user._id]);

    const handleReturn = () => {
        navigate(`/student/${user._id}`);
    };

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('el-GR', options);
    };

    return (
        <div>
            <Navbar />
            <NavBarOptions userType={user.role} userId={user._id} />
            <Path id={user._id} />
            <h2 className="text-center text-4xl font-thin justify-center mt-10 mb-8">
                Ιστορικό Αιτήσεων
            </h2>
            <div>
                {requests.length > 0 ? (
                    requests.map((request, index) => (
                        <div key={index} className="flex items-center justify-center m-3 cursor-pointer text-ani">
                            {status ? (
                                <div className="flex flex-row">
                                    <p className="text-lg"> {request.certificationType} {formatDate(request.requestDate)} </p>
                                </div>
                            ) : (
                                <div className="flex flex-row items-center">
                                    <p className="text-lg"> {request.certificationType} {formatDate(request.requestDate)}</p>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="flex flex-col items-center">
                        <h2 className="text-center text-2xl font-semibold text-red-800 m-28">
                            Δεν βρέθηκε ιστορικό. <br /> Βεβαιωθείτε ότι έχετε αιτηθεί τουλάχιστον ένα πιστοποιητικό.
                        </h2>

                        <button onClick={handleReturn} className="text-white px-4 py-2 rounded-lg bg-green-700 hover:text-green-600 shadow-md hover:shadow-xl">
                            Επιστροφή στην Αρχική
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Status;