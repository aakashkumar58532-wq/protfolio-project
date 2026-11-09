
document.addEventListener("DOMContentLoaded", () => {

    // PROJECT DETAILS

    const projects = [
        {
            name: "Task Manager",
            icon: "📋",
            tag: "Productivity App",
            description:
                "A task management application designed to organize daily activities, manage tasks and improve productivity.",
            github:
                "https://github.com/aakashkumar58532-wq/task-manager"
        },

        {
            name: "E-Commerce App",
            icon: "🛒",
            tag: "Web Application",
            description:
                "An online shopping application project designed to provide users with a convenient shopping experience.",
            github:
                "https://github.com/aakashkumar58532-wq/ecommerce-app"
        },

        {
            name: "Blog Platform",
            icon: "📝",
            tag: "Content Platform",
            description:
                "A blogging platform project where users can explore and share their content and ideas.",
            github:
                "https://github.com/aakashkumar58532-wq/blog-platform"
        },

        {
            name: "Portfolio Website",
            icon: "💻",
            tag: "Personal Website",
            description:
                "My personal portfolio website showcasing my skills, projects and development journey.",
            github:
                "https://github.com/aakashkumar58532-wq/portfolio-project"
        },

        {
            name: "EduGenie",
            icon: "🎓",
            tag: "AI Educational Chatbot",
            description:
                "An AI-powered educational chatbot inspired by ChatGPT, specially designed for students to ask academic questions and get learning assistance.",
            github:
                "https://github.com/aakashkumar58532-wq/Edugenie",
            featured: true
        }
    ];


    // DISPLAY PROJECTS

    const projectsContainer =
        document.getElementById("projects-container");

    projects.forEach((project) => {

        const card = document.createElement("div");

        card.className = project.featured
            ? "project-card featured"
            : "project-card";

        const tag = document.createElement("span");
        tag.className = "project-tag";
        tag.textContent = project.tag;

        const icon = document.createElement("div");
        icon.className = "project-icon";
        icon.textContent = project.icon;

        const title = document.createElement("h3");
        title.textContent = project.name;

        const description = document.createElement("p");
        description.textContent = project.description;

        const links = document.createElement("div");
        links.className = "project-links";

        const githubLink = document.createElement("a");
        githubLink.href = project.github;
        githubLink.target = "_blank";
        githubLink.rel = "noopener noreferrer";
        githubLink.textContent = "GitHub ↗";

        links.appendChild(githubLink);

        card.append(
            tag,
            icon,
            title,
            description,
            links
        );

        projectsContainer.appendChild(card);

    });


    // CONTACT FORM

    const contactForm =
        document.getElementById("contactForm");

    contactForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();

        const data = {
            name: name,
            email: email,
            message: message
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
                throw new Error("Message sending failed");
            }

            const result = await response.text();

            alert(result);

            contactForm.reset();

        } catch (error) {

            console.error(error);

            alert(
                "Unable to send message. Please check your backend server."
            );

        }

    });

});
