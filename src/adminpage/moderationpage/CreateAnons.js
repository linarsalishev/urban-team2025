import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAnons = () => {
  const navigate = useNavigate();

  // Состояния для формы
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [teacher, setTeacher] = useState('');
  const [branch, setBranch] = useState('');

  // Функция для сохранения новости/мероприятия
  const handleSave = () => {
    const newAnons = {
      id: Date.now(), // Уникальный ID
      title,
      description,
      date,
      teacher,
      branch,
    };

    // Получаем текущие новости из localStorage
    const anonsList = JSON.parse(localStorage.getItem('anons')) || [];
    anonsList.push(newAnons); // Добавляем новую новость
    localStorage.setItem('anons', JSON.stringify(anonsList)); // Сохраняем в localStorage

    navigate('/anons'); // Переход на страницу с новостями
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Создать новость/мероприятие</h1>
      <form style={styles.form}>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
          type="text"
          placeholder="Преподаватель"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Филиал"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          style={styles.input}
        />
        <button type="button" onClick={handleSave} style={styles.button}>
          Сохранить
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
    transition: 'background 0.3s ease, transform 0.2s ease',
  },
};

export default CreateAnons;