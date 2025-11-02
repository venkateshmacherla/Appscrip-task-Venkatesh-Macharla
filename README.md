Appscrip PLP - Product Listing Page

A modern, mobile-first Product Listing Page (PLP) built with Next.js and Server-Side Rendering (SSR).
Designed for performance, SEO optimization, and clean modular code — deployed seamlessly on Vercel.

Live Demo: [https://appscrip-task-venkatesh.vercel.app](https://appscrip-task-venkatesh-macharla.vercel.app/)
 (replace with your actual link)

Features

✅ Next.js with SSR (Server-Side Rendering)

✅ SEO Optimized — meta tags, schema markup, headings, alt text

✅ API Integration — pulls data from FakeStoreAPI
 or DummyJSON

✅ Favorites System — like/unlike products and view liked items

✅ Sorting & Filtering — by price, popularity, and date; filter by category

✅ Responsive Design — mobile-first UI that scales beautifully

✅ Minimal Dependencies — built only with essentials

✅ Clean, Modular Components

✅ Deployed on Vercel

Tech Stack

Next.js 14 / React 18

Tailwind CSS or CSS Modules

FakeStoreAPI 

☁️ Vercel Deployment

Installation
git clone https://github.com/venkateshmacherla/Appscrip-task-Venkatesh-Macharla.git
cd appscrip-task
npm install

Running Locally
npm run dev


Then open 👉 http://localhost:3000

Build & Deployment
Production Build
npm run build
npm start

Deploy on Vercel

Push your repo to GitHub

Go to the Vercel Dashboard

Import your repository

Click Deploy – SSR works automatically

Your app supports full Server-Side Rendering (no extra setup needed).

Project Structure
appscrip-task-venkatesh-macharla/
├── public/
│   ├── payment-icons/
│   ├── banner.jpg
│   ├── favicon.ico
│   ├── index.html
│   ├── logo.png
│   ├── manifest.json
│   ├── robots.txt
│   └── usd.png
├── src/
│   ├── components/
│   │   ├── ErrorBoundary.js
│   │   ├── FilterControlRow.js
│   │   ├── FilterSidebar.js
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   ├── ProductCard.js
│   │   └── ProductList.js
│   ├── pages/
│   │   ├── _app.js
│   │   └── index.js
│   ├── styles/
│   │   ├── FilterControlRow.module.css
│   │   ├── FilterSidebar.module.css
│   │   ├── Navbar.module.css
│   │   ├── ProductCard.module.css
│   │   ├── ProductList.module.css
│   │   ├── globals.css
│   │   └── index.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   └── logo.svg
├── netlify.toml
├── next.config.js
├── package.json
├── package-lock.json
└── README.md

🔍 SEO & Best Practices

🏷️ <Head> includes dynamic title & meta description

🔠 Proper heading hierarchy (H1 → H2)

🧩 Open Graph + Twitter Card tags for social preview

📄 JSON-LD schema (ItemList / Organization)

🖼️ All images use descriptive alt text

📱 Mobile-first layout

🌐 API Integration

Primary Endpoint:
https://fakestoreapi.com/products

Alternative:
https://dummyjson.com/products?limit=100

🧩 If the API is unreachable, the app gracefully falls back to local mock data.

🧾 Code & Naming Conventions
Type	Convention	Example
Components	PascalCase	ProductList.jsx
Functions/Variables	camelCase	getProducts, filteredProducts
Styling	Tailwind / CSS Modules	ProductCard.module.css
⚡ Performance Highlights

⚡ SSR for faster first paint and SEO boost

🖼️ Optimized Images via Next.js <Image />

📦 Lightweight Bundle with modular imports

🧑‍🎨 Author

Venkatesh Macharla
🔗 GitHub
