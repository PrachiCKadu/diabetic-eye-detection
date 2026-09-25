 
let selectedRole = "patient";


// ------------------------ Elements  -----------------------------

const patientRole =
    document.getElementById("patientRole");

const doctorRole =
    document.getElementById("doctorRole");

const roleSlider =
    document.getElementById("roleSlider");

const patientForm =
    document.getElementById("patientForm");

const doctorForm =
    document.getElementById("doctorForm");

const formTitle =
    document.getElementById("formTitle");

const formSubtitle =
    document.getElementById("formSubtitle");

const registrationForm =
    document.getElementById("registrationForm");


// ------------------------ Patient and Doctor Switch btn -----------------------------

patientRole.addEventListener(
    "click",
    function () {

        switchRole("patient");

    }
);


doctorRole.addEventListener(
    "click",
    function () {

        switchRole("doctor");

    }
);


function switchRole(role) {

    selectedRole = role;


// ------------------------ Patient -----------------------------

    if (role === "patient") {

        roleSlider.classList.remove(
            "doctor"
        );


        patientRole.classList.add(
            "active"
        );


        doctorRole.classList.remove(
            "active"
        );


        doctorForm.style.display =
            "none";


        patientForm.style.display =
            "block";


        formTitle.textContent =
            "Create Patient Account";


        formSubtitle.textContent =
            "Register to access your diabetic eye screening";

    }

// ------------------------ Doctor -----------------------------

    else {

        roleSlider.classList.add(
            "doctor"
        );


        doctorRole.classList.add(
            "active"
        );


        patientRole.classList.remove(
            "active"
        );


        patientForm.style.display =
            "none";


        doctorForm.style.display =
            "block";


        formTitle.textContent =
            "Create Doctor Account";


        formSubtitle.textContent =
            "Register as a medical professional";

    }

}


// ------------------------ Password hide and show -----------------------------

const passwordToggles =
    document.querySelectorAll(
        ".password-toggle"
    );


passwordToggles.forEach(
    function (toggle) {

        toggle.addEventListener(
            "click",
            function () {

                const inputId =
                    this.dataset.target;

                const password =
                    document.getElementById(
                        inputId
                    );


                if (
                    password.type ===
                    "password"
                ) {

                    password.type =
                        "text";


                    this.classList.remove(
                        "fa-eye"
                    );


                    this.classList.add(
                        "fa-eye-slash"
                    );

                }

                else {

                    password.type =
                        "password";


                    this.classList.remove(
                        "fa-eye-slash"
                    );


                    this.classList.add(
                        "fa-eye"
                    );

                }

            }
        );

    }
);

// ----------------------- Validation helper ------------------------------

function showError(
    message,
    elementId
) {

    alert(message);

    document
        .getElementById(elementId)
        .focus();

}

// ------------------------  REGISTRATION -----------------------------

registrationForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        // Terms and condition 

        const terms =
            document.getElementById(
                "terms"
            ).checked;


        if (!terms) {

            alert(
                "Please agree to the Terms of Service and Privacy Policy."
            );

            return;

        }

// ------------------------ PATIENT REGISTRATION -----------------------------

        if (
            selectedRole === "patient"
        ) {

            const fullName =
                document
                    .getElementById(
                        "patientFullName"
                    )
                    .value
                    .trim();


            const email =
                document
                    .getElementById(
                        "patientEmail"
                    )
                    .value
                    .trim();


            const dob =
                document
                    .getElementById(
                        "patientDob"
                    )
                    .value;


            const gender =
                document
                    .getElementById(
                        "patientGender"
                    )
                    .value;


            const password =
                document
                    .getElementById(
                        "patientPassword"
                    )
                    .value;


            const confirmPassword =
                document
                    .getElementById(
                        "patientConfirmPassword"
                    )
                    .value;


            /* FULL NAME */

            if (fullName === "") {

                showError(
                    "Please enter your Full Name.",
                    "patientFullName"
                );

                return;

            }


            /* EMAIL */

            if (email === "") {

                showError(
                    "Please enter your Email Address.",
                    "patientEmail"
                );

                return;

            }


            /* EMAIL FORMAT */

            if (!isValidEmail(email)) {

                showError(
                    "Please enter a valid Email Address.",
                    "patientEmail"
                );

                return;

            }


            /* DOB */

            if (dob === "") {

                showError(
                    "Please select your Date of Birth.",
                    "patientDob"
                );

                return;

            }


            /* GENDER */

            if (gender === "") {

                showError(
                    "Please select your Gender.",
                    "patientGender"
                );

                return;

            }


            /* PASSWORD */

            if (password === "") {

                showError(
                    "Please enter your Password.",
                    "patientPassword"
                );

                return;

            }


            /* PASSWORD LENGTH */

            if (password.length < 6) {

                showError(
                    "Password must be at least 6 characters.",
                    "patientPassword"
                );

                return;

            }


            /* CONFIRM PASSWORD */

            if (confirmPassword === "") {

                showError(
                    "Please confirm your Password.",
                    "patientConfirmPassword"
                );

                return;

            }


            /* PASSWORD MATCH */

            if (
                password !==
                confirmPassword
            ) {

                showError(
                    "Passwords do not match.",
                    "patientConfirmPassword"
                );

                return;

            }


            /* SUCCESS */

            alert(
                "Patient registration successful!"
            );

        }


