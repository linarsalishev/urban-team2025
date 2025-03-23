import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnonsPage = () => {
  const navigate = useNavigate();

  // Получаем новости из localStorage
  const anonsList = JSON.parse(localStorage.getItem('anons')) || [];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Новости и мероприятия</h1>
      <button onClick={() => navigate('/createanons')} style={styles.button}>
        Создать новость
      </button>
      <div style={styles.list}>
        {anonsList.map((anons) => (
          <div key={anons.id} style={styles.card}>
            <h2>{anons.title}</h2>
            <p>{anons.description}</p>
            <p>Дата: {anons.date}</p>
            <p>Преподаватель: {anons.teacher}</p>
            <p>Филиал: {anons.branch}</p>
            <button
              onClick={() => navigate(`/recordanons`)}
              style={styles.recordButton}
            >
              Записаться
            </button>
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
  button: {
    padding: '10px 20px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '16px',
    color: 'white',
    background: 'linear-gradient(45deg, #007bff, #00bfff)',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  recordButton: {
    padding: '5px 10px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '14px',
    color: 'white',
    background: 'linear-gradient(45deg, #28a745, #20c997)',
    cursor: 'pointer',
  },
};

export default AnonsPage;