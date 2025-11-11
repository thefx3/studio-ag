import React, { useState } from "react";
import "./ContactForm.css";
import Space from "./Space";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("");
    setErrors({});

    const form = e.target;
    const name = form.name.value.trim();
    const lastname = form.lastname.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const newErrors = {};
    if (!name) newErrors.name = "Le nom est requis.";
    if (!lastname) newErrors.lastname = "Le prénom est requis.";
    if (!email) newErrors.email = "L’adresse mail est requise.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Adresse mail invalide.";
    if (!message) newErrors.message = "Le message ne peut pas être vide.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stoppe l'envoi si erreurs
    }

    setResult("Envoi en cours...");

    const formData = new FormData(form);
    formData.append("access_key", "40076f8c-3d62-4564-b0f0-7ec35676e7c9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message envoyé avec succès ✅");
        form.reset();
      } else {
        console.error(data);
        setResult("❌ Une erreur est survenue. Réessayez.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setResult("❌ Une erreur de connexion est survenue.");
    }
  };

  return (
    <div className="contact-container">
      <Space height={80} />
      <h2 className="contact-title">Formulaire de contact</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="name-group">
          <div className="form-group">
            <label htmlFor="name">NOM</label>
            <input
              type="text"
              name="name"
              id="name"
              className={errors.name ? "error" : ""}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Prénom</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className={errors.lastname ? "error" : ""}
            />
            {errors.lastname && <p className="error-text">{errors.lastname}</p>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Adresse mail</label>
          <input
            type="email"
            name="email"
            id="email"
            className={errors.email ? "error" : ""}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            className={errors.message ? "error" : ""}
          />
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>

        <button type="submit" className="contact-btn">
          Envoyer le message
        </button>
        <p className="form-result">{result}</p>
      </form>
    </div>
  );
}
