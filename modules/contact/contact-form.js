const toggleButton = document.querySelector(".contact-toggle");
const contactForm = document.querySelector(".contact-form");
const buttonText = toggleButton.querySelector("p");

toggleButton.addEventListener("click", () => {
  contactForm.classList.toggle("active");

  // Altera o texto do botão
  buttonText.textContent =
    buttonText.textContent === "+++ Fechar Formulário +++"
      ? "+++ Abrir Formulário +++"
      : "+++ Fechar Formulário +++";
});
