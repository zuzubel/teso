import { Link } from 'react-router-dom';
import './homepage.css';

export function Homepage() {
  const services = [
    {
      title: 'Kontejnery',
      description: [
        'Pronájem kontejnerů',
        'Profesionální a ekologická likvidace odpadů',
      ],
      icon: '🚛',
      link: '/kontejnery',
    },
    {
      title: 'Zemní a výkopové práce',
      description: [
        'Výkopy základů jímek',
        'Výkopy pro inženýrské sítě (voda, plyn, elektřina, kanalizace)',
        'Terénní úpravy',
      ],
      icon: '🔨',
      link: '/zemni-prace',
    },
    {
      title: 'Autodoprava',
      description: [
        'Přeprava stavebních materiálů',
        'Přeprava strojů a zařízení',
        'Speciální autodoprava',
      ],
      icon: '🏗️',
      link: '/autodoprava',
    },
  ];

  return (
    <div className="uvodni-stranka-container">
      <div className="uvodni-stranka">
        <div className="uvodni-stranka-content">
          <h1>Vítejte v TESO</h1>
          <p>
            Firma Petr David – TESO byla založena v roce 1993. Sídlo firmy je v
            obci Lešná u Valašského Meziříčí. Naší hlavní činností je
            kontejnerová doprava.
          </p>
        </div>
      </div>
      <div className="services-section">
        <h2>Naše služby</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              {Array.isArray(service.description) ? (
                <ul className="service-list">
                  {service.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{service.description}</p>
              )}
              <Link to={service.link} className="service-button">
                Více
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
