const openButtons = document.querySelectorAll(".button[data-target]");
const closeButtons = document.querySelectorAll(".modal-btn");
const overlay = document.querySelector("#overlay");
const modals = document.querySelectorAll(".modal");

function closeAllModals() {
  modals.forEach((modal) => {
    modal.classList.remove("active");
  });

  overlay.classList.remove("active");
}

openButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const modal = document.querySelector(button.dataset.target);

    if (modal) {
      modal.classList.add("active");
      overlay.classList.add("active");
    }
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    closeAllModals();
  });
});

overlay.addEventListener("click", () => {
  closeAllModals();
});
