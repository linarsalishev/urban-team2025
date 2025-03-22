import React, { useState } from 'react';

const StudentEdit = () => {

  // Получаем список учеников из localStorage
  const [students, setStudents] = useState(JSON.parse(localStorage.getItem('students')) || []);

  // Состояние для редактируемого ученика
  const [editingStudent, setEditingStudent] = useState(null);

  // Функция для начала редактирования
  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  // Функция для сохранения изменений
  const handleSave = (updatedStudent) => {
    const updatedStudents = students.map((student) =>
      student === editingStudent ? updatedStudent : student
    );

    setStudents(updatedStudents); // Обновляем состояние
    localStorage.setItem('students', JSON.stringify(updatedStudents)); // Обновляем localStorage
    setEditingStudent(null); // Закрываем форму редактирования
  };

  // Функция для отмены редактирования
  const handleCancel = () => {
    setEditingStudent(null);
  };

  // Функция для удаления ученика
  const handleDelete = (studentToDelete) => {
    const updatedStudents = students.filter((student) => student !== studentToDelete);
    setStudents(updatedStudents); // Обновляем состояние
    localStorage.setItem('students', JSON.stringify(updatedStudents)); // Обновляем localStorage
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Редактирование учеников</h1>
      <div style={styles.studentList}>
        {students.map((student, index) => (
          <div key={index} style={styles.studentCard}>
            {editingStudent === student ? (
              // Форма редактирования
              <EditForm
                student={student}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            ) : (
              // Отображение данных ученика
              <>
                <h2 style={styles.studentName}>
                  {student.firstName} {student.lastName}
                </h2>
                <p style={styles.studentInfo}>Дата рождения: {student.birthDate}</p>
                <p style={styles.studentInfo}>Телефон: {student.phone}</p>
                <p style={styles.studentInfo}>Почта: {student.email}</p>
                <p style={styles.studentInfo}>Telegram: {student.telegram}</p>
                <div style={styles.buttonContainer}>
                  <button onClick={() => handleEdit(student)} style={styles.editButton}>
                    Редактировать
                  </button>
                  <button onClick={() => handleDelete(student)} style={styles.deleteButton}>
                    Удалить
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Компонент для формы редактирования
const EditForm = ({ student, onSave, onCancel }) => {
  const [firstName, setFirstName] = useState(student.firstName);
  const [lastName, setLastName] = useState(student.lastName);
  const [birthDate, setBirthDate] = useState(student.birthDate);
  const [phone, setPhone] = useState(student.phone);
  const [email, setEmail] = useState(student.email);
  const [telegram, setTelegram] = useState(student.telegram);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...student,
      firstName,
      lastName,
      birthDate,
      phone,
      email,
      telegram,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.editForm}>
      <input
        type="text"
        placeholder="Имя"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Фамилия"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={styles.input}
      />
      <input
        type="date"
        placeholder="Дата рождения"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        style={styles.input}
      />
      <input
        type="tel"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={styles.input}
      />
      <input
        type="email"
        placeholder="Почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Имя в Telegram"
        value={telegram}
        onChange={(e) => setTelegram(e.target.value)}
        style={styles.input}
      />
      <div style={styles.buttonContainer}>
        <button type="submit" style={styles.saveButton}>
          Сохранить
        </button>
        <button type="button" onClick={onCancel} style={styles.cancelButton}>
          Отмена
        </button>
      </div>
    </form>
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
  buttonContainer: {
    display: 'flex',
    gap: '10px',
  },
  editButton: {
    padding: '10px 20px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '14px',
    color: 'white',
    background: 'linear-gradient(45deg, #007bff, #00bfff)',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.2s ease',
  },
  deleteButton: {
    padding: '10px 20px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '14px',
    color: 'white',
    background: 'linear-gradient(45deg, #dc3545, #ff6b6b)',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.2s ease',
  },
  editForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '25px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
  },
  saveButton: {
    padding: '10px 20px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '14px',
    color: 'white',
    background: 'linear-gradient(45deg, #28a745, #20c997)',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.2s ease',
  },
  cancelButton: {
    padding: '10px 20px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '14px',
    color: 'white',
    background: 'linear-gradient(45deg, #dc3545, #ff6b6b)',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.2s ease',
  },
};

export default StudentEdit;