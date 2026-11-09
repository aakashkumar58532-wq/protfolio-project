document.addEventListener("DOMContentLoaded", () => {

    const projects = [
        {
            name: "Task Manager",
            icon: "📋",
            description: "A task management application designed to organize daily activities, manage tasks and improve productivity.",
            github: "https://github.com/aakashkumar58532-wq/task-manager"
        },
        {
            name: "E-Commerce App",
            icon: "🛒",
            description: "An online shopping application project designed to provide users with a convenient shopping experience.",
            github: "https://github.com/aakashkumar58532-wq/ecommerce-app"
        },
        {
            name: "Blog Platform",
            icon: "📝",
            description: "A blogging platform project where users can explore and share content.",
            github: "https://github.com/aakashkumar58532-wq/blog-platform"
        },
        {
            name: "Portfolio Website",
            icon: "💻",
            description: "My personal portfolio website showcasing my skills, projects and development journey.",
            github: "https://github.com/aakashkumar58532-wq/portfolio-project"
        },
        {
            name: "EduGenie",
            icon: "🎓",
            description: "An AI-powered educational chatbot inspired by ChatGPT, designed especially for students to ask academic questions, understand concepts and get learning assistance.",
            github: "",
            featured: true
        }
    ];

    const container = document.getElementById("projects-container");

    projects.forEach(project => {

        const card = document.createElement("div");

        card.className = project.featured
            ? "project-card featured"
            : "project-card";

        card.innerHTML = `
            <div class="project-icon">${project.icon}</div>

            <h3>${project.name}</h3>

            <p>${project.description}</p>

            <div class="project-links">
                ${
                    project.github
                    ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`
                    : `<span>GitHub link coming soon</span>`
                }
            </div>
        `;

        container.appendChild(card);
    });


    // Contact Form

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        try {

            const response = await fetch(
                "http://localhost:5000/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );

            if (!response.ok) {
                throw new Error("Message could not be sent");
            }

            const result = await response.text();

            alert(result);
            form.reset();

        } catch (error) {

            console.log(error);

            alert("Unable to send message. Please check whether the backend server is running.");

        }
    });

});
