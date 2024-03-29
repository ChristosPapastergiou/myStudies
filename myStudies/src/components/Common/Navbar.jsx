import React from "react";
import axios from "axios";

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../UserContext";

import universityLogo from "../../assets/UniLogo.png";

const Navbar = () => {
    const navigate = useNavigate();

    const [menu, setMenu] = useState(false);
    const { user, setUser } = useContext(UserContext);

    const handleChange = () => {
        setMenu(!menu);
    };

    async function logout() {
        await axios.post("/logout");
        setUser(null);
        navigate("/login");
    }

    return (
        <nav className="bg-gray-100 items-center w-full z-30 top-0 relative">
            <div className="flex items-center justify-between p-5 px-5 md:px-32 shadow-xl hover:shadow-2xl">
                <div className="flex items-center">
                    <img
                        loading="lazy"
                        src={universityLogo}
                        alt="University Logo"
                        className="h-20 w-auto mr-3"
                    />

                    <div>
                        <Link to={user ? `/${user.role}/${user._id}` : "/login"} className="font-semibold text-2xl p-1 cursor-pointer"> {" "} myStudies {" "} </Link>

                        <div className="text-xs leading-none text-left p-1">
                            <h1> ΕΘΝΙΚΟ & ΚΑΠΟΔΙΣΤΡΙΑΚΟ ΠΑΝΕΠΙΣΤΉΜΙΟ ΑΘΗΝΩΝ </h1>
                        </div>
                    </div>
                </div>

                {user && (
                    <div className="hidden md:justify-items-end md:flex gap-5 font-medium p-1 text-center my-auto text-lg flex-col items-stretch w-[38%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex items-stretch justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                            <div className="text-center text-lg font-medium my-auto">
                                <Link to={`/${user.role}/${user._id}`} className="hover:text-[#3f6591] transition-all cursor-pointer"> Αρχική Σελίδα </Link>
                            </div>

                            <div className="text-center text-lg font-medium my-auto">
                                <Link to={`/profile/${user._id}`} className="hover:text-[#3f6591] transition-all cursor-pointer"> {user.username} </Link>
                            </div>

                            <div className="flex items-end md:justify-items-end gap-5">
                                <button className="text-white text-center bg-teal-600 hover:bg-teal-700 font-medium rounded-lg text-sm px-4 py-2 shadow-md hover:shadow-xl info-container" type="button" onClick={logout}> Αποσύνδεση </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;