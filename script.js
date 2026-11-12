const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

document.querySelector("#current-year").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const subject = encodeURIComponent(`Project enquiry from ${formData.get("name")}`);
  const body = encodeURIComponent(
    `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`,
  );

  formNote.textContent = "Opening your email app...";
  window.location.href = `mailto:hello@ikamva.co.za?subject=${subject}&body=${body}`;
});
