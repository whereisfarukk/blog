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
            collapsed: true,
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
          {
            text: "Git",
            collapsed: true,
            items: [
              { text: "Cheat Sheet", link: "/gitcheat" },
              { text: "Rewriting History", link: "/git_rewriting_history" },
            ],
          },
          { text: "Some popular algorithm", link: "/somepopularalgo" },
          {
            text: "Interview Questions",
            link: "/interview-question/",
            collapsed: true,
            items: [
              {
                text: "Technical",
                link: "/interview-question/technical/",
                collapsed: true,
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
            collapsed: true,
            items: [
              {
                text: "Concurrency vs parallelism",
                link: "/cs_concept/Concurrency_vs_parallelism.md",
              },
              { text: "Latency", link: "/cs_concept/Latency.md" },
              { text: "Networking", link: "/cs_concept/networking.md" },
              { text: "Database", link: "/cs_concept/Database.md" },
              {
                text: "Memory & Cache",
                link: "/cs_concept/memory_cache.md",
              },
            ],
          },
          {
            text: "JavaScript",
            link: "/javascript/",
            collapsed: true,
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
          {
            text: "DSA",
            link: "/dsa/",
            collapsed: true,
            items: [
              { text: "Recursion", link: "/dsa/recursion" },
              { text: "Time & Space Complexity", link: "/dsa/time_complexity" },
              { text: "Arrays", link: "/dsa/arrays" },
              { text: "Linked Lists", link: "/dsa/linked_lists" },
              { text: "Hash Tables", link: "/dsa/hash_tables" },
              { text: "Binary Search Trees", link: "/dsa/binary_search_trees" },
              { text: "Priority Queues (Heap)", link: "/dsa/priority_queues" },
              { text: "Tries", link: "/dsa/tries" },
              { text: "Graphs", link: "/dsa/graphs" },
              { text: "Backtracking", link: "/dsa/backtracking" },
              { text: "Two Pointers", link: "/dsa/two_pointers" },
              { text: "Sliding Window", link: "/dsa/sliding_window" },
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
