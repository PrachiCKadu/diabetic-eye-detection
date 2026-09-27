document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    console.log("Dia Vision Dashboard loaded successfully");

    /* =========================================
       TOAST MESSAGE
    ========================================= */

    function showToast(message) {
        let toast = document.getElementById("dia-toast");

        if (!toast) {
            toast = document.createElement("div");
            toast.id = "dia-toast";

            Object.assign(toast.style, {
                position: "fixed",
                left: "50%",
                bottom: "25px",
                transform: "translateX(-50%)",
                padding: "12px 20px",
                background: "#0b2a50",
                color: "#ffffff",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "600",
                zIndex: "99999",
                boxShadow: "0 8px 25px rgba(0,0,0,.18)",
                opacity: "0",
                transition: "opacity .25s ease"
            });

            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.style.opacity = "1";

        clearTimeout(window.diaToastTimer);

        window.diaToastTimer = setTimeout(() => {
            toast.style.opacity = "0";
        }, 2000);
    }


    /* =========================================
       SIDEBAR NAVIGATION
    ========================================= */

    const navItems = document.querySelectorAll(
        ".nav-item"
    );

    navItems.forEach((item) => {

        item.addEventListener("click", (event) => {

            event.preventDefault();

            navItems.forEach((nav) => {
                nav.classList.remove("active");
            });

            item.classList.add("active");

            const text = item.textContent.trim();

            if (text) {
                showToast(text + " selected");
            }
        });

    });


    /* =========================================
       SEARCH
    ========================================= */

    const searchInput =
        document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            (event) => {

                if (event.key === "Enter") {

                    const value =
                        searchInput.value.trim();

                    if (value.length > 0) {

                        showToast(
                            `Searching for "${value}"`
                        );

                    }

                }

            }
        );

    }


    /* =========================================
       CTRL + K / COMMAND + K
    ========================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                (event.ctrlKey || event.metaKey) &&
                event.key.toLowerCase() === "k"
            ) {

                event.preventDefault();

                if (searchInput) {

                    searchInput.focus();
                    searchInput.select();

                }

            }

        }
    );


    /* =========================================
       REVIEW NOW BUTTON
    ========================================= */

    const reviewButtons =
        document.querySelectorAll(
            ".review-btn, [data-action='review']"
        );

    reviewButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                showToast(
                    "Opening retinal images for review..."
                );

            }
        );

    });


    /* =========================================
       TOTAL PATIENTS
    ========================================= */

    const patientButtons =
        document.querySelectorAll(
            "[data-action='patients']"
        );

    patientButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                showToast(
                    "Opening patient records..."
                );

            }
        );

    });


    /* =========================================
       GENERATE REPORT
    ========================================= */

    const reportButtons =
        document.querySelectorAll(
            "[data-action='report']"
        );

    reportButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                showToast(
                    "Generating screening report..."
                );

            }
        );

    });


    /* =========================================
       REVIEW PREDICTIONS
    ========================================= */

    const predictionButtons =
        document.querySelectorAll(
            "[data-action='predictions']"
        );

    predictionButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                showToast(
                    "Opening AI predictions..."
                );

            }
        );

    });


    /* =========================================
       SEE DETAILS
    ========================================= */

    const detailsButtons =
        document.querySelectorAll(
            "[data-action='details']"
        );

    detailsButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                showToast(
                    "Opening screening statistics..."
                );

            }
        );

    });


    /* =========================================
       SEE ALL FOLLOW-UP PATIENTS
    ========================================= */

    const seeAllButtons =
        document.querySelectorAll(
            "[data-action='see-all']"
        );

    seeAllButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                showToast(
                    "Showing all follow-up patients..."
                );

            }
        );

    });


    /* =========================================
       FOLLOW-UP PATIENTS
    ========================================= */

    const patientCards =
        document.querySelectorAll(
            ".patient, .follow-up-patient, .patient-row"
        );

    patientCards.forEach((patient) => {

        patient.addEventListener(
            "click",
            () => {

                const nameElement =
                    patient.querySelector(
                        ".patient-name, strong, h4"
                    );

                if (nameElement) {

                    const name =
                        nameElement.textContent.trim();

                    if (name) {

                        showToast(
                            `Opening ${name}'s record...`
                        );

                    }

                } else {

                    showToast(
                        "Opening patient record..."
                    );

                }

            }
        );

    });


    /* =========================================
       SETTINGS BUTTON
    ========================================= */

    const settingsButton =
        document.querySelector(
            ".settings-square, .settings-btn, [data-action='settings']"
        );

    if (settingsButton) {

        settingsButton.addEventListener(
            "click",
            () => {

                showToast(
                    "Clinic settings opened"
                );

            }
        );

    }


    /* =========================================
       HELP BUTTON
    ========================================= */

    const helpButton =
        document.querySelector(
            ".help-btn, [data-action='help']"
        );

    if (helpButton) {

        helpButton.addEventListener(
            "click",
            () => {

                showToast(
                    "Help center opened"
                );

            }
        );

    }


    /* =========================================
       NOTIFICATION BUTTON
    ========================================= */

    const notificationButton =
        document.querySelector(
            ".notification-btn, [data-action='notifications']"
        );

    if (notificationButton) {

        notificationButton.addEventListener(
            "click",
            () => {

                showToast(
                    "You have new notifications"
                );

            }
        );

    }


    /* =========================================
       AI DOCTOR ASSISTANT
    ========================================= */

    const askAIButton =
        document.getElementById("askAi");

    const aiInput =
        document.getElementById("aiInput");

    const aiResponse =
        document.getElementById("aiResponse");


    function askAI() {

        if (!aiInput) {
            return;
        }

        const question =
            aiInput.value.trim();


        if (question === "") {

            if (aiResponse) {

                aiResponse.textContent =
                    "Please enter a question.";

                aiResponse.classList.add("show");

            }

            showToast(
                "Please enter a question"
            );

            return;
        }


        if (aiResponse) {

            aiResponse.textContent =
                `AI Assistant received: "${question}"`;

            aiResponse.classList.add("show");

        }

        showToast(
            "AI Assistant is processing..."
        );

    }


    if (askAIButton) {

        askAIButton.addEventListener(
            "click",
            askAI
        );

    }


    if (aiInput) {

        aiInput.addEventListener(
            "keydown",
            (event) => {

                if (event.key === "Enter") {

                    event.preventDefault();

                    askAI();

                }

            }
        );

    }


    /* =========================================
       AI QUICK ACTIONS
    ========================================= */

    const aiQuickActions =
        document.querySelectorAll(
            ".ai-quick-action, [data-ai-action]"
        );

    aiQuickActions.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const action =
                    button.dataset.aiAction ||
                    button.textContent.trim();

                if (aiInput) {

                    aiInput.value = action;

                }

                askAI();

            }
        );

    });


    /* =========================================
       MOBILE SIDEBAR
    ========================================= */

    const mobileMenu =
        document.getElementById("mobileMenu");

    const sidebar =
        document.querySelector(".sidebar");


    if (mobileMenu && sidebar) {

        mobileMenu.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

                sidebar.classList.toggle("open");

            }
        );


        document.addEventListener(
            "click",
            (event) => {

                if (
                    window.innerWidth <= 1050 &&
                    sidebar.classList.contains("open")
                ) {

                    if (
                        !sidebar.contains(event.target) &&
                        !mobileMenu.contains(event.target)
                    ) {

                        sidebar.classList.remove("open");

                    }

                }

            }
        );

    }


    /* =========================================
       LOGO ERROR CHECK
    ========================================= */

    const logo =
        document.querySelector(
            ".brand-mark img"
        );

    if (logo) {

        logo.addEventListener(
            "error",
            () => {

                console.error(
                    "Dia Vision logo could not be loaded. Check logo.png path."
                );

            }
        );

    }


    /* =========================================
       BUTTON HOVER / CLICK FEEDBACK
    ========================================= */

    const allButtons =
        document.querySelectorAll("button");

    allButtons.forEach((button) => {

        button.addEventListener(
            "mousedown",
            () => {

                button.style.transform =
                    "scale(.98)";

            }
        );

        button.addEventListener(
            "mouseup",
            () => {

                button.style.transform =
                    "";

            }
        );

        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "";

            }
        );

    });


    /* =========================================
       WINDOW RESIZE
    ========================================= */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 1050 &&
                sidebar
            ) {

                sidebar.classList.remove("open");

            }

        }
    );


    /* =========================================
       INITIAL DASHBOARD MESSAGE
    ========================================= */

    console.log(
        "Dia Vision Doctor Dashboard initialized."
    );

});