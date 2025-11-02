# Appscrip PLP — Next.js Demo

This repository contains a Product Listing Page implemented with Next.js and server-side rendering (SSR). It fetches mock products from FakeStoreAPI and renders an SEO-friendly, responsive PLP.

## Scripts

In the project directory, use:

### `npm run dev`

Runs the app in development mode (Next.js dev server). Open http://localhost:3000 to view.

### `npm run build`

Builds the production app (Next.js).

### `npm start`

Runs the production server after build.

## How this meets the task

- Uses Next.js to enable SSR via `getServerSideProps`.
- SEO: title, meta description, H1/H2, JSON-LD schema (ItemList), alt text for images.
- Responsive layout with CSS grid for product cards.
- Minimal external packages.

## Deploy

You can deploy this project to Vercel or Netlify. Example (Vercel):

1. Commit and push to a public GitHub repo named `Appscrip-task-<YourName>`.
2. Import the repo into Vercel and follow the setup (framework: Next.js).

Netlify also supports Next.js (use the official adapter or use the built static export for simple setups). Vercel is recommended for full SSR support.

## Notes

- The app fetches data from `https://fakestoreapi.com/products` on the server to demonstrate SSR.
- The `public/` folder contains image assets (logo, banner).

## Local testing

Install deps and run dev:

```powershell
npm install
npm run dev
```
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
