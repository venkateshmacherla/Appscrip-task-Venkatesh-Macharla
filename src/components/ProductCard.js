import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ product }) {
  // Use semantic heading levels inside cards and lazy-load images for perf
  return (
    <article className={styles.card} aria-label={product.title}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.image}
        loading="lazy"
      />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price}</p>
      <span className={styles.category}>{product.category}</span>
      <button className={styles.button}>Add to Cart</button>
    </article>
  );
}

