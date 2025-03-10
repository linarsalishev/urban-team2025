import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import MainPage from './pages/MainPage'; // Импортируем MainPage
import SchedulePage from './pages/SchedulePage';
import BookingPage from './pages/BookingPage';
import GalleryPage from './pages/GalleryPage';
import ConsultationPage from './pages/ConsultationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} /> {/* Маршрут для MainPage */}
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
