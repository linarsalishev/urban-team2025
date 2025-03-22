import React from 'react';

const TeacherPage = () => {
  // Получаем список преподавателей из localStorage
  const teachers = JSON.parse(localStorage.getItem('teachers')) || [];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Список преподавателей</h1>
      <div style={styles.teacherList}>
        {teachers.map((teacher) => (
          <div key={teacher.id} style={styles.teacherCard}>
            <h2 style={styles.teacherName}>
              {teacher.firstName} {teacher.lastName}
            </h2>
            <p style={styles.teacherInfo}>Дата рождения: {teacher.birthDate}</p>
            <p style={styles.teacherInfo}>Телефон: {teacher.phone}</p>
            <p style={styles.teacherInfo}>Почта: {teacher.email}</p>
            <p style={styles.teacherInfo}>Telegram: {teacher.telegram}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Стили для страницы
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  title: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  teacherList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  teacherCard: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  teacherName: {
    fontSize: '18px',
    color: '#007bff',
    marginBottom: '10px',
  },
  teacherInfo: {
    fontSize: '14px',
    color: '#555',
  },
};

export default TeacherPage;