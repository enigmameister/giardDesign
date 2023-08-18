document.addEventListener("DOMContentLoaded", function ()
{
    const searchBar = document.getElementById("searchBar");
    const searchButton = document.querySelector(".navbar .nav-link i.bi-search");

    searchButton.addEventListener("click", function ()
    {
      searchBar.classList.toggle("show");
    });
});


document.addEventListener("DOMContentLoaded", function () 
{
  const sliderContainer = document.querySelector(".slider-container");
  const slider = document.querySelector(".slider");

  const icons = slider.querySelectorAll("i");
  const prevIcon = icons[0];
  const nextIcon = icons[1];

  let slideIndex = 0;

  function showSlide(index) 
  {
    // Tutaj dodaj kod, który pokaże odpowiedni slajd na podstawie indeksu
    // Możesz użyć CSS, np. marginLeft, aby przesunąć slider w odpowiedniej pozycji
  }

  prevIcon.addEventListener("click", function () 
  {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = icons.length - 1;
    }
    showSlide(slideIndex);
  });

  nextIcon.addEventListener("click", function () 
  {
    slideIndex++;
    if (slideIndex >= icons.length) 
    {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  });
});