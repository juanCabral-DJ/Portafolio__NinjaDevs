 const yearSpan = document.getElementById("year");

  // Obtener el año actual
  const currentYear = new Date().getFullYear();

  // Establecer el año en el elemento "year"
  yearSpan.textContent = currentYear;

  //header sticky
  const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

//animacion
const animatedElements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate--visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

animatedElements.forEach((el) => observer.observe(el));