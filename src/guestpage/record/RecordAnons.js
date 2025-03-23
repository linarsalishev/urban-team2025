import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const RecordAnons = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Получаем ID мероприятия из URL

  // Состояния для формы
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [telegram, setTelegram] = useState('');

  // Функция для отправки данных
  const handleSubmit = () => {
    const record = {
      anonsId: id, // ID мероприятия
      firstName,
      lastName,
      phone,
      telegram,
    };

    // Получаем текущие записи из localStorage
    const records = JSON.parse(localStorage.getItem('records')) || [];
    records.push(record); // Добавляем новую запись
    localStorage.setItem('records', JSON.stringify(records)); // Сохраняем в localStorage

    navigate('/anons'); // Возвращаемся на страницу мероприятий
  };

  // Функция для перехода на страницу /guestpage
  const goToGuestPage = () => {
    navigate('/guestpage');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Запись на мероприятие</h1>
      <form style={styles.form}>
        <input
          type="text"
          placeholder="Имя"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Фамилия"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={styles.input}
        />
        <input
          type="tel"
          placeholder="Номер телефона"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Telegram"
          value={telegram}
          onChange={(e) => setTelegram(e.target.value)}
          style={styles.input}
        />
        <button type="button" onClick={handleSubmit} style={styles.button}>
          Отправить
        </button>
        {/* Кнопка для перехода на /guestpage */}
        <button
          type="button"
          onClick={goToGuestPage}
          style={{ ...styles.button, background: 'linear-gradient(45deg, #28a745, #20c997)' }}
        >
          Назад
        </button>
      </form>
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
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    padding: '10px',
    borderRadius: '25px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '16px',
    color: 'white',
    background: 'linear-gradient(45deg, #007bff, #00bfff)',
    cursor: 'pointer',
  },
};

export default RecordAnons;