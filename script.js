// ========================
// PARTICLES
// ========================

const particleContainer =
document.getElementById("particles");

for(let i = 0; i < 50; i++) {

  const particle =
  document.createElement("div");

  particle.classList.add("particle");

  particle.style.position = "fixed";

  particle.style.width = "2px";
  particle.style.height = "2px";

  particle.style.background =
  "rgba(255,255,255,0.2)";

  particle.style.borderRadius = "50%";

  particle.style.left =
  Math.random() * 100 + "vw";

  particle.style.top =
  Math.random() * 100 + "vh";

  particle.style.animation =
  `floatParticle ${
    10 + Math.random() * 10
  }s linear infinite`;

  particleContainer.appendChild(particle);
}

// ========================
// PARTICLE STYLE
// ========================

const style =
document.createElement("style");

style.innerHTML = `

@keyframes floatParticle {

  from {

    transform: translateY(0px);
    opacity: 0;
  }

  10% {

    opacity: 1;
  }

  to {

    transform: translateY(100vh);
    opacity: 0;
  }
}

`;

document.head.appendChild(style);

// ========================
// SCROLL NAVBAR EFFECT
// ========================

const navbar =
document.querySelector(".navbar");

window.addEventListener(
  "scroll",
  () => {

    if(window.scrollY > 30) {

      navbar.style.background =
      "rgba(8,14,22,0.8)";
    }

    else {

      navbar.style.background =
      "rgba(10,18,28,0.6)";
    }

  }
);

// ========================
// REVEAL ANIMATION
// ========================

const revealElements =
document.querySelectorAll(
  ".glass-card, .project-card, .education-card"
);

const observer =
new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting) {

        entry.target.animate(

          [
            {
              opacity: 0,
              transform: "translateY(40px)"
            },

            {
              opacity: 1,
              transform: "translateY(0px)"
            }
          ],

          {
            duration: 1000,
            easing: "ease",
            fill: "forwards"
          }

        );

        observer.unobserve(entry.target);
      }

    });

  },

  {
    threshold: 0.15
  }

);

revealElements.forEach((el) => {

  el.style.opacity = "0";

  observer.observe(el);
});
