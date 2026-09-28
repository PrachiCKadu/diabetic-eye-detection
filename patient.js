/* =====================================================
   DIA VISION PATIENT DASHBOARD
   JavaScript
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       ELEMENTS
       ================================================= */

    const imageInput =
        document.getElementById("imageInput");

    const uploadArea =
        document.getElementById("uploadArea");

    const previewArea =
        document.getElementById("previewArea");

    const previewImage =
        document.getElementById("previewImage");

    const fileName =
        document.getElementById("fileName");

    const fileSize =
        document.getElementById("fileSize");

    const removeImage =
        document.getElementById("removeImage");

    const analyzeBtn =
        document.getElementById("analyzeBtn");

    const analysisLoading =
        document.getElementById("analysisLoading");

    const predictionResult =
        document.getElementById("predictionResult");

    const newScreeningBtn =
        document.getElementById("newScreeningBtn");

    const reportBtn =
        document.getElementById("reportBtn");

    const startScreeningBtn =
        document.getElementById("startScreeningBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const sidebar =
        document.querySelector(".sidebar");

    const logoutBtn =
        document.getElementById("logoutBtn");

    const searchInput =
        document.getElementById("searchInput");


    /* =================================================
       SIDEBAR NAVIGATION
       ================================================= */

    const menuItems =
        document.querySelectorAll(".menu-item");

    menuItems.forEach(function (item) {

        item.addEventListener("click", function () {

            menuItems.forEach(function (menu) {

                menu.classList.remove("active");

            });

            item.classList.add("active");

            const section =
                item.getAttribute("data-section");

            navigateToSection(section);

            if (window.innerWidth <= 900) {

                sidebar.classList.remove("open");

            }

        });

    });


    /* =================================================
       OTHER DATA-SECTION BUTTONS
       ================================================= */

    document
        .querySelectorAll("[data-section]")
        .forEach(function (button) {

            if (button.classList.contains("menu-item")) {
                return;
            }

            button.addEventListener("click", function () {

                const section =
                    button.getAttribute("data-section");

                navigateToSection(section);

            });

        });


    function navigateToSection(section) {

        let target = null;

        switch (section) {

            case "dashboard":
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                return;

            case "upload":
                target =
                    document.getElementById("uploadSection");
                break;

            case "screening":
                target =
                    document.getElementById("uploadSection");
                break;

            case "history":
                target =
                    document.getElementById("historySection");
                break;

            case "appointments":
                target =
                    document.getElementById("appointmentsSection");
                break;

            case "doctor":
                target =
                    document.getElementById("doctorSection");
                break;

            case "reports":
                target =
                    document.getElementById("historySection");
                break;

            default:
                target = null;

        }

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }


    /* =================================================
       START SCREENING
       ================================================= */

    if (startScreeningBtn) {

        startScreeningBtn.addEventListener(
            "click",
            function () {

                const uploadSection =
                    document.getElementById(
                        "uploadSection"
                    );

                uploadSection.scrollIntoView({
                    behavior: "smooth"
                });

                setTimeout(function () {

                    imageInput.click();

                }, 500);

            }
        );

    }


    /* =================================================
       FILE INPUT
       ================================================= */

    if (imageInput) {

        imageInput.addEventListener(
            "change",
            function (event) {

                const file =
                    event.target.files[0];

                if (!file) {
                    return;
                }

                handleFile(file);

            }
        );

    }


    /* =================================================
       HANDLE FILE
       ================================================= */

    function handleFile(file) {

        const allowedTypes = [
            "image/jpeg",
            "image/jpg",
            "image/png"
        ];

        if (!allowedTypes.includes(file.type)) {

            alert(
                "Please upload a JPG, JPEG or PNG image."
            );

            imageInput.value = "";

            return;

        }


        const maxSize =
            10 * 1024 * 1024;

        if (file.size > maxSize) {

            alert(
                "Image size must be less than 10 MB."
            );

            imageInput.value = "";

            return;

        }


        const reader =
            new FileReader();


        reader.onload = function (event) {

            previewImage.src =
                event.target.result;

            fileName.textContent =
                file.name;

            fileSize.textContent =
                formatFileSize(file.size);


            uploadArea.classList.add(
                "hidden"
            );

            predictionResult.classList.add(
                "hidden"
            );

            analysisLoading.classList.add(
                "hidden"
            );

            previewArea.classList.remove(
                "hidden"
            );

        };


        reader.onerror = function () {

            alert(
                "Unable to read the selected image."
            );

        };


        reader.readAsDataURL(file);

    }


    /* =================================================
       FORMAT FILE SIZE
       ================================================= */

    function formatFileSize(bytes) {

        if (bytes < 1024) {

            return bytes + " Bytes";

        }

        if (bytes < 1024 * 1024) {

            return (
                (bytes / 1024).toFixed(1)
                + " KB"
            );

        }

        return (
            (bytes / (1024 * 1024)).toFixed(2)
            + " MB"
        );

    }


    /* =================================================
       REMOVE IMAGE
       ================================================= */

    if (removeImage) {

        removeImage.addEventListener(
            "click",
            resetScreening
        );

    }


    function resetScreening() {

        imageInput.value = "";

        previewImage.src = "";

        previewArea.classList.add(
            "hidden"
        );

        analysisLoading.classList.add(
            "hidden"
        );

        predictionResult.classList.add(
            "hidden"
        );

        uploadArea.classList.remove(
            "hidden"
        );

    }


    /* =================================================
       ANALYZE IMAGE
       ================================================= */

    if (analyzeBtn) {

        analyzeBtn.addEventListener(
            "click",
            function () {

                if (!imageInput.files.length) {

                    alert(
                        "Please upload a retinal image first."
                    );

                    return;

                }


                previewArea.classList.add(
                    "hidden"
                );

                analysisLoading.classList.remove(
                    "hidden"
                );


                /*
                 * DEMO MODEL PROCESSING
                 *
                 * Replace this setTimeout with your
                 * actual Flask/FastAPI API request.
                 */

                setTimeout(function () {

                    analysisLoading.classList.add(
                        "hidden"
                    );

                    predictionResult.classList.remove(
                        "hidden"
                    );

                }, 2500);

            }
        );

    }


    /* =================================================
       NEW SCREENING
       ================================================= */

    if (newScreeningBtn) {

        newScreeningBtn.addEventListener(
            "click",
            function () {

                resetScreening();

                setTimeout(function () {

                    imageInput.click();

                }, 300);

            }
        );

    }


    /* =================================================
       REPORT BUTTON
       ================================================= */

    if (reportBtn) {

        reportBtn.addEventListener(
            "click",
            function () {

                alert(
                    "Detailed screening report will be available here."
                );

            }
        );

    }


    /* =================================================
       DRAG AND DROP
       ================================================= */

    if (uploadArea) {

        uploadArea.addEventListener(
            "dragover",
            function (event) {

                event.preventDefault();

                uploadArea.classList.add(
                    "dragover"
                );

            }
        );


        uploadArea.addEventListener(
            "dragleave",
            function () {

                uploadArea.classList.remove(
                    "dragover"
                );

            }
        );


        uploadArea.addEventListener(
            "drop",
            function (event) {

                event.preventDefault();

                uploadArea.classList.remove(
                    "dragover"
                );


                const files =
                    event.dataTransfer.files;


                if (files.length > 0) {

                    const file = files[0];

                    handleFile(file);

                }

            }
        );

    }


    /* =================================================
       MOBILE SIDEBAR
       ================================================= */

    if (mobileMenu) {

        mobileMenu.addEventListener(
            "click",
            function () {

                sidebar.classList.toggle(
                    "open"
                );

            }
        );

    }


    /* =================================================
       LOGOUT
       ================================================= */

    if (logoutBtn) {

        logoutBtn.addEventListener(
            "click",
            function () {

                const confirmLogout =
                    confirm(
                        "Are you sure you want to logout?"
                    );

                if (confirmLogout) {

                    /*
                     * Connect your login page here.
                     */

                    window.location.href =
                        "login.html";

                }

            }
        );

    }


    /* =================================================
       SEARCH
       ================================================= */

    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    const value =
                        searchInput.value.trim();

                    if (value !== "") {

                        alert(
                            "Searching for: " + value
                        );

                    }

                }

            }
        );

    }


    /* =================================================
       KEYBOARD SHORTCUT
       ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                (event.ctrlKey || event.metaKey) &&
                event.key.toLowerCase() === "k"
            ) {

                event.preventDefault();

                searchInput.focus();

            }

        }
    );


    /* =================================================
       TABLE REPORT BUTTONS
       ================================================= */

    const tableButtons =
        document.querySelectorAll(
            ".table-btn"
        );


    tableButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                alert(
                    "Opening screening report..."
                );

            }
        );

    });


    /* =================================================
       INITIAL MESSAGE
       ================================================= */

    console.log(
        "Dia Vision Patient Dashboard loaded successfully."
    );

});