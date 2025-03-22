import React, { useState } from 'react';

const RecordPage = () => {
  const branches = [
    {
      id: 1,
      name: 'Б.Нижегородская 77',
      description: 'Современный зал с профессиональным оборудованием.',
    },
    {
      id: 2,
      name: 'Гагарина 2Б',
      description: 'Уютный зал в центре города.',
    },
    {
      id: 3,
      name: 'Юбилейная 64Б',
      description: 'Просторный зал для групповых занятий.',
    },
  ];

  // Данные о преподавателях
  const instructors = [
    {
      id: 1,
      name: 'Иван Иванов',
      avatar: 'https://via.placeholder.com/100', // Аватарка преподавателя
      description: 'Специалист по хип-хопу и брейк-дансу.',
      branchId: 1, // ID филиала, к которому привязан преподаватель
    },
    {
      id: 2,
      name: 'Анна Петрова',
      avatar: 'https://via.placeholder.com/100',
      description: 'Преподаватель по герли хип-хопу.',
      branchId: 1,
    },
    {
      id: 3,
      name: 'Мария Сидорова',
      avatar: 'https://via.placeholder.com/100',
      description: 'Эксперт по K-Pop и современным танцам.',
      branchId: 2,
    },
    {
      id: 4,
      name: 'Ольга Кузнецова',
      avatar: 'https://via.placeholder.com/100',
      description: 'Преподаватель по фрейм-ап стрипу.',
      branchId: 3,
    },
  ];

  // Состояния для выбранного филиала и преподавателя
  const [selectedBranch, setSelectedBranch] = useState(branches[0]); // По умолчанию первый филиал
  const [selectedInstructor, setSelectedInstructor] = useState(instructors[0]); // По умолчанию первый преподаватель

  // Функция для изменения филиала
  const handleBranchChange = (direction) => {
    const currentIndex = branches.findIndex((branch) => branch.id === selectedBranch.id);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % branches.length; // Переход к следующему филиалу
    } else {
      newIndex = (currentIndex - 1 + branches.length) % branches.length; // Переход к предыдущему филиалу
    }

    setSelectedBranch(branches[newIndex]);

    // Обновляем преподавателя в зависимости от выбранного филиала
    const filteredInstructors = instructors.filter((instructor) => instructor.branchId === branches[newIndex].id);
    setSelectedInstructor(filteredInstructors[0] || null);
  };

  // Функция для изменения преподавателя
  const handleInstructorChange = (direction) => {
    const filteredInstructors = instructors.filter((instructor) => instructor.branchId === selectedBranch.id);
    const currentIndex = filteredInstructors.findIndex((instructor) => instructor.id === selectedInstructor.id);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredInstructors.length; // Переход к следующему преподавателю
    } else {
      newIndex = (currentIndex - 1 + filteredInstructors.length) % filteredInstructors.length; // Переход к предыдущему преподавателю
    }

    setSelectedInstructor(filteredInstructors[newIndex]);
  };

  return (
    <div style={styles.container}>
      {/* Модульное окно выбора филиала */}
      <div style={styles.branchContainer}>
        <h2 style={styles.sectionTitle}>Выберите филиал</h2>
        <div style={styles.selector}>
          <button onClick={() => handleBranchChange('prev')} style={styles.arrowButton}>
            ◀️
          </button>
          <p style={styles.selectedItem}>{selectedBranch.name}</p>
          <button onClick={() => handleBranchChange('next')} style={styles.arrowButton}>
            ▶️
          </button>
        </div>
        <p style={styles.description}>{selectedBranch.description}</p>
      </div>

      {/* Модульное окно выбора преподавателя */}
      <div style={styles.instructorContainer}>
        <h2 style={styles.sectionTitle}>Выберите преподавателя</h2>
        <div style={styles.selector}>
          <button onClick={() => handleInstructorChange('prev')} style={styles.arrowButton}>
            ◀️
          </button>
          <div style={styles.instructorInfo}>
            <img src={selectedInstructor.avatar} alt={selectedInstructor.name} style={styles.avatar} />
            <p style={styles.selectedItem}>{selectedInstructor.name}</p>
          </div>
          <button onClick={() => handleInstructorChange('next')} style={styles.arrowButton}>
            ▶️
          </button>
        </div>
        <p style={styles.description}>{selectedInstructor.description}</p>
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
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
  },
  branchContainer: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
    textAlign: 'center',
  },
  instructorContainer: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '20px',
    color: '#333',
    marginBottom: '15px',
  },
  selector: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '15px',
  },
  arrowButton: {
    padding: '10px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
  selectedItem: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  instructorInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
  description: {
    fontSize: '14px',
    color: '#555',
  },
};

export default RecordPage; 