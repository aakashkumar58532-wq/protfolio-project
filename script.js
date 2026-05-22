document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (!form) {

        console.log("Form not found");
        return;
    }

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const data = {

            name: document.getElementById("name").value,

            email: document.getElementById("email").value,

            message: document.getElementById("message").value
        };

        try {

            const response = await fetch("http://localhost:5000/contact", {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)
            });

            const result = await response.text();

            alert(result);

        } catch (error) {

            console.log(error);

            alert("Error sending message");
        }
    });
});
