import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AnonsEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Получаем ID новости из URL

  // Состояния для формы
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [teacher, setTeacher] = useState('');
  const [branch, setBranch] = useState('');

  // Загружаем данные новости при монтировании компонента
  useEffect(() => {
    const anonsList = JSON.parse(localStorage.getItem('anons')) || [];
    const anonsToEdit = anonsList.find((anons) => anons.id === parseInt(id));
    if (anonsToEdit) {
      setTitle(anonsToEdit.title);
      setDescription(anonsToEdit.description);
      setDate(anonsToEdit.date);
      setTeacher(anonsToEdit.teacher);
      setBranch(anonsToEdit.branch);
    }
  }, [id]);

  // Функция для сохранения изменений
  const handleSave = () => {
    const updatedAnons = {
      id: parseInt(id),
      title,
      description,
      date,
      teacher,
      branch,
    };

    const anonsList = JSON.parse(localStorage.getItem('anons')) || [];
    const updatedList = anonsList.map((anons) =>
      anons.id === parseInt(id) ? updatedAnons : anons
    );
    localStorage.setItem('anons', JSON.stringify(updatedList));
    navigate('/anonspage');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Редактировать новость/мероприятие</h1>
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
          Сохранить изменения
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

export default AnonsEdit;