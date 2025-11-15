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
        validation: (Rule) => Rule.required(),
      },
    ],
  };
  
  const socialLink = {
    name: "socialLink",
    title: "Réseau social",
    type: "object",
    fields: [
      {
        name: "label",
        title: "Nom",
        type: "string",
        description: "Ex: Instagram, YouTube...",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "url",
        title: "Lien",
        type: "url",
        description: "URL vers le profil",
        validation: (Rule) => Rule.required(),
      },
    ],
  };
  
  export default {
    name: "footer",
    title: "Footer",
    type: "document",
    fields: [
      {
        name: "brandName",
        title: "Nom",
        type: "string",
        description: "Nom affiché à côté du logo",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        description:
          "Texte de présentation du studio (paragraphe sous STUDIO AG).",
      },
      {
        name: "columns",
        title: "Colonnes de liens",
        type: "array",
        of: [
          {
            title: "Colonne",
            type: "object",
            fields: [
              {
                name: "title",
                title: "Titre",
                type: "string",
                description: 'Ex: "Mix and Mastering", "Studio Brique"...',
              },
              {
                name: "links",
                title: "Liens",
                type: "array",
                of: [navLink],
              },
            ],
          },
        ],
      },
      {
        name: "socials",
        title: "Réseaux sociaux",
        type: "array",
        of: [socialLink],
        description:
          "Liens vers les réseaux sociaux (les icônes restent gérées dans le code).",
      },
      {
        name: "legalLinks",
        title: "Liens légaux",
        type: "array",
        of: [navLink],
        description:
          'Ex: "Privacy Policy", "Terms of Service", "Cookies Setting"...',
      },
    ],
  };
  