const serviceCard = {
    name: "serviceCard",
    title: "Carte service",
    type: "object",
    fields: [
      {
        name: "title",
        title: "Titre",
        type: "string",
        description: 'Ex: "Editing", "Mixage", "Mastering"...',
        validation: (Rule) => Rule.required(),
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "icon",
        title: "Icône",
        type: "image",
        options: { hotspot: true },
        description: "Icône du service (vector, mix, vol...)",
      },
    ],
  };
  
  export default {
    name: "servicesPage",
    title: "Page Services",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Titre (petit)",
        type: "string",
        description: 'Ex: "Services et Tarifs"',
        validation: (Rule) => Rule.required(),
      },
      {
        name: "subtitle",
        title: "Sous-titre (grand)",
        type: "string",
        description: 'Ex: "Votre musique, perfectionnée."',
        validation: (Rule) => Rule.required(),
      },
      {
        name: "description",
        title: "Description intro",
        type: "text",
        description:
          "Texte explicatif sous le sous-titre (frustration, mix soigné, AirPods aux stades...).",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "image",
        title: "Image à droite",
        type: "image",
        options: { hotspot: true },
        description: "Image principale (services-image.png).",
      },
      {
        name: "serviceCards",
        title: "Cartes Services",
        type: "array",
        of: [serviceCard],
      },
      {
        name: "ctaLabel",
        title: "Libellé bouton",
        type: "string",
        description: 'Ex: "Contacter"',
        validation: (Rule) => Rule.required(),
      },
      {
        name: "contactCtaDestination",
        title: "Destination bouton contacter",
        type: "string",
        description: 'Choix de redirection pour le bouton "Contacter"',
        initialValue: "form",
        options: {
          list: [
            { title: "Formulaire de contact", value: "form" },
            { title: "Instagram @studioag", value: "instagram" },
          ],
          layout: "radio",
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: "bookingCtaLabel",
        title: "Libellé bouton réservation",
        type: "string",
        description: 'Ex: "Reserver un appel"',
        initialValue: "Reserver un appel",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "bookingCtaUrl",
        title: "URL bouton réservation",
        type: "url",
        description: "Lien externe vers la prise de rendez-vous",
        initialValue: "https://calendar.app.google/GPAVEbYa2TCMrVAw6",
        validation: (Rule) =>
          Rule.required().uri({
            scheme: ["http", "https"],
          }),
      },
    ],
  };
  
