## Odin Restaurant DOM

A simple single-page restaurant website built as part of The Odin Project curriculum. The app is bundled with Webpack and renders page sections (Home, Menu, About) dynamically via DOM manipulation.

### Features

- **Single-page navigation**: Switch between Home, Menu, and About without full page reloads
- **Modular JS**: Each section is encapsulated in its own module
- **Webpack bundling**: Assets (CSS, images, fonts) handled via loaders

### Tech Stack

- **JavaScript (ES6+)**
- **Webpack 5**, **webpack-dev-server**
- **CSS**
- **Font Awesome** (via `@fortawesome/fontawesome-free`)

### Project Structure

```text
/home/matheus/Documents/odin/odin-restaurant-dom/
  ├─ dist/                 # Built assets (output)
  │  ├─ index.html
  │  └─ main.js
  ├─ src/                  # Source files (edit here)
  │  ├─ about.js
  │  ├─ homepage.js
  │  ├─ index.js           # Entry point
  │  ├─ menu.js
  │  ├─ style.css
  │  └─ template.html      # HtmlWebpackPlugin template
  ├─ webpack.config.js     # Webpack configuration
  ├─ package.json
  └─ README.md
```

### Getting Started

#### Prerequisites

- Node.js 18+ and npm

#### Install

```bash
npm install
```

#### Start a local dev server

This project uses Webpack Dev Server (configured in `webpack.config.js`).

```bash
npx webpack serve --open --mode development
```

- Opens the app in your default browser
- Watches source files and reloads on changes

#### Build for production

```bash
npx webpack --mode production
```

- Outputs to the `dist/` directory (cleaned on each build)

### How it works

- `src/index.js` imports `style.css` and page modules, renders the Home section on load, and attaches click handlers to navbar buttons to switch sections.
- `src/template.html` is used by HtmlWebpackPlugin to generate `dist/index.html` during dev/build.
- Webpack loaders are configured to handle CSS, HTML, fonts, and images.

### Available npm scripts (optional)

If you prefer npm scripts, add these to `package.json`:

```json
{
  "scripts": {
    "start": "webpack serve --open --mode development",
    "build": "webpack --mode production"
  }
}
```

Then run:

```bash
npm run start
npm run build
```

### Deployment

- Serve the contents of `dist/` with any static host (e.g., GitHub Pages, Netlify, Vercel).

### Acknowledgments

- Built for The Odin Project: Restaurant Page assignment.

### License

- ISC (see `LICENSE`).
