// ==========================================
// OJASVA Landing Page JavaScript
// ==========================================

// -------------------------------
// Theme Toggle
// -------------------------------

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    }

});

// -------------------------------
// Load Saved Theme
// -------------------------------

window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }

});

// -------------------------------
// Sticky Navbar
// -------------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// -------------------------------
// Smooth Scroll
// -------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// -------------------------------
// Reveal Animation
// -------------------------------

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// -------------------------------
// Floating Animation
// -------------------------------

const cards = document.querySelectorAll(".floating-card");

cards.forEach((card, index) => {

    card.style.animationDelay = `${index * 0.3}s`;

});

// -------------------------------
// Active Navigation
// -------------------------------

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// -------------------------------
// Counter Animation
// -------------------------------

const counters = document.querySelectorAll(".floating-card h3");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = counter.innerText;

        if (!target.includes("%") &&
            !target.includes("₹") &&
            !target.includes("kWh")) return;

    };

    updateCounter();

});

// -------------------------------
// Button Hover Effect
// -------------------------------

document.querySelectorAll("a,button").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-3px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "";

    });

});

// -------------------------------
// Scroll To Top
// -------------------------------

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

scrollBtn.id = "scrollTop";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.right = "30px";
scrollBtn.style.bottom = "30px";
scrollBtn.style.width = "55px";
scrollBtn.style.height = "55px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#10B981";
scrollBtn.style.color = "#fff";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";
scrollBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// -------------------------------
// Hero Floating Effect
// -------------------------------

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    cards.forEach(card => {

        card.style.transform = `translate(${x}px, ${y}px)`;

    });

});