// ------------------------ Doctor Registration -----------------------------

        else {

            const fullName =
                document
                    .getElementById(
                        "doctorFullName"
                    )
                    .value
                    .trim();


            const email =
                document
                    .getElementById(
                        "doctorEmail"
                    )
                    .value
                    .trim();


            const registrationNumber =
                document
                    .getElementById(
                        "registrationNumber"
                    )
                    .value
                    .trim();


            const medicalCouncil =
                document
                    .getElementById(
                        "medicalCouncil"
                    )
                    .value;


            const qualification =
                document
                    .getElementById(
                        "qualification"
                    )
                    .value;


            const specialization =
                document
                    .getElementById(
                        "specialization"
                    )
                    .value;


            const password =
                document
                    .getElementById(
                        "doctorPassword"
                    )
                    .value;


            const confirmPassword =
                document
                    .getElementById(
                        "doctorConfirmPassword"
                    )
                    .value;


            /* FULL NAME */

            if (fullName === "") {

                showError(
                    "Please enter your Full Name.",
                    "doctorFullName"
                );

                return;

            }


            /* EMAIL */

            if (email === "") {

                showError(
                    "Please enter your Email Address.",
                    "doctorEmail"
                );

                return;

            }


            /* EMAIL FORMAT */

            if (!isValidEmail(email)) {

                showError(
                    "Please enter a valid Email Address.",
                    "doctorEmail"
                );

                return;

            }


            /* MEDICAL REGISTRATION */

            if (
                registrationNumber === ""
            ) {

                showError(
                    "Please enter your Medical Registration Number.",
                    "registrationNumber"
                );

                return;

            }


            /* MEDICAL COUNCIL */

            if (
                medicalCouncil === ""
            ) {

                showError(
                    "Please select your Medical Council.",
                    "medicalCouncil"
                );

                return;

            }


            /* QUALIFICATION */

            if (
                qualification === ""
            ) {

                showError(
                    "Please select your Qualification.",
                    "qualification"
                );

                return;

            }


            /* SPECIALIZATION */

            if (
                specialization === ""
            ) {

                showError(
                    "Please select your Specialization.",
                    "specialization"
                );

                return;

            }


            /* PASSWORD */

            if (password === "") {

                showError(
                    "Please enter your Password.",
                    "doctorPassword"
                );

                return;

            }


            /* PASSWORD LENGTH */

            if (password.length < 6) {

                showError(
                    "Password must be at least 6 characters.",
                    "doctorPassword"
                );

                return;

            }


            /* CONFIRM PASSWORD */

            if (
                confirmPassword === ""
            ) {

                showError(
                    "Please confirm your Password.",
                    "doctorConfirmPassword"
                );

                return;

            }


            /* PASSWORD MATCH */

            if (
                password !==
                confirmPassword
            ) {

                showError(
                    "Passwords do not match.",
                    "doctorConfirmPassword"
                );

                return;

            }


            /* SUCCESS */

            alert(
                "Doctor registration successful!"
            );

        }

    }
);



// ------------------------   EMAIL VALIDATION ------------------------------


function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}