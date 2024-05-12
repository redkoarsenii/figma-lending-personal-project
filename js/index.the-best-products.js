const btn = document.querySelector("button.thebest__btn-item");
btn.addEventListener("click", () => {
  const bookTripSection = document.getElementById("pricing-section");
  bookTripSection.scrollIntoView({ behavior: "smooth" });
});
