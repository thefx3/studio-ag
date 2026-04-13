import React, { useState, useEffect } from "react";
import "./ContactForm.css";
import Space from "./Space";
import { client } from "../sanityClient";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});
  const [cms, setCms] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "contactPage"][0]{
        title,
        successMessage,
        errorMessage,
        loadingMessage,
        buttonText
      }`)
      .then(setCms);
  }, []);

  if (!cms) return <p>Chargement...</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("");
    setErrors({});

    setResult(cms.loadingMessage);

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", "40076f8c-3d62-4564-b0f0-7ec35676e7c9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(cms.successMessage);
        form.reset();
      } else {
        setResult(cms.errorMessage);
      }
    } catch (error) {
      setResult(cms.errorMessage);
    }
  };

  return (
    <div className="contact-container">
      <Space height={80} />
      <h2 className="contact-title">{cms.title}</h2>

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
          {cms.buttonText}
        </button>
        <p className="form-result">{result}</p>
      </form>
    </div>
  );
}
