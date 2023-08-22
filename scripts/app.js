document.addEventListener("DOMContentLoaded", function ()
{
    const searchBar = document.getElementsByClassName("input-group")[0];
    const searchButton = document.querySelector(".navbar .nav-link i.bi-search");

    searchButton.addEventListener("click", function ()
    {
      searchBar.classList.toggle("show");
      console.log("Search bar works")
    });
});

  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav a.nav-link");

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          // Scroll with smooth animation
          targetSection.scrollIntoView({ behavior: "smooth" });

          // Close the navigation menu (if it's open)
          const navbarToggler = document.querySelector(".navbar-toggler");
          if (navbarToggler.classList.contains("collapsed")) {
            const navbarNav = document.querySelector(".navbar-collapse");
            navbarNav.classList.remove("show");
          }
        }
      });
    });
  });


