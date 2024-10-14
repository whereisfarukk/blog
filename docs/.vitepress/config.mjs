import { defineConfig } from "vitepress";
import markdownItMathjax from "markdown-it-mathjax3"; // Import the math plugin
// import markdownItMermaid from "markdown-it-mermaid"; // Ensure this is imported

export default defineConfig({
  base: "/Blog/",
  title: "Whereisfarukk",
  description: "",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/general" },
    ],
    sidebar: [
      {
        items: [
          { text: "General guidelines", link: "/general" },
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
                // items: [
                //   { text: "OOP", link: "/interview-question/behavioral/OOP.md" },
                // ],
              },
            ],
          },
        ],
      },
      {
        items: [{ text: "CSE competitions", link: "/competitions" }],
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
      [
        "script",
        {
          async: "",
          src: "https://www.googletagmanager.com/gtag/js?id=G-P6ZVQMX05B",
        },
      ],
      [
        "script",
        {},
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-P6ZVQMX05B');`,
      ],
    ],
  },
  markdown: {
    math: true, // Enable math support
    config(md) {
      md.use(markdownItMathjax); // Use the math plugin
      // md.use(markdownItMermaid);
    },
  },
});
// In your config.mjs
