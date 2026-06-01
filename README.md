# 50 STEM Ideas for Girls

An interactive STEM ebook companion built with React and Vite.

The website includes a PDF ebook reader, experiment checklists, progress tracking, and a personal notes area for learners to record observations and ideas.

## Live Site

After GitHub Pages deployment, the site will be available at:

```text
https://YOUR_USERNAME.github.io/ebook-stem-her-way/
```

Replace `YOUR_USERNAME` with your GitHub username.

## Features

- PDF ebook viewer
- 50 STEM experiment ideas
- Step-by-step experiment checklists
- Progress tracking by part
- Notes and observation journal
- Browser-based saving with `localStorage`
- GitHub Pages deployment workflow

## Project Structure

```text
ebook-stem-her-way/
├── public/
│   └── ebook/
│       ├── ebook-full.pdf
│       ├── ebook_part1.md
│       ├── ebook_part2.md
│       ├── ebook_part3.md
│       └── ebook_part4.md
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── vite.config.js
└── README.md
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## GitHub Pages Deployment

This project is configured for GitHub Pages using GitHub Actions.

The Vite base path is set in `vite.config.js`:

```js
base: '/ebook-stem-her-way/'
```

If your GitHub repository has a different name, update that value to match:

```js
base: '/YOUR_REPOSITORY_NAME/'
```

To deploy:

1. Push this project to a GitHub repository.
2. Go to the repository settings.
3. Open **Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Push to the `main` branch.
6. Wait for the deploy workflow to finish.

## Saving Notes and Progress

Notes and progress are saved in the user's browser with `localStorage`.

This means:

- Data stays on the same browser and device.
- Data is not uploaded to GitHub.
- Data is not synced across devices.
- Clearing browser data may delete saved notes and progress.

## Credits

Created by Khánh Vy.

Built with React, Vite, and GitHub Pages.
