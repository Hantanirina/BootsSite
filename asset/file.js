const modal = document.getElementById("exampleModal");
if (modal) {
  modal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;

    const recipient = button.getAttribute("data-bs-whatever");

    const modalTitle = modal.querySelector(".modal-title");
    const recipientNameInput = modal.querySelector("#recipient-name");

    modalTitle.textContent = `Nouveau message à ${recipient}`;
    recipientNameInput.value = recipient;
  });
}
const sendButton = document.querySelector(".modal-footer .btn-primary");
if (sendButton) {
  sendButton.addEventListener("click", (event) => {
    var bootstrapModal = bootstrap.Modal.getInstance(modal);
    bootstrapModal.hide();
  });
}
