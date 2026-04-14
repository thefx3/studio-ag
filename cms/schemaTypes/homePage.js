export default {
    name: "homePage",
    title: "Page d'accueil",
    type: "document",
    fields: [
      {
        name: "titleLine1",
        title: "Titre - ligne 1",
        type: "string",
        description: 'Ex: "Crafted"',
        validation: (Rule) => Rule.required(),
      },
      {
        name: "titleLine2",
        title: "Titre - ligne 2",
        type: "string",
        description: 'Ex: "for impact"',
        validation: (Rule) => Rule.required(),
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        description:
          "Paragraphe sous le titre (présentation du studio, frustration des mixes etc.)",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "ctaLabel",
        title: "Libellé bouton principal",
        type: "string",
        description: 'Ex: "Contacter"',
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
  
