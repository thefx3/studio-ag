const navLink = {
    name: "navLink",
    title: "Lien",
    type: "object",
    fields: [
      {
        name: "label",
        title: "Texte",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "href",
        title: "URL interne ou externe",
        type: "string",
        description: "Ex: /services, /about ou https://instagram.com/...",
        validation: (Rule) => Rule.required(),
      },
    ],
  };
  
  export default {
    name: "navigation",
    title: "Navigation (Header)",
    type: "document",
    fields: [
      {
        name: "brandName",
        title: "Nom de marque",
        type: "string",
        description: 'Ex: "STUDIO AG"',
      },
      {
        name: "menuItems",
        title: "Éléments de menu",
        type: "array",
        of: [navLink],
        description: "Liens de navigation du header",
      },
      {
        name: "ctaLabel",
        title: "Libellé bouton contact",
        type: "string",
        description: 'Texte du bouton "Contacter"',
      },
    ],
  };
  