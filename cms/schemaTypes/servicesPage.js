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
    ],
  };
  