// ===============================
// MFN Script v1.0
// ===============================

// Sticky Header
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});

// Reveal Animation
const reveals = document.querySelectorAll("section");

function revealSection() {

    const windowHeight = window.innerHeight;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSection);
revealSection();

// Button Hover Effect
document.querySelectorAll(".btn,.btn-outline,.card-btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 80;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// Scroll To Top Button

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.className = "top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Loading Animation

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

console.log("✅ MFN Loaded Successfully");

/* Scroll Animation */

section{
opacity:0;
transform:translateY(50px);
transition:.8s;
}

section.active{
opacity:1;
transform:translateY(0);
}

/* Sticky Header */

.header.sticky{
background:#000;
box-shadow:0 5px 20px rgba(0,0,0,.4);
}

/* Top Button */

.top-btn{
position:fixed;
bottom:30px;
right:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#00ff84;
color:#000;
font-size:22px;
cursor:pointer;
display:none;
z-index:9999;
}