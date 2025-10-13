import React, { useState } from "react";
import "./ContactForm.css";
import Space from "./Space";
import { Link } from "react-router-dom";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "7dd040f5-4eb6-48c0-974d-e1c311998119");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully ✅");
      e.target.reset();
    } else {
      console.error(data);
      setResult("❌ Something went wrong. Please try again.");
    }
  };

  return (
    
    <div className="contact-container">
      <Space height={80} />
      <h2 className="contact-title">Formulaire de contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">NOM et Prénom</label>
          <input type="text" name="name" id="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Adresse mail</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5" required />
        </div>

        <button type="submit" className="contact-btn">Envoyer le message</button>
        <p className="form-result">{result}</p>
      </form>
    </div>
  );
}
