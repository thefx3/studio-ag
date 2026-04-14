export default {
    name: "studioPage",
    title: "Page Studio",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Titre",
        type: "string",
        description: 'Ex: "Studio AG"',
        validation: (Rule) => Rule.required(),
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        description:
          "Ex: Un espace professionnel et convivial pour donner vie à vos projets musicaux.",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "contactCtaDestination",
        title: "Destination bouton contacter",
        type: "string",
        description: 'Choix de redirection pour le bouton "Contacter" du header',
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
    ],
  };
  
