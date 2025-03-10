import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeButton = () => {
  const navigate = useNavigate(); // Хук для навигации

  const handleClick = () => {
    navigate('/main'); // Переход на главную страницу
  };

  return (
    <button onClick={handleClick} style={styles.button}>
      Вернуться
    </button>
  );
};

// Стили для кнопки
const styles = {
  button: {
    padding: '10px 20px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '14px',
    color: 'white',
    background: 'linear-gradient(45deg, #007bff, #00bfff)',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.2s ease',
    margin: '20px 0',
  },
  buttonHover: {
    background: 'linear-gradient(45deg, #00bfff, #007bff)',
    transform: 'scale(1.05)',
  },
  buttonActive: {
    transform: 'scale(0.95)',
  },
};

export default HomeButton;