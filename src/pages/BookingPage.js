import React, { useState } from 'react';

const BookingPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные для записи:', { name, phone, selectedClass });
    // Здесь можно добавить логику отправки данных на сервер
  };

  return (
    <div>
      <h1>Запись на занятие</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Ваш телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">Выберите занятие</option>
          <option value="salsa">Сальса</option>
          <option value="bachata">Бачата</option>
        </select>
        <button type="submit">Записаться</button>
      </form>
    </div>
  );
};

export default BookingPage;