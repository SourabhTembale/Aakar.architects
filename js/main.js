document.addEventListener("DOMContentLoaded", () => {
  const projectsLink = document.getElementById("projects-link");
  const projectsSection = document.getElementById("projects-section");
  const gallery = document.getElementById("project-gallery");

  projectsLink.addEventListener("click", (e) => {
    e.preventDefault();

    // Hide all other sections if needed
    document.querySelectorAll("section").forEach((sec) => sec.style.display = "none");

    // Show the project section
    projectsSection.style.display = "block";

    // Populate images if not already populated
    if (gallery.childElementCount === 0) {
      for (let i = 1; i <= 25; i++) {
        const card = document.createElement("div");
        card.className = "project-card";

        const img = document.createElement("img");
        img.src = `data/images/${i}.avif`; // adjust path if different
        img.alt = `Project ${i}`;

        card.appendChild(img);
        gallery.appendChild(card);
      }
    }
  });
});
