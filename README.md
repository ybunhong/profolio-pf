# My Frontend Portfolio Projects

This repository contains a collection of frontend projects I built using **HTML, CSS, and JavaScript** to sharpen my skills and understand how modern websites work under the hood. Each project is built without any frontend frameworks or UI libraries — just clean, custom code.

---

## Live Preview

> [Visit My Portfolio Website](https://ybh-protfolio.netlify.app/)

---

## Project Setup

### Prerequisites

Ensure the following tools are installed:

- **Git**  
  Check with: `git --version`  
  Download: [https://git-scm.com/downloads](https://git-scm.com/downloads)

- **Git Flow** extension  
  (Optional but recommended for consistent branching)

- **Node.js & npm**  
  Download: [https://nodejs.org/en](https://nodejs.org/en)  
  (Install the **latest LTS version**)

---

### Installation Steps

#### 1. Clone the Repository

Open your terminal and run:

```bash
git clone https://git.clp.kr/ybunhonggg/portfolio-pf.git
```

### 2. Install Dependencies

```bash
npm install
```

This command will install all the required dependencies, including:

vite for local development

@commitlint/cli and @commitlint/config-conventional

husky for commit message linting

### 3. Activate Git Hooks (Husky)

```bash
npx husky install
```

This sets up Git hooks on your local machine to enforce commit message rules using Commitlint.

⚠️You must run this command once after cloning, or commit checks will not run.

## Projects Included

### Apple Website Clone

A fully responsive recreation of the official Apple website using only HTML, CSS, and JavaScript.

- Pixel-perfect layout and design
- Smooth animations and transitions
- Scroll-based effects
- Mobile-friendly navigation

### Porsche Store Clone

A premium e-commerce store layout inspired by Porsche’s official merchandise site.

- Product cards, buttons, and layouts
- Interactive hover states
- Navigation menus and page structure
- Built to simulate real-world UI/UX quality

### ❌⭕ Tic Tac Toe Game

A simple but complete two-player Tic Tac Toe game built in vanilla JavaScript.

- Turn-based logic
- Winner/draw detection
- Game reset functionality

---

## Tech Stack

- HTML
- CSS/Tailwind
- JavaScript (ES6+)
- Public asset management using `/public` folder

---
