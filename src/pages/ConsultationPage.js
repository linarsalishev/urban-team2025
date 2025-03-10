import React from 'react';

const ContactsPage = () => {
  // Данные о контактах
  const contacts = [
    {
      platform: 'ВКонтакте',
      link: 'vk.com/urban_academ',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg', // Иконка ВК
    },
    {
      platform: 'Telegram',
      link: 'https://t.me/urban_academy',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg', // Иконка Telegram
    },
    {
      platform: 'Почта',
      link: 'urb.dnc.acd@gmail.com',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg', // Иконка почты
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Контакты</h1>

      {/* Список контактов */}
      <div style={styles.contactList}>
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.contactCard}
          >
            <img src={contact.icon} alt={contact.platform} style={styles.icon} />
            <p style={styles.contactPlatform}>{contact.platform}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

// Стили для страницы
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '24px',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%',
    maxWidth: '400px',
  },
  contactCard: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '15px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textDecoration: 'none',
    color: '#333',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  contactCardHover: {
    transform: 'scale(1.02)',
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)',
  },
  icon: {
    width: '30px',
    height: '30px',
    marginRight: '15px',
  },
  contactPlatform: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default ContactsPage;