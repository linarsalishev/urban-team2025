import React from 'react';

const GuestRecord = () => {
  // Получаем записи из localStorage
  const records = JSON.parse(localStorage.getItem('records')) || [];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Записи на мероприятия</h1>
      <div style={styles.list}>
        {records.map((record, index) => (
          <div key={index} style={styles.card}>
            <h2>Мероприятие ID: {record.anonsId}</h2>
            <p>Имя: {record.firstName}</p>
            <p>Фамилия: {record.lastName}</p>
            <p>Телефон: {record.phone}</p>
            <p>Telegram: {record.telegram}</p>
          </div>
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
  },
  title: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export default GuestRecord;