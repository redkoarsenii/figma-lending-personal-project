const btn = document.querySelector("button.fastes-way-to__btn");
btn.addEventListener("click", () => {
  const bookTripSection = document.getElementById("pricing-section");
  bookTripSection.scrollIntoView({ behavior: "smooth" });
});
