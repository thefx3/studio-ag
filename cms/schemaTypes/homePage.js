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
    ],
  };
  