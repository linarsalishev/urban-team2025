import React, { useState } from 'react';

const SchedulePage = () => {
  // Состояние для выбранного филиала
  const [selectedBranch, setSelectedBranch] = useState('Street 1');

  // Данные для расписания (можно заменить на свои)
  const scheduleData = [
    {
      day: 'Понедельник',
      classes: [
        { time: '18:00', name: 'Хип-хоп', instructor: 'Владислав Цой', branch: 'Street 1' },
        { time: '19:30', name: 'Герли хип-хоп', instructor: 'Полина', branch: 'Street 2' },
      ],
    },
    {
      day: 'Вторник',
      classes: [
        { time: '17:00', name: 'К-поп', instructor: 'Мария Сидорова', branch: 'Street 1' },
        { time: '18:30', name: 'Фрейм-ап стрип', instructor: 'Ольга Кузнецова', branch: 'Street 3' },
      ],
    },
    {
      day: 'Среда',
      classes: [
        { time: '18:00', name: 'Хайхиллс', instructor: 'Екатерина Смирнова', branch: 'Street 2' },
        { time: '19:30', name: 'Детская хореография 6+', instructor: 'Дарья Иванова', branch: 'Street 1' },
      ],
    },
    {
        day: 'Четверг',
        classes: [
          { time: '18:00', name: 'Хайхиллс', instructor: 'Екатерина Смирнова', branch: 'Street 2' },
          { time: '19:30', name: 'Детская хореография 6+', instructor: 'Дарья Иванова', branch: 'Street 1' },
        ],
      },
      {
        day: 'Пятница',
        classes: [
          { time: '18:00', name: 'Хайхиллс', instructor: 'Екатерина Смирнова', branch: 'Street 2' },
          { time: '19:30', name: 'Детская хореография 6+', instructor: 'Дарья Иванова', branch: 'Street 1' },
        ],
      },
      {
        day: 'Суббота',
        classes: [
          { time: '18:00', name: 'Хайхиллс', instructor: 'Екатерина Смирнова', branch: 'Street 2' },
          { time: '19:30', name: 'Детская хореография 6+', instructor: 'Дарья Иванова', branch: 'Street 1' },
        ],
      },
      {
        day: 'Воскресенье',
        classes: [
          { time: '18:00', name: 'Хайхиллс', instructor: 'Екатерина Смирнова', branch: 'Street 2' },
          { time: '19:30', name: 'Детская хореография 6+', instructor: 'Дарья Иванова', branch: 'Street 1' },
        ],
      },
    // Добавьте свои данные для других дней
  ];

  // Фильтрация расписания по выбранному филиалу
  const filteredSchedule = scheduleData.map((daySchedule) => ({
    ...daySchedule, // Копируем данные дня
    classes: daySchedule.classes.filter((classItem) => classItem.branch === selectedBranch), // Фильтруем занятия
  }));

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Расписание филиалов</h1>

      {/* Виджет выбора филиала */}
      <div style={styles.branchSelector}>
        <label htmlFor="branch" style={styles.label}>
          Выберите филиал:
        </label>
        <select
          id="branch"
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value)} // Обновляем выбранный филиал
          style={styles.select}
        >
          <option value="Street 1">Б.Нижегородская 77</option>
          <option value="Street 2">Гагарина 2Б</option>
          <option value="Street 3">Юбилейная 64Б</option>
          <option value="Street 4">Мира 17</option>
          <option value="Street 5">Тихонравова 8А</option>
          <option value="Street 6">Институтский Городок 20Б</option>
        </select>
      </div>

      {/* Отображение отфильтрованного расписания */}
      <div style={styles.schedule}>
        {filteredSchedule.map((daySchedule, index) => (
          <div key={index} style={styles.dayCard}>
            <h2 style={styles.dayTitle}>{daySchedule.day}</h2>
            {daySchedule.classes.length > 0 ? (
              daySchedule.classes.map((classItem, classIndex) => (
                <div key={classIndex} style={styles.classCard}>
                  <p style={styles.classTime}>{classItem.time}</p>
                  <p style={styles.className}>{classItem.name}</p>
                  <p style={styles.classInstructor}>Преподаватель: {classItem.instructor}</p>
                </div>
              ))
            ) : (
              <p style={styles.noClasses}>Занятий нет</p> // Сообщение, если занятий нет
            )}
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
    textAlign: 'center',
    marginBottom: '20px',
  },
  branchSelector: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  label: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '10px',
  },
  select: {
    padding: '10px',
    borderRadius: '25px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    width: '100%',
    maxWidth: '300px',
  },
  schedule: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  dayCard: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  dayTitle: {
    fontSize: '20px',
    color: '#007bff',
    marginBottom: '15px',
  },
  classCard: {
    padding: '10px',
    borderBottom: '1px solid #eee',
  },
  classTime: {
    fontSize: '16px',
    color: '#333',
    fontWeight: 'bold',
  },
  className: {
    fontSize: '14px',
    color: '#555',
  },
  classInstructor: {
    fontSize: '12px',
    color: '#777',
  },
  noClasses: {
    fontSize: '14px',
    color: '#777',
    textAlign: 'center',
  },
};

export default SchedulePage;