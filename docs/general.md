# General Guidelines

## How to contribute

`Use pull requests to contribute to the project.`

## Project base structure

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.mjs
│  ├─ interview-question
│  │  ├─ behavioral
│  │  │  └─ index.md
│  │  └─ technical
│  │     ├─ CP.md
│  │     ├─ OOP.md
│  │     └─ SQL.md
│  ├─ general.md
│  ├─ gitcheat.md
│  ├─ index.md
│  └─ somepopularalgo.md
└─ package.json
```

## if you want to contribute into interview questions

### Two types of interview sections - Technical and behavioral:

```js{6,8}
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.mjs
│  ├─ interview-question
│  │  ├─ behavioral
│  │  │  └─ index.md
│  │  └─ technical
│  │     ├─ CP.md
│  │     ├─ OOP.md
│  │     └─ SQL.md
│  ├─ general.md
│  ├─ gitcheat.md
│  ├─ index.md
│  └─ somepopularalgo.md
└─ package.json
```

### For techinal question just go to the OOP.md or CP.md or SQL.md based on the questions type.

```js{9,10,11}
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.mjs
│  ├─ interview-question
│  │  ├─ behavioral
│  │  │  └─ index.md
│  │  └─ technical
│  │     ├─ CP.md
│  │     ├─ OOP.md
│  │     └─ SQL.md
│  ├─ general.md
│  ├─ gitcheat.md
│  ├─ index.md
│  └─ somepopularalgo.md
└─ package.json
```

### Technical Question Answer Format

```html
<details>
  <summary>
    Questions?<br /><span
      style="font-weight: bold; color: #3498db; font-size: 0.8em;"
      >Company name (Question asking year)</span
    >
  </summary>
  <hr />
  Trie Data structure
</details>
```

Example:

```
<details>
  <summary>
    What are the main pillars of OOP<br /><span
      style="font-weight: bold; color: #3498db; font-size: 0.8em;"
      >Orbitax (2024)</span
    >
  </summary>
  <hr />
  1.Inheritance
  2.Polymorphism
  3.Abstruction
  4.Encapsulation
</details>
```

<!-- ## Website Stats -->

<!-- ![](https://visitor-badge.laobi.icu/badge?page_id=interview-questions-bangladesh)
![](https://profile-counter.glitch.me/interview-questions-bangladesh/count.svg) -->
