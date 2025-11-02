import ProductCard from './ProductCard';
import styles from '../styles/ProductList.module.css';

export default function ProductList({ products, columns = 4, likedProducts = new Set(), onLikeToggle }) {
  if (!products || !products.length) {
    return (
      <div style={{ padding: 28, textAlign: 'center', background: '#fff', borderRadius: 8 }}>
        <p style={{ margin: 0 }}>No products available at the moment.</p>
      </div>
    );
  }

  return (
    <div
      className={styles.productList}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '26px'
      }}
    >
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          liked={likedProducts.has(product.id)}
          onLikeToggle={() => onLikeToggle(product.id)}
        />
      ))}
    </div>
  );
}
