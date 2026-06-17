// ================================================================
// script.js
//
// 1. Picks a random image to show on the homepage.
// 2. Sets the active state on the "Work" nav link on project pages.
// ================================================================

// ----------------------------------------------------------------
// HOMEPAGE RANDOM IMAGE
// EDIT: Add one entry per image you want to appear at random on the
// homepage. For each, set:
//   src  — the image file path (inside the images/ folder)
//   link — the project page that image belongs to
// As you build projects, just add their images here.
// ----------------------------------------------------------------
const homepageImages = [
  // --- Temporary placeholders so you can see the feature working. ---
  // Delete these and replace with your real project images.
  { src: "images/placeholder-01.svg", link: "project-01.html" },
  { src: "images/placeholder-02.svg", link: "project-01.html" },
  { src: "images/placeholder-03.svg", link: "project-01.html" },
  { src: "images/placeholder-04.svg", link: "project-01.html" },
  // Real example format:
  // { src: "images/project-01-a.jpg", link: "project-01.html" },
  // Add more lines above this one.
];

document.addEventListener("DOMContentLoaded", function () {
  // ---- Random homepage image ----
  const imgEl = document.getElementById("random-image");
  const linkEl = document.getElementById("random-link");
  const emptyEl = document.getElementById("random-empty");

  if (imgEl && linkEl) {
    if (homepageImages.length > 0) {
      const pick = homepageImages[Math.floor(Math.random() * homepageImages.length)];
      imgEl.src = pick.src;
      imgEl.alt = "";
      linkEl.href = pick.link;
    } else {
      // No images added yet — hide the broken image, show the note.
      linkEl.hidden = true;
      if (emptyEl) emptyEl.hidden = false;
    }
  }

  // ---- Active nav state on project pages ----
  const path = window.location.pathname;
  if (path.includes("project-")) {
    document.querySelectorAll("nav a").forEach(function (a) {
      if (a.getAttribute("href") === "index.html") {
        a.classList.add("active");
      }
    });
  }
});
