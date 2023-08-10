const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navmenu = document.getElementsByClassName('nav-menu')[0]

toggleButton.addEventListener('click', () => {
  navmenu.classList.toggle('active')
})


document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = form.querySelector("#name").value;
    const email = form.querySelector("#email").value;
    const message = form.querySelector("#message-area").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    form.reset();

    alert("Message sent!");
  });
});
