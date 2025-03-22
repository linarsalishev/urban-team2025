import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '10px',
    display: 'block',
  },
  select: {
    width: '100%',
    padding: '10px',
    borderRadius: '25px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    backgroundColor: 'white',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '14px',
    color: 'white',
    background: 'linear-gradient(45deg, #007bff, #00bfff)',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.2s ease',
    marginTop: '20px',
  },
  buttonHover: {
    background: 'linear-gradient(45deg, #0056b3, #0099cc)',
    transform: 'scale(1.05)',
  },
};

const CreateAbonement = () => {
  const [directions, setDirections] = useState([]);
  const [branches, setBranches] = useState([]);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [selectedDirection, setSelectedDirection] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Загружаем направления и филиалы из localStorage
    const storedDirections = JSON.parse(localStorage.getItem('danceDirections')) || [];
    const storedBranches = JSON.parse(localStorage.getItem('branches')) || [];
    setDirections(storedDirections);
    setBranches(storedBranches);

    // Загружаем студентов из localStorage
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);

    // Загружаем преподавателей из localStorage
    const storedTeachers = JSON.parse(localStorage.getItem('teachers')) || [];
    setTeachers(storedTeachers);
  }, []);

  const handleCreateAbonement = () => {
    // Логика создания абонемента
    const abonementData = {
      direction: selectedDirection,
      branch: selectedBranch,
      student: selectedStudent,
      teacher: selectedTeacher,
    };



    // Отправляем данные на сервер или сохраняем в состоянии
    console.log('Abonement Data:', abonementData);

    // Перенаправляем пользователя на другую страницу после создания
    navigate('/abonements');
  };

  const handleBack = () => {
    navigate('/moderpage');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Создание абонемента</h1>

      <div style={styles.formGroup}>
        <label style={styles.label}>Направление:</label>
        <select
          style={styles.select}
          value={selectedDirection}
          onChange={(e) => setSelectedDirection(e.target.value)}
        >
          <option value="">Выберите направление</option>
          {directions.map(dir => (
            <option key={dir.id} value={dir.id}>{dir.name}</option>
          ))}
        </select>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Филиал:</label>
        <select
          style={styles.select}
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value)}
        >
          <option value="">Выберите филиал</option>
          {branches.map(branch => (
            <option key={branch.id} value={branch.id}>{branch.name}</option>
          ))}
        </select>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Студент:</label>
        <select
          style={styles.select}
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
        >
          <option value="">Выберите студента</option>
          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.firstName} {student.lastName}
            </option>
          ))}
        </select>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Преподаватель:</label>
        <select
          style={styles.select}
          value={selectedTeacher}
          onChange={(e) => setSelectedTeacher(e.target.value)}
        >
          <option value="">Выберите преподавателя</option>
          {teachers.map((teacher) => (
            <option key={teacher.id} value={teacher.id}>
              {teacher.firstName} {teacher.lastName}
            </option>
          ))}
        </select>
      </div>

      <button
        style={styles.button}
        onMouseEnter={(e) => (e.target.style = { ...styles.button, ...styles.buttonHover })}
        onMouseLeave={(e) => (e.target.style = styles.button)}
        onClick={handleCreateAbonement}
      >
        Создать абонемент
      </button>
      <button
          type="button"
          onClick={handleBack}
          style={{ ...styles.button, background: 'linear-gradient(45deg, #6c757d, #5a6268)' }}
        >
          Назад
        </button>
    </div>
  );
};

export default CreateAbonement;