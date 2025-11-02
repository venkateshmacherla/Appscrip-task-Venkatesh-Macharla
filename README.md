# Appscrip PLP - Product Listing Page

A modern, mobile-first Product Listing Page (PLP) built with **Next.js** and SSR. Features SEO optimization, API-powered product data, sortable/filterable grid, and thoughtful code organization.

---

## 🚀 Features

- ✅ **Next.js with Server-Side Rendering (SSR)**
- ✅ **SEO Optimized:** Meta tags, Schema markup, accessible headings, alt text
- ✅ **API Integration:** Fetches live products from FakeStoreAPI or DummyJSON
- ✅ **Favorites:** Like/unlike products, view liked products
- ✅ **Sort & Filter:** Sort by price/popularity/date, filter by category
- ✅ **Mobile Responsive:** Looks great on all devices
- ✅ **Minimal Dependencies:** Only essentials (Next.js, React, Tailwind/CSS)
- ✅ **Clean, Modular Components**
- ✅ **Netlify or Vercel Ready**

---

## 📋 Requirements Completed

1. **HTML & CSS:**  
   - Standalone HTML/CSS sample in `/public/index.html`  
   - Pure CSS, no frameworks, responsive grid

2. **React/Next.js Implementation:**  
   - Built with Next.js (using `App Router` and SSR)
   - Async data fetch in `getServerSideProps`
   - PLP grid and filters as React components

3. **API Integration & Fallback:**  
   - `https://fakestoreapi.com/products` used for real data  
   - Graceful fallback to mock data if API fails

4. **SEO Settings:**  
   - Custom HTML `<title>`, meta description, JSON-LD schema, OG/Twitter cards
   - Properly nested H1, H2, semantic tags, descriptive alt attributes

5. **Code Quality:**  
   - Consistent naming (`camelCase` for vars, `PascalCase` for components)
   - Modern folder structure (see Project Structure)
   - Minimal dependencies

6. **Netlify/Vercel Deploy:**  
   - Production-ready config: `netlify.toml` and `next.config.js`  
   - SSR supported on Vercel (default) and Netlify (via adapter)

---

## 🛠️ Tech Stack

- **Next.js 14** / **React 18**
- **Tailwind CSS** or custom CSS modules
- **FakeStoreAPI**

---

## 📦 Installation

git clone https://github.com/venkateshmacherla/Appscrip-task-Venkatesh-Macharla.git
cd appscrip-task
npm install

text

## 🏗️ Running Locally

npm run dev

text
Visit [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Build & Deployment

### Build for Production

npm run build
npm start

text

### Deploy to Netlify or Vercel

**Vercel:**
- Push to repo, connect via Vercel dashboard  
- Vercel auto-detects, SSR just works

**Netlify:**
- Push repo, connect & deploy (see `netlify.toml`)
- Or:  
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod

text

---

## 📁 Project Structure

appscrip-task-venkatesh-macharla/
├── .git/
├── .next/
├── node_modules/
├── public/
│   ├── payment-icons/
│   ├── banner.jpg
│   ├── favicon.ico
│   ├── index.html
│   ├── logo.png
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   ├── usd.png
├── src/
│   ├── components/
│   │   ├── ErrorBoundary.js
│   │   ├── FilterControlRow.js
│   │   ├── FilterSidebar.js
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   ├── ProductCard.js
│   │   ├── ProductList.js
│   ├── pages/
│   │   ├── _app.js
│   │   ├── index.js
│   ├── styles/
│   │   ├── FilterControlRow.module.css
│   │   ├── FilterSidebar.module.css
│   │   ├── Navbar.module.css
│   │   ├── ProductCard.module.css
│   │   ├── ProductList.module.css
│   │   ├── globals.css
│   │   ├── App.css
│   │   ├── index.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── logo.svg
├── netlify.toml
├── next.config.js
├── package.json
├── package-lock.json
├── README.md

text

---

## 🔍 SEO & Best Practices

- Page title and meta description in `<Head>`
- H1 on main product grid, H2 on subsections
- Open Graph and Twitter card tags for social preview
- JSON-LD (type: ItemList or Organization)
- All images include descriptive `alt` text
- Mobile-first, then desktop/large screen optimizations

---

## 🌐 API Integration

Currently uses **FakeStoreAPI**  
- Endpoint: `https://fakestoreapi.com/products`  
- For more/fake data: swap to DummyJSON (`https://dummyjson.com/products?limit=100`)

If API is unreachable, the page handles fallback gracefully.

---

## 📝 Code & Naming Conventions

- **Component files:** PascalCase (`ProductList.jsx`)
- **Functions/variables:** camelCase (`getProducts`, `filteredProducts`)
- **Styling:** Tailwind, CSS Modules, or ES6+

---

## 🚀 Performance

- SSR for rapid initial load
- Image optimization (use Next.js `Image` component if possible)
- Minimal bundle by default

---
