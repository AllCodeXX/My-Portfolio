// EmailJS-i işə sal
emailjs.init("CDmd1EFTIeq6BSrvP");

// Formu tuturuq
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .send("service_82jxuva", "template_8ug0gkh", {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value,
    })
    .then(() => {
      alert("Mesaj uğurla göndərildi ✅");
      form.reset();
    })
    .catch((error) => {
      alert("Xəta oldu ❌");
      console.log(error);
    });
});
