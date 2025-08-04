import { useEffect, useState } from 'react';
import './navigation.css';
import { NavLink } from 'react-router-dom';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Element;
    if (isMobileMenuOpen && !target.closest('.nav-container')) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { path: '/kontejnery', label: 'Kontejnery' },
    { path: '/zemni-prace', label: 'Zemní výkopové práce' },
    { path: '/autodoprava', label: 'Autodoprava' },
    { path: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <button
          className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Hamburger menu"
        >
          <span className="hamburger-menu__line"></span>
          <span className="hamburger-menu__line"></span>
          <span className="hamburger-menu__line"></span>
        </button>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'show' : ''} `}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
