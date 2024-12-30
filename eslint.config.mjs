import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals", // Next.js core web vitals
    "next/typescript" // Next.js with TypeScript support
  ),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Enforce no-unused-vars rule
      "@typescript-eslint/no-unused-expressions": "off", // Enforce no-unused-expressions rule
    },
  },
];

export default eslintConfig;
