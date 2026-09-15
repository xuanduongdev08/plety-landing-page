# Plety — The Intelligence Layer for Clear Decisions

A modern, high-performance landing page built with **React**, **Vite**, and **Tailwind CSS**. Featuring a sleek pure-black dark theme, cinematic video backgrounds, custom scroll-reveal animations, interactive UI mockups, and a fully responsive layout.

---

## ✨ Live Demo

🔗 **[https://plety-landing-page.vercel.app/](https://plety-landing-page.vercel.app/)**

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 18.3.1 | UI framework |
| [Vite](https://vitejs.dev/) | 5.4.10 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.14 | Utility-first CSS styling |
| [Lucide React](https://lucide.dev/) | 0.453.0 | Stroke-based icon library |
| [PostCSS](https://postcss.org/) | 8.4.47 | CSS processing pipeline |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | 10.4.20 | Cross-browser CSS compatibility |

---

## 📐 Features

### Design System
- 🖤 **Pure black dark theme** (`bg-black`) with white text and curated gray tones
- 🔤 **Dual typography** — Inter (sans-serif UI) + Instrument Serif (italic accent headlines)
- 🎨 **Glassmorphism UI** — backdrop-blur cards with translucent borders
- 📱 **Fully responsive** — optimized for mobile, tablet, and desktop
- 🌊 **Smooth HTML scroll behavior** (`scroll-behavior: smooth`)

### Animations & Interactions
- 🔼 **`FadeInUp` scroll-reveal** — custom `IntersectionObserver` wrapper that transitions elements from `translate-y-10 opacity-0` → `opacity-100 translate-y-0` over 1000ms
- 🏃 **Infinite marquee loop** — seamless brand logo scroller with CSS `mask-image` edge fade, no visual break
- ➕ **FAQ accordion** — CSS grid-row height trick (`0fr` → `1fr`) for zero-jank expand/collapse with rotating `+` to `×` icon

### Sections
1. **Navigation Bar** — Fixed top bar with dynamic background blur on scroll, desktop nav links, mobile hamburger dropdown with auto-close
2. **Hero Section** — Cinematic video background, announcement badge, headline with serif italic accent, CTA buttons, industry logo marquee
3. **AI Chat Feature** — 2-column layout with background video mockup, floating glass card, interactive prompt chips, and live conversation preview
4. **AI Transcription Feature** — Animated waveform equalizer, play/pause toggle, live transcription text snippet, background video
5. **FAQ Accordion** — 5 questions, transparent border container, smooth animation
6. **Footer** — Background video, CTA section, 4-column link grid, copyright bar

---

## 🗂 Project Structure

```
CLARIONAI/
├── index.html              # HTML entry point (fonts, viewport, smooth scroll)
├── vite.config.js          # Vite configuration with React plugin
├── tailwind.config.js      # Tailwind: custom fonts, marquee keyframes
├── postcss.config.js       # PostCSS: Tailwind + Autoprefixer
├── package.json            # Dependencies & scripts
├── .gitignore
└── src/
    ├── main.jsx            # React root renderer
    ├── index.css           # Global styles, Tailwind directives, marquee mask, accordion CSS
    └── App.jsx             # Single-file application (all sections, components, logic)
```

---

## 🛠 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `>= 18.x`
- npm `>= 9.x`

### Installation

```bash
# Clone the repository
git clone https://github.com/xuanduongdev08/plety-landing-page.git

# Navigate to the project directory
cd plety-landing-page

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The production bundle is output to the `dist/` directory.

### Previewing Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

This project can be deployed to any static hosting provider:

### Vercel (Recommended)

1. Push this repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel automatically detects Vite — just click **Deploy**.

### Netlify

1. Connect your GitHub repo at [app.netlify.com](https://app.netlify.com).
2. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Click **Deploy site**.

### GitHub Pages

```bash
npm run build
# Then push the contents of /dist to the gh-pages branch
```

---

## 📦 Scripts Reference

| Command | Description |
|---|---|
| `npm run dev` | Start Vite development server at `localhost:5173` |
| `npm run build` | Build production bundle into `dist/` |
| `npm run preview` | Preview the production build locally |

---

## 🎨 Design Tokens

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#000000` | Page background |
| `--color-surface` | `#1C1C1E` | Card / mockup surfaces |
| `--color-nav-btn` | `#1F1F22` | Navigation & secondary buttons |
| `--color-nav-btn-hover` | `#2A2A2D` | Button hover state |
| Border | `rgba(255,255,255,0.10)` | Subtle card borders |
| Font sans | Inter | All body and UI text |
| Font serif | Instrument Serif (Italic) | Headline accent words |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**DuongNguyen**  
GitHub: [@xuanduongdev08](https://github.com/xuanduongdev08)
