import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const TemplateForme = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //pour injecter un msg quand c'est bien envoyé ou mal envoyé:
    const formMessage = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_pyao76w",
        "template_ct4t8ym",
        form.current,
        "gOYza52hrM6cLGDx2"
      )
      .then(
        (result) => {
          console.log(result.text);
          //pour remettre à zero le formulaire:
          form.current.reset();
          formMessage.innerHTML = "<p classe='succes'> Message envoyé ! </p>";
          //pour faire disparaitre la notification du message envoyé:
          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 1700);
        },
        (error) => {
          console.log(error.text);
          formMessage.innerHTML =
            "<p classe='error'> Une erreur s'est produite, veuillez reessayer</p>";

          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 1700);
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" required autoComplete="off" />
        <label>Email</label>
        <input type="email" name="email" required autoComplete="off" />
        <label>Message</label>
        <textarea name="message" required placeholder="Votre message" />
        <input type="submit" value="Envoyer" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default TemplateForme;
