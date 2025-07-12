import { useState } from 'react';
import './Kontakt.css';
import emailjs from '@emailjs/browser';

export function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<{
    submitting: boolean;
    submitted: boolean;
    error: string | null;
  }>({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'info@vasestranka.cz', // Replace with your email
        },
        'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
      );

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Došlo k chybě při odesílání. Prosím zkuste to znovu.',
      });
    }
  };

  return (
    <div className="page-container">
      <h1>Kontakt</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Kontaktní informace</h2>
          <p>
            <strong>Adresa:</strong> U Peti a Martinky, 123 45 Lešná
          </p>
          <p>
            <strong>Telefon:</strong> +420 123 456 789
          </p>
          <p>
            <strong>Email:</strong> peta@david.cz
          </p>
        </div>
        <div className="contact-form">
          <h2>Kontaktní formulář</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Jméno:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Zpráva:</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" disabled={status.submitting}>
              {status.submitting ? 'Odesílání...' : 'Odeslat'}
            </button>
            {status.submitted && (
              <p className="success-message">Zpráva byla úspěšně odeslána!</p>
            )}
            {status.error && <p className="error-message">{status.error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
