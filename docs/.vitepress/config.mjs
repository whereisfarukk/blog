import { defineConfig } from "vitepress";
import markdownItMathjax from "markdown-it-mathjax3";

export default defineConfig({
  base: "/blog/",
  title: "Whereisfarukk",
  description: "",
  cleanUrls: true,
  themeConfig: {
    nav: [
      {
        text: "← Back",
        link: "https://whereisfarukk.github.io/",
        activeMatch: "^$",
        target: "_self",
      },
      { text: "Home", link: "/" },
      { text: "Blog", link: "/general" },
    ],
    sidebar: [
      {
        items: [
          { text: "General guidelines", link: "/general" },
          {
            text: "VS code setup",
            link: "/vs_code_setup/",
            items: [
              {
                text: "EsLint setup",
                link: "/vs_code_setup/eslint.md",
              },
              {
                text: "Husky with Prettier setup",
                link: "/vs_code_setup/huskyWprettier.md",
              },
            ],
          },
          { text: "Git Cheat Sheet", link: "/gitcheat" },
          { text: "Some popular algorithm", link: "/somepopularalgo" },
          {
            text: "Interview Questions",
            link: "/interview-question/",
            items: [
              {
                text: "Technical",
                link: "/interview-question/technical/",
                items: [
                  { text: "OOP", link: "/interview-question/technical/OOP.md" },
                  { text: "CP", link: "/interview-question/technical/CP.md" },
                  { text: "SQL", link: "/interview-question/technical/SQL.md" },
                ],
              },
              {
                text: "Behavioral",
                link: "/interview-question/behavioral/",
              },
            ],
          },
          {
            text: "CS Concept",
            link: "/cs_concept/",
            items: [
              {
                text: "Concurrency vs parallelism",
                link: "/cs_concept/Concurrency_vs_parallelism.md",
              },
              { text: "Latency", link: "/cs_concept/Latency.md" },
              { text: "Networking", link: "/cs_concept/networking.md" },
              // { text: "SQL", link: "/interview-question/technical/SQL.md" },
            ],
          },
          {
            text: "JavaScript",
            link: "/javascript/",
            items: [
              {
                text: "Callback&Promise",
                link: "/javascript/callback&promise.md",
              },
              {
                text: "Api call",
                link: "/javascript/api.md",
              },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/whereisfarukk/Blog",
      },
    ],
    editLink: {
      pattern: "https://github.com/whereisfarukk/BLOG/edit/master/:path",
      text: "Contribute to this page on GitHub",
    },
    search: {
      provider: "local",
    },
    lastUpdated: true,
    ignoreDeadLinks: true,
    head: [
      // Include the Mermaid CDN
      [
        "script",
        { src: "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js" },
      ],
      [
        "script",
        {},
        `window.mermaid.initialize({ startOnLoad: true });`, // Initialize Mermaid
      ],
    ],
  },
  markdown: {
    config(md) {
      md.use(markdownItMathjax); // MathJax plugin
    },
  },
});
