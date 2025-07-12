import { Link } from 'react-router-dom';
import './footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>TESO</h2>
          <p>Profesionální stavební a dopravní služby</p>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h3>Navigace</h3>
            <Link to="/">Domů</Link>
            <Link to="/fotogalerie">Fotogalerie</Link>
            <Link to="/kontakt">Kontakt</Link>
          </div>

          <div className="footer-section">
            <h3>Kontakt</h3>
            <p>Adresa: [Vaše adresa]</p>
            <p>Telefon: +420 123 456 789</p>
            <p>Email: info@teso.cz</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TESO. Všechna práva vyhrazena.</p>
      </div>
    </footer>
  );
}
