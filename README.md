# 🛍️ Appscrip PLP - Product Listing Page

A **modern, mobile-first Product Listing Page (PLP)** built with **Next.js** and **Server-Side Rendering (SSR)**.  
Designed for performance, SEO optimization, and clean modular code — deployed seamlessly on **Vercel**.

[![Deploy on Vercel](https://vercel.com/button)](https://vercel.com/new)

🌐 **Live Demo:** https://appscrip-task-venkatesh-macharla.vercel.app/
*(Replace with your actual deployed link)*

---

## 🚀 Features

- **Next.js with SSR (Server-Side Rendering)**
- **SEO Optimized:** Meta tags, schema markup, headings, alt text  
- **API Integration:** Fetches data from [FakeStoreAPI](https://fakestoreapi.com/) or [DummyJSON](https://dummyjson.com/)
- **Favorites System:** Like/unlike products and view liked items
- **Sorting & Filtering:** Sort by price, popularity, and date; filter by category
- **Responsive Design:** Mobile-first layout that looks great on all screens
- **Minimal Dependencies:** Built with essentials only
- **Clean, Modular Components**
- **Deployed on Vercel**

---

## 🛠️ Tech Stack

- **Next.js 14 / React 18**
- **Tailwind CSS** or **CSS Modules**
- **FakeStoreAPI / DummyJSON**
- **Vercel Deployment**

---

## 📦 Installation

```bash
git clone https://github.com/venkateshmacherla/Appscrip-task-Venkatesh-Macharla.git
cd appscrip-task
npm install

## Running Locally
npm run dev


Then open http://localhost:3000

Build & Deployment
Build for Production
npm run build
npm start

Deploy on Vercel

Push your repo to GitHub

Go to Vercel Dashboard

Import your repository

Click Deploy — SSR works automatically

✅ Full Server-Side Rendering (SSR) support out of the box.

📁 Project Structure
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

**🔍 SEO & Best Practices**
Page title and meta description inside <Head>

Proper heading hierarchy (H1 → H2)

Open Graph + Twitter Card tags for social preview

JSON-LD schema (ItemList / Organization)

Descriptive alt text for all images

Mobile-first responsive design

🌐 API Integration

Primary Endpoint:
https://fakestoreapi.com/products

**Author**
Venkatesh Macharla
