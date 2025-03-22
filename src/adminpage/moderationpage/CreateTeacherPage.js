import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateTeacherPage = () => {
  const navigate = useNavigate();

  // Состояния для данных преподавателя
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [telegram, setTelegram] = useState('');
  const [selectedDirection, setSelectedDirection] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');

  // Получаем данные из localStorage
  const danceDirections = JSON.parse(localStorage.getItem('danceDirections')) || [];
  const branches = JSON.parse(localStorage.getItem('branches')) || [];

  // Функция для сохранения данных преподавателя
  const handleSave = () => {
    const newTeacher = {
      id: Date.now(), // Уникальный ID
      firstName,
      lastName,
      birthDate,
      phone,
      email,
      telegram,
      direction: selectedDirection,
      branch: selectedBranch,
    };

    // Получаем текущий список преподавателей из localStorage
    const teachers = JSON.parse(localStorage.getItem('teachers')) || [];
    teachers.push(newTeacher); // Добавляем нового преподавателя
    localStorage.setItem('teachers', JSON.stringify(teachers)); // Сохраняем обновлённый список

    navigate('/teacherpage'); // Переход на страницу со списком преподавателей
  };
  const handleBack = () => {
    navigate('/moderpage');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Добавить Преподавателя</h1>
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
          type="date"
          placeholder="Дата рождения"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          style={styles.input}
        />
        <input
          type="tel"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Имя в Telegram"
          value={telegram}
          onChange={(e) => setTelegram(e.target.value)}
          style={styles.input}
        />
        <select
          value={selectedDirection}
          onChange={(e) => setSelectedDirection(e.target.value)}
          style={styles.select}
        >
          <option value="">Выберите направление</option>
          {danceDirections.map((direction) => (
            <option key={direction.id} value={direction.name}>
              {direction.name}
            </option>
          ))}
        </select>
        <select
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value)}
          style={styles.select}
        >
          <option value="">Выберите филиал</option>
          {branches.map((branch) => (
            <option key={branch.id} value={branch.name}>
              {branch.name}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleSave} style={styles.button}>
          Сохранить
        </button>
        <button
          type="button"
          onClick={handleBack}
          style={{ ...styles.button, background: 'linear-gradient(45deg, #6c757d, #5a6268)' }}
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
  select: {
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

export default CreateTeacherPage;