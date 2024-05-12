const btn = document.querySelector("button.partners__btn");
btn.addEventListener("click", () => {
  const bookTripSection = document.getElementById("pricing-section");
  bookTripSection.scrollIntoView({ behavior: "smooth" });
});
