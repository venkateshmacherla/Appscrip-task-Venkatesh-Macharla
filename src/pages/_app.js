// pages/_app.js
import '../styles/globals.css';
import ErrorBoundary from '../components/ErrorBoundary';
import Footer from '../components/Footer'; 

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
      <Footer /> 
    </ErrorBoundary>
  );
}
