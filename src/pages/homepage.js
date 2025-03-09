import React, { useEffect, useState } from 'react';
import '../App.css'; // Импортируем стили

const App = () => {
  const [user, setUser] = useState(null); // Состояние для хранения данных пользователя

  // Используем useEffect для выполнения кода при загрузке страницы
  useEffect(() => {
    // Проверяем, запущено ли приложение внутри Telegram
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp; // Получаем объект Telegram Web App

      tg.ready(); // Сообщаем Telegram, что приложение готово к использованию
      tg.expand(); // Разворачиваем приложение на весь экран

      // Получаем данные пользователя из Telegram
      const userData = tg.initDataUnsafe.user;
      setUser(userData); // Сохраняем данные пользователя в состояние

      // Настраиваем основную кнопку (например, "Играть")
      tg.MainButton.setText('Зайти'); // Текст на кнопке
      tg.MainButton.show(); // Показываем кнопку

      // Обработчик нажатия на основную кнопку
      tg.MainButton.onClick(() => {
        tg.sendData(JSON.stringify({ action: 'start' })); // Отправляем данные в бота
        tg.close(); // Закрываем приложение
      });
    }
  }, []);

  return (
    <div className="app">
      {/* Шапка страницы */}
      <header className="header">
        <h1>URBAN-TEAM</h1>
        {user && <p>Привет, {user.first_name}!</p>} {/* Приветствуем пользователя */}
      </header>

      {/* Основной контент */}
      <main className="main">
        <div className="card">
          <h2>Добро пожаловать!</h2>
          <p>Нажмите "Запуск", чтобы начать.</p>
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