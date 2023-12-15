# PORTFOLIO

## Description

This is my portfolio website. It is built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/).

## Getting Started

The following is recommended for the development environment:

1. Usage of [Visual Studio Code](https://code.visualstudio.com/) as IDE and the following plugins:
   - Prettier - Code formatter
   - ESLint - Code Analyzer
2. [Node.js](https://nodejs.org/en/download/)
3. [NPM](https://www.npmjs.com/)

## Folder Structure

```text
./
  ├── public                - This directory contains static and public files, such as images and fonts.
  ├── src                   - Source code of the application.
    ├── app                 - NextJS app directory.
    ├── components          - Reusable components used throughout the application.
    ├── interfaces          - Interfaces used throughout the application.
    ├── locales             - Locales files, which are used to define the translations of the application.
    ├── modules             - Modules directory.
    ├── i18n.ts             - This file contains the configuration of the i18n module.
    ├── middleware.ts       - Configuration of the middleware module.
    └── navigation.ts       - Configuration of the navigation module.
  ├── .editorconfig         - Editorconfig configuration.
  ├── .eslintrc.json        - Eslint configuration.
  ├── .gitignore            - Ignore settings for git.
  ├── .prettierrc           - Prettier configuration.
  ├── commitlintrc.json     - Commitlint configuration.
  ├── ecosystem.config.js   - PM2 configuration.
  ├── next.config.js        - NextJS configuration.
  ├── package.json          - npm configuration.
  ├── postcss.config.js     - PostCSS configuration.
  ├── README.md             - This README file.
  ├── tailwind.config.js    - Tailwind CSS configuration.
  └── tsconfig.json         - TypeScript configuration.
```

## Run

```bash
git clone https://github.com/aldair-gc/portfolio.git
npm install
npm run start
```

Open in the browser <http://localhost:3020>

## Status

Finished but always improving.

## Features

- [x] Responsive
- [x] Dark mode
- [x] Internationalization
