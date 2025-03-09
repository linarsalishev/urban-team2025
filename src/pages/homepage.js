import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null); // Состояние для данных пользователя

  // Используем useEffect для инициализации при загрузке
  useEffect(() => {
    // Проверяем, запущено ли приложение внутри Telegram
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp; // Получаем объект Telegram Web App

      tg.ready(); // Сообщаем Telegram, что приложение готово
      tg.expand(); // Разворачиваем приложение на весь экран

      // Получаем данные пользователя
      const userData = tg.initDataUnsafe.user;
      setUser(userData); // Сохраняем данные пользователя

      // Настраиваем основную кнопку
      tg.MainButton.setText('Зайти'); // Текст на кнопке
      tg.MainButton.show(); // Показываем кнопку

      // Обработчик нажатия на кнопку
      tg.MainButton.onClick(() => {
        tg.sendData(JSON.stringify({ action: 'start' })); // Отправляем данные в бота
        tg.close(); // Закрываем приложение
      });
    }
  }, []); // Пустой массив зависимостей означает, что эффект выполнится один раз

  return (
    <div className="app">
      {/* Шапка страницы */}
      <header className="header">
        <h1>URBAN-TEAM</h1>
        {/* Приветствуем пользователя, если данные доступны */}
        {user && <p>Привет, {user.first_name}!</p>}
      </header>

      {/* Основной контент */}
      <main className="main">
        <div className="card">
          <h2>Добро пожаловать!</h2>
          <p>Нажмите "Зайти", чтобы начать.</p>
        </div>
      </main>

      {/* Подвал страницы */}
      <footer className="footer">
        <p>© URBAN-TEAM. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default App;