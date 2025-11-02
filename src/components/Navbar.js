import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <button
            className={styles.menuBtn}
            aria-label="Open menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect y="4" width="24" height="2" rx="1" fill="#222"/>
              <rect y="11" width="24" height="2" rx="1" fill="#222"/>
              <rect y="18" width="24" height="2" rx="1" fill="#222"/>
            </svg>
          </button>
          <a href="/" style={{ display: "inline-block" }}>
            <img src="/logo.png" alt="Logo" className={styles.logo} style={{ cursor: "pointer" }} />
          </a>
        </div>
        <div className={styles.center}>
          <span className={styles.logotext}>LOGO</span>
        </div>
        <div className={styles.right}>
            <button className={styles.iconBtn} aria-label="Search">
                <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2">
                    <circle cx="10" cy="10" r="7"/>
                    <line x1="15.5" y1="15.5" x2="20" y2="20"/>
                </svg>
            </button>
            <button className={styles.iconBtn} aria-label="Favorites">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
                    <path d="M12 21s-5.05-4.99-7.07-7.07A5.002 5.002 0 0 1 7 3a5.002 5.002 0 0 1 5 5 5.002 5.002 0 0 1 5-5 5.002 5.002 0 0 1 5 7c-2.02 2.08-7.07 7.07-7.07 7.07z"/>
                </svg>
            </button>
            <button className={styles.iconBtn} aria-label="Cart">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a1 1 0 0 0 1 .61h9.72a1 1 0 0 0 1-.78l3.24-12.61H6"/>
                </svg>
            </button>
            <button className={`${styles.iconBtn} ${styles.hideMobile}`} aria-label="Account">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
                    <circle cx="12" cy="7" r="4"/>
                    <path d="M5.5 21a7.5 7.5 0 0 1 13 0"/>
                </svg>
            </button>
            <span className={`${styles.lang} ${styles.hideMobile}`}>ENG <span className={styles.arrow}>▼</span></span>
        </div>
      </nav>
      <div
        className={
          `${styles.links} ${menuOpen ? styles.showMobileLinks : ''}`
        }
      >
        <a>SHOP</a>
        <a>SKILLS</a>
        <a>STORIES</a>
        <a>ABOUT</a>
        <a>CONTACT US</a>
      </div>
    </>
  );
}
