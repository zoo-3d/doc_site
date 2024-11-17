## Introduce

This is a website template built with Nextra and Tailwind.
It allows you to quickly create a documentation website with a homepage
and can be deployed directly on Vercel.

## Example of Project
[TI 84 Calculator Online](https://ti84calc.com/)

## Running the Project
```sh
pnpm i
pnpm dev
```

## Project Setup

Refer to https://nextra.site/docs/docs-theme/start

### Create Project Directory
```sh
mkdir my-proj && cd my-proj
```

### Install Dependencies
```sh
pnpm add next react react-dom nextra nextra-theme-docs
```

### Add to `package.json`
```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
},
```

### Create a New File `next.config.js` with the Following Content
```js
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

module.exports = withNextra()

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
```

### Create a New File `theme.config.jsx` with the Following Content
```jsx
export default {
  logo: <span>My Nextra Documentation</span>,
  project: {
    link: 'https://github.com/shuding/nextra'
  }
  // ... other theme options
}
```

### Create a New File `pages/index.mdx` with the Following Content
```md
# Welcome to Nextra

Hello, world!
```

### Start the Project
```sh
pnpm dev
```

## Configuring `Tailwind CSS`
Refer to https://nextra.site/docs/guide/advanced/tailwind-css

### Install Dependencies and Initialize
```sh
pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Modify the `tailwind.config.js` Configuration File
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,jsx,ts,tsx,md,mdx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
```

### Create a New File `globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Create a New File `pages/_app.jsx`
```jsx
import '../path/to/your/globals.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
```