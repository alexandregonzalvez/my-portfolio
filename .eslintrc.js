module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      "react-app",
      "react-app/jest",
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:prettier/recommended" // Assure que Prettier et ESLint fonctionnent ensemble
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
      "react/prop-types": "off", // Désactive la vérification des types de prop dans React
      "prettier/prettier": ["error", { "endOfLine": "auto" }], // Configure Prettier dans ESLint
  
      // Autorise plusieurs espaces pour aligner les commentaires sans erreur
      "no-multi-spaces": [
        "error",
        {
          exceptions: {
            VariableDeclarator: true,
            ImportDeclaration: true,
          },
        },
      ],
  
      // Applique un espace après // dans les commentaires
      "spaced-comment": [
        "error",
        "always",
        {
          exceptions: ["-", "+"],
          markers: ["=", "!", "/"],
        },
      ],
    },
    settings: {
      react: {
        version: "detect", // Détecte la version de React pour les linting rules
      },
    },
  };
  