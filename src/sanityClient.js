import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: "4qgx9hrr",   // Vérifie que c’est ton ID dans cms/sanity.config.js
  dataset: "production",   // Ou "develop" si c’est ce que tu utilises
  apiVersion: "2023-10-01",
  useCdn: true,
});
