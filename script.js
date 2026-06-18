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
  // A Storm Which Never Existed
  { src: "images/a-storm-which-never-existed/console.jpg", link: "project-01.html" },
  { src: "images/a-storm-which-never-existed/prints.jpg", link: "project-01.html" },
  { src: "images/a-storm-which-never-existed/satellite.jpg", link: "project-01.html" },
  { src: "images/a-storm-which-never-existed/entire-document.jpg", link: "project-01.html" },
  // How Do You Know If The Same Raindrop Hits You Twice?
  { src: "images/how-do-you-know-if-the-same-raindrop-hits-you-twice/rain-1.jpg", link: "project-03.html" },
  { src: "images/how-do-you-know-if-the-same-raindrop-hits-you-twice/rain-2.jpg", link: "project-03.html" },
  { src: "images/how-do-you-know-if-the-same-raindrop-hits-you-twice/rain-3.jpg", link: "project-03.html" },
  { src: "images/how-do-you-know-if-the-same-raindrop-hits-you-twice/raindrop-video-poster.jpg", link: "project-03.html" },
  // Indeterminate Dice (still frames from the videos)
  { src: "images/indeterminate-dice/dice-roll-1-poster.jpg", link: "project-02.html" },
  { src: "images/indeterminate-dice/dice-roll-2-poster.jpg", link: "project-02.html" },
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
