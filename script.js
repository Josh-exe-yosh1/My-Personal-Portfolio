

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        const selectedCategory = button.getAttribute("data-filter");


        projectCards.forEach(function(card) {

            const projectCategory =
                card.getAttribute("data-category");


            if (
                selectedCategory === "all" ||
                selectedCategory === projectCategory
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});



const detailsButtons =
    document.querySelectorAll(".details-btn");


detailsButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const details =
            button.nextElementSibling;


        details.classList.toggle("show");


        if (details.classList.contains("show")) {

            button.textContent = "Hide Details";

        } else {

            button.textContent = "View Details";

        }

    });

});



const contactForm =
    document.getElementById("contactForm");


const nameInput =
    document.getElementById("name");


const emailInput =
    document.getElementById("email");


const messageInput =
    document.getElementById("message");


const nameError =
    document.getElementById("nameError");


const emailError =
    document.getElementById("emailError");


const messageError =
    document.getElementById("messageError");


const formSuccess =
    document.getElementById("formSuccess");



contactForm.addEventListener("submit", function(event) {

    event.preventDefault();



    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";


    let valid = true;



    if (nameInput.value.trim() === "") {

        nameError.textContent =
            "Please enter your name.";

        valid = false;

    }



    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Please enter your email address.";

        valid = false;

    }

    else if (!emailPattern.test(emailInput.value)) {

        emailError.textContent =
            "Please enter a valid email address.";

        valid = false;

    }


    if (messageInput.value.trim() === "") {

        messageError.textContent =
            "Please enter a message.";

        valid = false;

    }



    if (valid) {

        formSuccess.textContent =
            "Thank you! Your message has been submitted.";

        contactForm.reset();

    }

});