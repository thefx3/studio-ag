export default {
    name: "aboutPage",
    title: "Page À propos",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Titre principal",
        type: "string",
        description: 'Ex: "Qui suis-je ?"',
        validation: (Rule) => Rule.required(),
      },
      {
        name: "subtitle",
        title: "Sous-titre / Nom",
        type: "string",
        description: 'Ex: "Aldric Granger"',
        validation: (Rule) => Rule.required(),
      },
      {
        name: "paragraphs",
        title: "Paragraphes (bloc 1)",
        type: "array",
        of: [{ type: "text" }],
        description:
          "Les 2-3 paragraphes du bloc de gauche (présentation, localisation, accompagnement...).",
      },
      {
        name: "secondaryParagraph",
        title: "Paragraphe bloc 2",
        type: "text",
        description:
          "Texte du second bloc (accompagnement personnalisé, son prêt à diffuser...).",
      },
      {
        name: "ctaLabel",
        title: "Libellé bouton",
        type: "string",
        description: 'Ex: "Demander un avis"',
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
        name: "imageMain",
        title: "Image principale",
        type: "image",
        options: { hotspot: true },
        description: "Image du premier bloc (aldric.png).",
      },
      {
        name: "imageSecondary",
        title: "Image secondaire",
        type: "image",
        options: { hotspot: true },
        description: "Image du second bloc (aldric-2.png).",
      },
    ],
  };
  
