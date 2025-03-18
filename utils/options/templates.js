/**
 * Mapping of template files for JavaScript and TypeScript.
 * Each language has different project templates available.
 * 
 * @type {{ JavaScript: Record<string, string | null>, TypeScript: Record<string, string | null> }}
 */
 
export const templateFiles = {
    JavaScript: {
      Basic: "basic-template.js",
      MVC: "mvc-template.js",
      API: "api-template.js",
      None: null,
    },
    TypeScript: {
      Basic: "basic-template.ts",
      MVC: "mvc-template.ts",
      API: "api-template.ts",
      None: null,
    },
  };