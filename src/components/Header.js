// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Студия танцев</h1>
      <nav>
        <a href="/">Главная</a>
        <a href="/schedule">Расписание</a>
        <a href="/booking">Запись</a>
      </nav>
    </header>
  );
};

export default Header;