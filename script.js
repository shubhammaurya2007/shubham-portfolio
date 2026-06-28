/* =========================
   AOS
========================= */

AOS.init({
    duration: 1000,
    once: true
});

/* =========================
   TYPING EFFECT
========================= */

new Typed(".typing", {
    strings: [
        "Python Developer",
        "Frontend Developer",
        "AI & ML Student",
        "Problem Solver",
        "Open to Internship"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

/* =========================
   PARTICLES
========================= */

particlesJS("particles-js", {
    particles: {
        number: {
            value: 80
        },
        color: {
            value: "#3b82f6"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5
        },
        size: {
            value: 3
        },
        move: {
            enable: true,
            speed: 2
        },
        links: {
            enable: true,
            color: "#3b82f6",
            distance: 150
        }
    }
});

/* =========================
   ACTIVE NAVBAR
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

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

/* =========================
   BACK TO TOP
========================= */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#2563eb;
color:white;
font-size:20px;
cursor:pointer;
display:none;
box-shadow:0 10px 20px rgba(0,0,0,.3);
z-index:999;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/* =========================
   REVEAL ANIMATION
========================= */

const cards = document.querySelectorAll(".card,.project,.timeline-item");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

cards.forEach(card => {

    observer.observe(card);

});

/* =========================
   CURSOR GLOW
========================= */

const glow = document.createElement("div");

glow.id = "cursorGlow";

document.body.appendChild(glow);

glow.style.cssText = `
position:fixed;
width:25px;
height:25px;
border-radius:50%;
background:#3b82f6;
filter:blur(12px);
pointer-events:none;
z-index:9999;
`;

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX - 12 + "px";
    glow.style.top = e.clientY - 12 + "px";

});