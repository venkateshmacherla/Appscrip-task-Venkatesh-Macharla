import { useState } from 'react';
import styles from '../styles/FilterSidebar.module.css';

export default function FilterSidebar({ checked, onChange }) {
 
  function handleSelectAll() {
    if (!checked.men) onChange('men');
    if (!checked.women) onChange('women');
    if (!checked.kids) onChange('kids');
  }

  function handleUnselectAll() {
    if (checked.men) onChange('men');
    if (checked.women) onChange('women');
    if (checked.kids) onChange('kids');
  }

  return (
    <aside className={styles.sidebar}>
      <label className={styles.filterCheckbox}>
        <input type="checkbox" /> CUSTOMIZABLE
      </label>
      <section className={styles.filterGroup}>
        <h3 className={styles.groupTitle}>IDEAL FOR</h3>

        <div
          className={styles.filterOption}
          style={{ cursor: "pointer", color: "#15847a" }}
          onClick={handleSelectAll}
        >
          All
        </div>
        <div
          className={styles.unselect}
          style={{ cursor: "pointer", color: "#bb2222" }}
          onClick={handleUnselectAll}
        >
          Unselect all
        </div>

        <div className={styles.checkboxRow}>
          <label>
            <input
              type="checkbox"
              checked={checked.men}
              onChange={() => onChange('men')}
            />
            Men
          </label>
        </div>

        <div className={styles.checkboxRow}>
          <label>
            <input
              type="checkbox"
              checked={checked.women}
              onChange={() => onChange('women')}
            />
            Women
          </label>
        </div>

        <div className={styles.checkboxRow}>
          <label>
            <input
              type="checkbox"
              checked={checked.kids}
              onChange={() => onChange('kids')}
            />
            Baby & Kids
          </label>
        </div>
      </section>

      {/* Keep other filter sections unchanged */}
      <section className={styles.filterGroup}>
        <h3 className={styles.groupTitle}>OCCASION</h3>
        <select className={styles.select}>
          <option>All</option>
          <option>Casual</option>
          <option>Party</option>
          <option>Formal</option>
        </select>
      </section>
      <section className={styles.filterGroup}>
        <h3 className={styles.groupTitle}>WORK</h3>
        <div className={styles.filterOption}>All</div>
      </section>
      <section className={styles.filterGroup}>
        <h3 className={styles.groupTitle}>FABRIC</h3>
        <div className={styles.filterOption}>All</div>
      </section>
      <section className={styles.filterGroup}>
        <h3 className={styles.groupTitle}>SEGMENT</h3>
        <div className={styles.filterOption}>All</div>
      </section>
      <section className={styles.filterGroup}>
        <h3 className={styles.groupTitle}>SUITABLE FOR</h3>
        <div className={styles.filterOption}>All</div>
      </section>
      <section className={styles.filterGroup}>
        <h3 className={styles.groupTitle}>RAW MATERIALS</h3>
        <div className={styles.filterOption}>All</div>
      </section>
    </aside>
  );
}
