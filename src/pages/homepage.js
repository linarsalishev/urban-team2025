import React, { useEffect, useState } from 'react'; // Импортируем React и необходимые хуки
import '../App.css'; // Импортируем стили из файла App.css

const App = () => {
  // Создаем состояние `user` для хранения данных пользователя
  const [user, setUser] = useState(null);

  // Используем `useEffect` для выполнения кода при загрузке страницы
  useEffect(() => {
    // Проверяем, запущено ли приложение внутри Telegram
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp; // Получаем объект Telegram Web App

      tg.ready(); // Сообщаем Telegram, что приложение готово к использованию
      tg.expand(); // Разворачиваем приложение на весь экран

      // Получаем данные пользователя из Telegram
      const userData = tg.initDataUnsafe.user;
      setUser(userData); // Сохраняем данные пользователя в состояние `user`

      // Настраиваем основную кнопку (например, "Зайти")
      tg.MainButton.setText('Зайти'); // Устанавливаем текст на кнопке
      tg.MainButton.show(); // Показываем кнопку внизу экрана

      // Обработчик нажатия на основную кнопку
      tg.MainButton.onClick(() => {
        // Отправляем данные в бота (например, действие "start")
        tg.sendData(JSON.stringify({ action: 'start' }));
        tg.close(); // Закрываем приложение после нажатия
      });
    }
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при загрузке

  return (
    <div className="app">
      {/* Шапка страницы */}
      <header className="header">
        <h1>URBAN-TEAM</h1>
        {/* Если данные пользователя есть, показываем приветствие */}
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

export default App; // Экспортируем компонент, чтобы его можно было использовать в других файлах