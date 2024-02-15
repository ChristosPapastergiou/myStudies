# University Page (UOA)

Reconstruction of the university page (UOA).

The recostruction of a page involves 3 steps :
- Finding as many errors as possible can be found (Research and tests in the page)
- Redesigning the appearance of the page to make it better and reduce the founded errors (Figma)
- Implemention of the page with the application of the previous steps

# What has been used in the app

React, Vite, Tailwind, Express, MongoDB

# Code Organization:
- The code is organized with a focus on easy extensibility. 
    - components : Tools/Pages needed in multiple places on our pages.
    - Pages are organized into categories according to their type.

- Folders containing the implemented pages:
    - Common : Common pages used by both students and teachers.
        - Help : Support pages for various questions to facilitate user assistance.
            - Recovery.jsx : Password recovery.
            - MobileApp.jsx : "Advertisement" of the mobile application.
            - ConnectHelp.jsx : Assistance for users who do not know how to connect to the platform.
            - ContactAdmin.jsx : Contacting the administrator.
            - CommonQuestions.jsx :Frequently asked questions (one for students and one for teachers).

        - Login.jsx : Page for user login to the myStudies platform (uses the Login component for user authentication).
        - Profile.jsx : User profile with personal details.

    - Student : Pages for students
        - Certifications : Pages for certifications.
            - Certifications.jsx : Page with various options for a user regarding certifications (apply, view application history, or check status).
            - CertificationsStatus.jsx :View the status of applications made by a student.
            - CertificationsHistory.jsx : View the history of applications made by a student.
            - CertificationsRequest.jsx : Process for applying for a certification with steps a student needs to follow.

        - CoursesProgram : View of the study program
            - Courses.jsx : Page for viewing the study program of the school with the courses offered in each semester.
            
        - Declarations : Course declarations
            - Declarations.jsx : Process for declaring the courses a student wants to take in a semester with steps a student needs to follow.

        - Grades : View grades
            - GradesStudent.jsx :View of grades in the courses taken by a student with various options or filters that someone might want. 

        - HistoryDeclarations : View of declaration history
            - History.jsx : View of the declarations made by a user in the past up to the most recent.

        - Home : Main Page for students
            - Home.jsx : Central page providing useful information about the user's progress in school.

    - Professor : Pages for teachers
        - Grades : Pages for updating or declaring grades in the courses taught by a teacher in the semester.
            - GradesProfessor.jsx : Providing options for a teacher regarding the grading of students (record grades/view old grades).
            - GradesCreate.jsx :  Page where a teacher can record students' grades.
            - GradesShow.jsx : Page where a teacher can view old grades.

        - Home : Main Page for teachers
            - Home.jsx : Central page providing information about the courses a teacher has taken in the semester.

# Run the app

Frontend :

    cd myStudies 
    npm install
    npm run dev

Backend:

    cd api
    npm install
    node index.js

# Users

Students:
- usernames:
    - sdi2400001
    - sdi1900125
    - sdi2400222

Professors:
- usernames:
    - ioikonomou
    - nickpetras

- The password for every user is ```pass123```
