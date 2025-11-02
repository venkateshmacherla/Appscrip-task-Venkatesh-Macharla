import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function AccordionSection({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="footer-accordion">
      <button
        type="button"
        className="footer-accordion-trigger"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '15px',
          padding: '16px 0',
          cursor: 'pointer'
        }}
      >
        {title}
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      <div style={{ display: open ? 'block' : 'none', borderTop: '1px solid #222', marginBottom: '16px' }}>
        {children}
      </div>
      <hr style={{ border: "none", borderTop: "1px solid #444", margin: 0 }} />
    </div>
  );
}

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 900);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <footer className="footer">
      {/* ---------- TOP SECTION ------------- */}
      <div className="footer-top">
        <div className="subscribe-section">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettà muse.</p>
          <form>
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
        <div className="footer-contact-currency">
          <div>
            <h4>CONTACT US</h4>
            <div className="contact-details">
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            </div>

            <div>
              <h4>CURRENCY</h4>
              <p>
                <img src="/usd.png" alt="USD" style={{ width: "22px", height: "22px", verticalAlign: "middle", marginRight: "8px" }} />
                USD
              </p>
              <small className="currency-note">
                Transactions will be completed in Euros and a currency reference is available on hover.
              </small>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- LINKS/MAIN SECTION ------------ */}
      <div className="footer-main">
        <div className="footer-links">
          {isMobile ? (
            <>
              <AccordionSection title="mettà muse">
                <ul className='text-light'>
                  <li>About Us</li>
                  <li>Stories</li>
                  <li>Artisans</li>
                  <li>Boutiques</li>
                  <li>Contact Us</li>
                  <li>EU Compliances Docs</li>
                </ul>
              </AccordionSection>
              <AccordionSection title="QUICK LINKS">
                <ul className='text-light'>
                  <li>Orders & Shipping</li>
                  <li>Join/Login as a Seller</li>
                  <li>Payment & Pricing</li>
                  <li>Return & Refunds</li>
                  <li>FAQs</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </AccordionSection>
              <AccordionSection title="FOLLOW US">
                <div className="social-icons">
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon" />
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="social-icon" />
                  </a>
                </div>
              </AccordionSection>
              {/* Payment section outside accordions on mobile */}
              <div style={{ marginTop: 12 }}>
                <h5>mettà muse ACCEPTS</h5>
                <div className="payment-icons">
                  <img src="/payment-icons/gpay.png" alt="GPay" />
                  <img src="/payment-icons/mastercard.png" alt="Mastercard" />
                  <img src="/payment-icons/paypal.png" alt="PayPal" />
                  <img src="/payment-icons/amex.png" alt="AMEX" />
                  <img src="/payment-icons/applepay.png" alt="Apple Pay" />
                  <img src="/payment-icons/opay.png" alt="OPay" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <h5>mettà muse</h5>
                <ul className='text-light'>
                  <li>About Us</li>
                  <li>Stories</li>
                  <li>Artisans</li>
                  <li>Boutiques</li>
                  <li>Contact Us</li>
                  <li>EU Compliances Docs</li>
                </ul>
              </div>
              <div>
                <h5>QUICK LINKS</h5>
                <ul className='text-light'>
                  <li>Orders & Shipping</li>
                  <li>Join/Login as a Seller</li>
                  <li>Payment & Pricing</li>
                  <li>Return & Refunds</li>
                  <li>FAQs</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
              <div>
                <h5>FOLLOW US</h5>
                <div className="social-icons">
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon" />
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="social-icon" />
                  </a>
                </div>
                <div style={{ marginTop: 12 }}>
                  <h5>mettà muse ACCEPTS</h5>
                  <div className="payment-icons">
                    <img src="/payment-icons/gpay.png" alt="GPay" />
                    <img src="/payment-icons/mastercard.png" alt="Mastercard" />
                    <img src="/payment-icons/paypal.png" alt="PayPal" />
                    <img src="/payment-icons/amex.png" alt="AMEX" />
                    <img src="/payment-icons/applepay.png" alt="Apple Pay" />
                    <img src="/payment-icons/opay.png" alt="OPay" />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="footer-copy">
          <small>Copyright © 2023 mettamuse.com. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
