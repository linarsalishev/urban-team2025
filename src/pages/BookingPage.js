import React, { useState } from 'react';

const BookingPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [branch, setBranch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные для записи:', { name, phone, selectedClass, branch });
    // Здесь можно добавить логику отправки данных
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Запись на занятие</h1>
      <form onSubmit={handleSubmit} style={styles.form}>

      <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          style={styles.select}
        >
          <option value="">Выберите занятие</option>
          <option value="Hip-Hop">Хип-хоп</option>
          <option value="Girly Hip-Hop">Герли хип-хоп</option>
          <option value="K-Pop">К-поп</option>
          <option value="Frame Up Strip">Фрейм-ап стрип</option>
          <option value="High Heels">Хайхиллс</option>
          <option value="children's choreography">Детская хореография 6+</option>
        </select>

        <select
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          style={styles.select}
        >
          <option value="">Выберите филиал</option>
          <option value="Street 1">Б.Нижегородская 77</option>
          <option value="Street 2">Гагарина 2Б</option>
          <option value="Street 3">Юбилейная 64Б</option>
          <option value="Street 4">Мира 17</option>
          <option value="Street 5">Тихонравова 8А</option>
          <option value="Street 5">Институтский Городок 20Б</option>
        </select>

        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="tel"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Записаться
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
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
    transition: 'border-color 0.3s ease',
  },
  inputFocus: {
    borderColor: '#007bff',
  },
  select: {
    padding: '10px',
    borderRadius: '25px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    backgroundColor: 'white',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '15px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '16px',
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

export default BookingPage;