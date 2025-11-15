export default {
  name: "contactPage",
  title: "Page Contact",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre de page",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "introText",
      title: "Texte d’introduction",
      type: "text",
      description: "Petit texte au-dessus du formulaire",
    },
    {
      name: "labels",
      title: "Labels des champs",
      type: "object",
      fields: [
        { name: "name", title: "Champ 1", type: "string" },
        { name: "lastname", title: "Champ 2", type: "string" },
        { name: "email", title: "Champ 3 ", type: "string" },
        { name: "message", title: "Label Message", type: "string" },
      ],
    },
    {
      name: "buttonText",
      title: "Texte du bouton",
      type: "string",
      description: 'Ex: "Envoyer le message"',
    },
    {
      name: "loadingMessage",
      title: "Message pendant le chargement",
      type: "string",
      description: 'Ex: "Envoi en cours..."',
    },
    {
      name: "successMessage",
      title: "Message de succès",
      type: "string",
    },
    {
      name: "errorMessage",
      title: "Message d’erreur générique",
      type: "string",
    },
  ],
};
