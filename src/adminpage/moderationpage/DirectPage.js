import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

const DirectPage = () => {
  const navigate = useNavigate(); // Используем useNavigate для навигации

  // Состояния для направлений и филиалов
  const [danceDirection, setDanceDirection] = useState('');
  const [branch, setBranch] = useState('');

  // Получаем данные из localStorage или создаём пустые массивы
  const [danceDirections, setDanceDirections] = useState(
    JSON.parse(localStorage.getItem('danceDirections')) || []
  );
  const [branches, setBranches] = useState(
    JSON.parse(localStorage.getItem('branches')) || []
  );

  // Состояния для редактируемых элементов
  const [editingDirection, setEditingDirection] = useState(null);
  const [editingBranch, setEditingBranch] = useState(null);

  // Функция для добавления направления танца
  const handleAddDanceDirection = (e) => {
    e.preventDefault();
    if (danceDirection.trim() === '') return; // Проверка на пустое значение

    const newDirection = {
      id: Date.now(), // Уникальный ID
      name: danceDirection,
    };

    const updatedDirections = [...danceDirections, newDirection];
    setDanceDirections(updatedDirections); // Обновляем состояние
    localStorage.setItem('danceDirections', JSON.stringify(updatedDirections)); // Сохраняем в localStorage
    setDanceDirection(''); // Очищаем поле ввода
  };

  // Функция для добавления филиала
  const handleAddBranch = (e) => {
    e.preventDefault();
    if (branch.trim() === '') return; // Проверка на пустое значение

    const newBranch = {
      id: Date.now(), // Уникальный ID
      name: branch,
    };

    const updatedBranches = [...branches, newBranch];
    setBranches(updatedBranches); // Обновляем состояние
    localStorage.setItem('branches', JSON.stringify(updatedBranches)); // Сохраняем в localStorage
    setBranch(''); // Очищаем поле ввода
  };

  // Функция для удаления направления танца
  const handleDeleteDirection = (directionToDelete) => {
    const updatedDirections = danceDirections.filter(
      (direction) => direction.id !== directionToDelete.id
    );
    setDanceDirections(updatedDirections); // Обновляем состояние
    localStorage.setItem('danceDirections', JSON.stringify(updatedDirections)); // Сохраняем в localStorage
  };

  // Функция для удаления филиала
  const handleDeleteBranch = (branchToDelete) => {
    const updatedBranches = branches.filter((branch) => branch.id !== branchToDelete.id);
    setBranches(updatedBranches); // Обновляем состояние
    localStorage.setItem('branches', JSON.stringify(updatedBranches)); // Сохраняем в localStorage
  };

  // Функция для редактирования направления танца
  const handleEditDirection = (direction) => {
    setEditingDirection(direction);
  };

  // Функция для редактирования филиала
  const handleEditBranch = (branch) => {
    setEditingBranch(branch);
  };

  // Функция для сохранения изменений направления танца
  const handleSaveDirection = (updatedDirection) => {
    const updatedDirections = danceDirections.map((direction) =>
      direction.id === updatedDirection.id ? updatedDirection : direction
    );
    setDanceDirections(updatedDirections); // Обновляем состояние
    localStorage.setItem('danceDirections', JSON.stringify(updatedDirections)); // Сохраняем в localStorage
    setEditingDirection(null); // Закрываем форму редактирования
  };

  // Функция для сохранения изменений филиала
  const handleSaveBranch = (updatedBranch) => {
    const updatedBranches = branches.map((branch) =>
      branch.id === updatedBranch.id ? updatedBranch : branch
    );
    setBranches(updatedBranches); // Обновляем состояние
    localStorage.setItem('branches', JSON.stringify(updatedBranches)); // Сохраняем в localStorage
    setEditingBranch(null); // Закрываем форму редактирования
  };

  // Функция для отмены редактирования
  const handleCancelEdit = () => {
    setEditingDirection(null);
    setEditingBranch(null);
  };

  // Функция для возврата на страницу /moderpage
  const handleBack = () => {
    navigate('/moderpage');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Управление направлениями и филиалами</h1>

      {/* Кнопка "Назад" */}
      <button
        onClick={handleBack}
        style={{ ...styles.button, background: 'linear-gradient(45deg, #6c757d, #5a6268)', marginBottom: '20px' }}
      >
        Назад
      </button>

      {/* Форма для добавления направления танца */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Добавить направление танца</h2>
        <form onSubmit={handleAddDanceDirection} style={styles.form}>
          <input
            type="text"
            placeholder="Название направления"
            value={danceDirection}
            onChange={(e) => setDanceDirection(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Добавить
          </button>
        </form>
        
        <div style={styles.list}>
          {danceDirections.map((direction) =>
            editingDirection?.id === direction.id ? (
              // Форма редактирования направления
              <EditForm
                key={direction.id}
                item={direction}
                onSave={handleSaveDirection}
                onCancel={handleCancelEdit}
              />
            ) : (
              // Отображение направления с кнопками
              <div key={direction.id} style={styles.listItem}>
                {direction.name}
                <div style={styles.buttonContainer}>
                  <button onClick={() => handleEditDirection(direction)} style={styles.editButton}>
                    Редактировать
                  </button>
                  <button onClick={() => handleDeleteDirection(direction)} style={styles.deleteButton}>
                    Удалить
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Форма для добавления филиала */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Добавить филиал</h2>
        <form onSubmit={handleAddBranch} style={styles.form}>
          <input
            type="text"
            placeholder="Название филиала"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Добавить
          </button>
        </form>
        <div style={styles.list}>
          {branches.map((branch) =>
            editingBranch?.id === branch.id ? (
              // Форма редактирования филиала
              <EditForm
                key={branch.id}
                item={branch}
                onSave={handleSaveBranch}
                onCancel={handleCancelEdit}
              />
            ) : (
              // Отображение филиала с кнопками
              <div key={branch.id} style={styles.listItem}>
                {branch.name}
                <div style={styles.buttonContainer}>
                  <button onClick={() => handleEditBranch(branch)} style={styles.editButton}>
                    Редактировать
                  </button>
                  <button onClick={() => handleDeleteBranch(branch)} style={styles.deleteButton}>
                    Удалить
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

// Компонент для формы редактирования (универсальный для направлений и филиалов)
const EditForm = ({ item, onSave, onCancel }) => {
  const [name, setName] = useState(item.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...item, name });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.editForm}>
      <input
        type="text"
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
  section: {
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '20px',
    color: '#007bff',
    marginBottom: '15px',
  },
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px',
  },
  input: {
    padding: '10px',
    borderRadius: '25px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    flex: 1,
  },
  button: {
    padding: '10px 20px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '16px',
    color: 'white',
    background: 'linear-gradient(45deg, #007bff, #00bfff)',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.2s ease',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  listItem: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
  },
  editButton: {
    padding: '5px 10px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '14px',
    color: 'white',
    background: 'linear-gradient(45deg, #28a745, #20c997)',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.2s ease',
  },
  deleteButton: {
    padding: '5px 10px',
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
  saveButton: {
    padding: '5px 10px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '14px',
    color: 'white',
    background: 'linear-gradient(45deg, #28a745, #20c997)',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.2s ease',
  },
  cancelButton: {
    padding: '5px 10px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '14px',
    color: 'white',
    background: 'linear-gradient(45deg, #dc3545, #ff6b6b)',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.2s ease',
  },
};

export default DirectPage;