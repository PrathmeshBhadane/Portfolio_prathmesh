# 🚀 Prathmesh Bhadane — Portfolio

A modern, animated personal portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- **Animated Loading Screen** — Custom intro animation before the main content loads
- **Interactive Hero Section** — 3D tilt avatar card with glowing ring and Framer Motion animations
- **About Section** — Personal introduction and background
- **Skills Section** — Skill cards with colorful, category-specific hover effects
- **Currently Working** — Highlights ongoing projects or learning areas
- **Projects Showcase** — Gallery of built projects
- **Philosophy Section** — Developer mindset and values
- **Contact Form** — Reach-out form with validation
- **Footer** — Links and social handles
- **Dark / Light Theme** — Powered by `next-themes`
- **Fully Responsive** — Mobile-first design across all breakpoints

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions |
| [Radix UI](https://www.radix-ui.com/) | Accessible headless components |
| [Lucide React](https://lucide.dev/) | Icon library |
| [React Hook Form](https://react-hook-form.com/) | Form handling |
| [Zod](https://zod.dev/) | Schema validation |
| [next-themes](https://github.com/pacocoursey/next-themes) | Theme switching |
| [Vercel Analytics](https://vercel.com/analytics) | Usage analytics |
| [pnpm](https://pnpm.io/) | Package manager |

---

## 📁 Project Structure

```
portfolio-prathmesh_bhadane/
├── app/
│   ├── globals.css       # Global styles & CSS variables
│   ├── layout.tsx        # Root layout with metadata & theme provider
│   └── page.tsx          # Main page (orchestrates all sections)
├── components/
│   ├── navbar.tsx        # Navigation bar
│   ├── hero.tsx          # Hero section with 3D avatar
│   ├── about.tsx         # About me section
│   ├── skills.tsx        # Skills with hover effects
│   ├── currently-working.tsx  # Current projects/focus
│   ├── philosophy.tsx    # Developer philosophy
│   ├── projects.tsx      # Projects showcase
│   ├── contact.tsx       # Contact form
│   ├── footer.tsx        # Page footer
│   ├── loading-screen.tsx     # Intro loading animation
│   ├── theme-provider.tsx     # next-themes wrapper
│   └── ui/               # shadcn/ui base components
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets (images, resume PDF)
├── styles/               # Additional global styles
├── next.config.mjs
├── tailwind.config.*
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 18`
- **pnpm** (recommended) — install via `npm install -g pnpm`

### Installation

```bash
# Clone the repository
git clone https://github.com/prathmesh-bhadane/portfolio-prathmesh_bhadane.git
cd portfolio-prathmesh_bhadane

# Install dependencies
pnpm install
```

### Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

---

## 🌐 Deployment

This project is optimized for deployment on **[Vercel](https://vercel.com/)**.

1. Push the repository to GitHub.
2. Import it in the [Vercel Dashboard](https://vercel.com/new).
3. Vercel will auto-detect Next.js and deploy instantly.

---

## 📄 Resume

A downloadable resume is served at `/resume.pdf` from the `public/` directory.  
To update it, replace `public/resume.pdf` with the latest version.

---

## 📬 Contact

**Prathmesh Bhadane**  
Python Developer | Django Developer | Cloud & API Enthusiast

- Portfolio: [prathmesh-bhadane.vercel.app](https://prathmesh-bhadane.vercel.app) *(update with your live URL)*
- Email: via the contact form on the portfolio

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
