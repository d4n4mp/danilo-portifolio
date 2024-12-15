import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/quotes": "off",
      quotes: [0],
      "no-useless-escape": 0, // Desativa a regra para evitar escapes inúteis
      avoidEscape: 0, // Não mostra erro para strings que evitam escapes
      allowTemplateLiterals: 0, // Permite o uso de template literals
    },
  },
];

export default eslintConfig;
