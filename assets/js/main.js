const ratingButons = document.querySelectorAll(".rating-btn");
const SubmitBtn = document.getElementById("enviar-btn");
const CardComponent = document.getElementById("rating-component");
const CardThakYou = document.getElementById("container-thank-you");
const SelectdRatingSpan = document.getElementById("selected-rating");
let SelectdRating = 0;

ratingButons.forEach((button) => {
  button.addEventListener("click", () => {
    ratingButons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    SelectdRating = button.getAttribute("data-value");
  });
});

SubmitBtn.addEventListener("click", () => {
  if (SelectdRating !== 0) {
    CardComponent.classList.add("hidden");
    CardThakYou.classList.remove("hidden");
    CardThakYou.classList.add("thank-you");
    SelectdRatingSpan.textContent = SelectdRating;
  } else {
    alert("Porfavor asegurece de elegir un numero para poder continuar.");
  }
});
