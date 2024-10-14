import{_ as a,c as n,a0 as i,o as e}from"./chunks/framework.CGHvQLJz.js";const d=JSON.parse('{"title":"General Guidelines","description":"","frontmatter":{},"headers":[],"relativePath":"docs/general.md","filePath":"docs/general.md"}'),t={name:"docs/general.md"};function l(p,s,h,k,r,o){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="general-guidelines" tabindex="-1">General Guidelines <a class="header-anchor" href="#general-guidelines" aria-label="Permalink to &quot;General Guidelines&quot;">​</a></h1><h2 id="how-to-contribute" tabindex="-1">How to contribute <a class="header-anchor" href="#how-to-contribute" aria-label="Permalink to &quot;How to contribute&quot;">​</a></h2><p><code>Use pull requests to contribute to the project.</code></p><h2 id="project-base-structure" tabindex="-1">Project base structure <a class="header-anchor" href="#project-base-structure" aria-label="Permalink to &quot;Project base structure&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  └─ config.mjs</span></span>
<span class="line"><span>│  ├─ interview-question</span></span>
<span class="line"><span>│  │  ├─ behavioral</span></span>
<span class="line"><span>│  │  │  └─ index.md</span></span>
<span class="line"><span>│  │  └─ technical</span></span>
<span class="line"><span>│  │     ├─ CP.md</span></span>
<span class="line"><span>│  │     ├─ OOP.md</span></span>
<span class="line"><span>│  │     └─ SQL.md</span></span>
<span class="line"><span>│  ├─ general.md</span></span>
<span class="line"><span>│  ├─ gitcheat.md</span></span>
<span class="line"><span>│  ├─ index.md</span></span>
<span class="line"><span>│  └─ somepopularalgo.md</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div><h2 id="if-you-want-to-contribute-into-interview-questions" tabindex="-1">if you want to contribute into interview questions <a class="header-anchor" href="#if-you-want-to-contribute-into-interview-questions" aria-label="Permalink to &quot;if you want to contribute into interview questions&quot;">​</a></h2><h3 id="two-types-of-interview-sections-technical-and-behavioral" tabindex="-1">Two types of interview sections - Technical and behavioral: <a class="header-anchor" href="#two-types-of-interview-sections-technical-and-behavioral" aria-label="Permalink to &quot;Two types of interview sections - Technical and behavioral:&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─ docs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ .vitepress</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  └─ config.mjs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ interview</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">question</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─ behavioral</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  └─ index.md</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  └─ technical</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     ├─ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     ├─ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OOP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     └─ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SQL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ general.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ gitcheat.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ index.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  └─ somepopularalgo.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└─ package.json</span></span></code></pre></div><h3 id="for-techinal-question-just-go-to-the-oop-md-or-cp-md-or-sql-md-based-on-the-questions-type" tabindex="-1">For techinal question just go to the OOP.md or CP.md or SQL.md based on the questions type. <a class="header-anchor" href="#for-techinal-question-just-go-to-the-oop-md-or-cp-md-or-sql-md-based-on-the-questions-type" aria-label="Permalink to &quot;For techinal question just go to the OOP.md or CP.md or SQL.md based on the questions type.&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─ docs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ .vitepress</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  └─ config.mjs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ interview</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">question</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─ behavioral</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  └─ index.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  └─ technical</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     ├─ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.md</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     ├─ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OOP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.md</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     └─ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SQL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ general.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ gitcheat.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ index.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  └─ somepopularalgo.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└─ package.json</span></span></code></pre></div><h3 id="technical-question-answer-format" tabindex="-1">Technical Question Answer Format <a class="header-anchor" href="#technical-question-answer-format" aria-label="Permalink to &quot;Technical Question Answer Format&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">details</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">summary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Questions?&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">br</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-weight: bold; color: #3498db; font-size: 0.8em;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &gt;Company name (Question asking year)&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">summary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Trie Data structure</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">details</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>Example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;details&gt;</span></span>
<span class="line"><span>  &lt;summary&gt;</span></span>
<span class="line"><span>    What are the main pillars of OOP&lt;br /&gt;&lt;span</span></span>
<span class="line"><span>      style=&quot;font-weight: bold; color: #3498db; font-size: 0.8em;&quot;</span></span>
<span class="line"><span>      &gt;Orbitax (2024)&lt;/span</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>  &lt;/summary&gt;</span></span>
<span class="line"><span>  &lt;hr /&gt;</span></span>
<span class="line"><span>  1.Inheritance</span></span>
<span class="line"><span>  2.Polymorphism</span></span>
<span class="line"><span>  3.Abstruction</span></span>
<span class="line"><span>  4.Encapsulation</span></span>
<span class="line"><span>&lt;/details&gt;</span></span></code></pre></div>`,14)]))}const c=a(t,[["render",l]]);export{d as __pageData,c as default};
