document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-calendly]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    Calendly.initPopupWidget({ url: link.dataset.calendly });
  });
});

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("is-open"));
});

const emailLink = document.querySelector('a[href^="mailto:"]');

if (emailLink) {
  emailLink.addEventListener("click", (event) => {
    event.preventDefault();
    const email = emailLink.getAttribute("href").replace("mailto:", "");
    navigator.clipboard.writeText(email).then(() => {
      const valueEl = emailLink.querySelector(".contact__value");
      const original = valueEl.textContent;
      valueEl.textContent = "Скопировано!";
      setTimeout(() => {
        valueEl.textContent = original;
      }, 1500);
    });
    window.location.href = emailLink.getAttribute("href");
  });
}
