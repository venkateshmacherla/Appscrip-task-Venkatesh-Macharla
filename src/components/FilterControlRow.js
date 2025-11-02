import styles from '../styles/FilterControlRow.module.css';

export default function FilterControlRow({
  count,
  showFilter,
  onHideFilter,
  onShowFilter,
  sort,
  onSortChange
}) {
  return (
    <>
      {/* MOBILE: Top row */}
      <div className={styles.mobileTopRow}>
        <button
          className={styles.mobileFilterBtn}
          onClick={() => (showFilter ? onHideFilter() : onShowFilter())}
          aria-label="Toggle Filter"
        >
          FILTER
        </button>
        <div className={styles.mobileSort}>
          <select
            value={sort}
            className={styles.sortSelect}
            onChange={e => onSortChange(e.target.value)}
          >
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="priceHighLow">PRICE : HIGH TO LOW</option>
            <option value="priceLowHigh">PRICE : LOW TO HIGH</option>
          </select>
        </div>
      </div>
      <div className={styles.controlRow}>
        <div className={styles.count}>{count} ITEMS</div>
        <button
          className={styles.hideBtn}
          onClick={() => (showFilter ? onHideFilter() : onShowFilter())}
        >
          {showFilter ? "< HIDE FILTER" : "> SHOW FILTER"}
        </button>
        <div className={styles.sortGroup}>
          <select
            value={sort}
            className={styles.sortSelect}
            onChange={e => onSortChange(e.target.value)}
          >
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="priceHighLow">PRICE : LOW TO HIGH</option>
            <option value="priceLowHigh">PRICE : HIGH TO LOW</option>
          </select>
        </div>
      </div>
    </>
  );
}
