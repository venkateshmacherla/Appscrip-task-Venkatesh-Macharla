import styles from '../styles/ProductCard.module.css';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export default function ProductCard({ product, liked, onLikeToggle }) {
  return (
    <article className={styles.card} aria-label={product.title}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.image}
        loading="lazy"
      />
      <h3 className={styles.title}>{product.title}</h3>
      <div className={styles.priceRow}>
        <p className={styles.price}>${product.price}</p>
        <button
          className={`${styles.likeBtn} ${liked ? styles.liked : ''}`}
          onClick={() => onLikeToggle(product.id)}
          title={liked ? "Unlike" : "Like"}
        >
          {liked ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <span className={styles.category}>{product.category}</span>
      <button className={styles.button}>Add to Cart</button>
    </article>
  );
}
