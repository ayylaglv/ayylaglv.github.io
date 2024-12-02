function showOrderForm(plan, price) {
  const orderForm = document.getElementById("orderForm");
  orderForm.style.display = "block";
  orderForm.scrollIntoView({ behavior: "smooth" });

  document.getElementById("selectedPlan").textContent = plan;
  document.getElementById("selectedPrice").textContent = `$${price}/month`;
  document.getElementById("totalPrice").textContent = `$${price}/month`;
}

function handleSubmit(event) {
  event.preventDefault();
  alert(
    "Thank you for your subscription! You will receive a confirmation email shortly."
  );
  // Here you would typically handle the form submission to your backend
}
