document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("projects-link");
  const section = document.getElementById("projects-gallery");
  const grid = document.getElementById("project-grid");

  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Only load once
    if (grid.children.length === 0) {
      for (let i = 1; i <= 25; i++) {
        const img = document.createElement("img");
        img.src = `images/${i}.avif`;
        img.alt = `Project ${i}`;
        img.classList.add("project-img");
        grid.appendChild(img);
      }
    }

    section.style.display = "block";
    section.scrollIntoView({ behavior: "smooth" });
  });
});
