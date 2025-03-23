import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ArendaHall = () => {
  const navigate = useNavigate();

  // Состояния для формы
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [comment, setComment] = useState('');

  // Функция для отправки данных
  const handleSubmit = () => {
    const booking = {
      id: Date.now(), // Уникальный ID бронирования
      name,
      phone,
      date,
      time,
      guests,
      comment,
      status: 'Новая', // Статус бронирования
    };

    // Получаем текущие бронирования из localStorage
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(booking); // Добавляем новое бронирование
    localStorage.setItem('bookings', JSON.stringify(bookings)); // Сохраняем в localStorage

    navigate('/'); // Возвращаемся на главную страницу
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Аренда зала</h1>
      <form style={styles.form}>
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          type="date"
          placeholder="Дата"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={styles.input}
        />
        <input
          type="time"
          placeholder="Время"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Количество гостей"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Дополнительные пожелания"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ ...styles.input, height: '100px' }}
        />
        <button type="button" onClick={handleSubmit} style={styles.button}>
          Забронировать
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
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    color: 'white',
    background: 'linear-gradient(45deg, #007bff, #00bfff)',
    cursor: 'pointer',
  },
};

export default ArendaHall;