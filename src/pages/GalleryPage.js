import React from 'react';
import HomeButton from '../components/HomeButton'; // Импортируем HomeButton

const SubscriptionPage = () => {
  // Данные об абонементах
  const subscriptions = [
    { name: 'Разовое занятие', price: '550₽', description: 'Одно занятие в любом филиале' },
    { name: '4 занятия', price: '1850₽', description: '4 занятия в течение 30 дней' },
    { name: '8 занятий', price: '2800₽', description: '8 занятий в течение 60 дней' },
    { name: 'Безлимитный', price: '5100₽', description: 'Неограниченное количество занятий в течение 30 дней' },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Список абонементов</h1>
      {/* Список абонементов */}
      <div style={styles.subscriptionList}>
        {subscriptions.map((subscription, index) => (
          <div key={index} style={styles.subscriptionCard}>
            <h2 style={styles.subscriptionName}>{subscription.name}</h2>
            <p style={styles.subscriptionPrice}>{subscription.price}</p>
            <p style={styles.subscriptionDescription}>{subscription.description}</p>
            <div style={styles.buttonContainer}>
              <button style={styles.button}>Приобрести</button>
              <button style={styles.button}>Заморозить</button>
              <button style={styles.button}>Продлить</button>
            </div>
          </div>
        ))}
      </div>
      <HomeButton /> {/* Кнопка "Вернуться домой" */}
    </div>
  );
};

// Стили для страницы
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  title: {
    fontSize: '24px',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  subscriptionList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  subscriptionCard: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  subscriptionName: {
    fontSize: '20px',
    color: '#007bff',
    marginBottom: '10px',
  },
  subscriptionPrice: {
    fontSize: '18px',
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subscriptionDescription: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '15px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 15px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '14px',
    color: 'white',
    background: 'linear-gradient(45deg, #007bff, #00bfff)',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.2s ease',
  },
  buttonHover: {
    background: 'linear-gradient(45deg, #00bfff, #007bff)',
    transform: 'scale(1.05)',
  },
  buttonActive: {
    transform: 'scale(0.95)',
  },
};

export default SubscriptionPage;