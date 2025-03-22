import React from 'react';

const StudentPage = () => {
  // Получаем список учеников из localStorage
  const students = JSON.parse(localStorage.getItem('students')) || [];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Список учеников</h1>
      <div style={styles.studentList}>
        {students.map((student, index) => (
          <div key={index} style={styles.studentCard}>
            <h2 style={styles.studentName}>
              {student.firstName} {student.lastName}
            </h2>
            <p style={styles.studentInfo}>Дата рождения: {student.birthDate}</p>
            <p style={styles.studentInfo}>Телефон: {student.phone}</p>
            <p style={styles.studentInfo}>Почта: {student.email}</p>
            <p style={styles.studentInfo}>Telegram: {student.telegram}</p>
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
  studentList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  studentCard: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  studentName: {
    fontSize: '18px',
    color: '#007bff',
    marginBottom: '10px',
  },
  studentInfo: {
    fontSize: '14px',
    color: '#555',
  },
};

export default StudentPage;