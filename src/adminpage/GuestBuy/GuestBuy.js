import React, { useState } from 'react';

const GuestBuy = () => {
  const [records, setRecords] = useState(JSON.parse(localStorage.getItem('records')) || []);
  const anonsList = JSON.parse(localStorage.getItem('anons')) || [];

  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statuses = [
    { id: 1, title: 'Записался', color: '#f0f0f0' },
    { id: 2, title: 'Оплатил', color: '#fff3cd' },
    { id: 3, title: 'Пришел', color: '#d4edda' },
  ];

  const handleStatusChange = (newStatus) => {
    const updatedRecords = records.map((record) => {
      if (record.id === selectedRecord.id) {
        return { ...record, status: newStatus };
      }
      return record;
    });
    localStorage.setItem('records', JSON.stringify(updatedRecords));
    setRecords(updatedRecords);
    setIsModalOpen(false);
  };

  const handleSave = (comment, amount) => {
    const updatedRecords = records.map((record) => {
      if (record.id === selectedRecord.id) {
        return { ...record, comment, amount: parseFloat(amount) || 0 };
      }
      return record;
    });
    localStorage.setItem('records', JSON.stringify(updatedRecords));
    setRecords(updatedRecords);
    setIsModalOpen(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Воронка продаж (Гости)</h1>

      <div style={styles.funnel}>
        {statuses.map((status) => (
          <div key={status.id} style={styles.column}>
            <h3 style={styles.columnTitle}>{status.title}</h3>
            {records
              .filter((record) => record.status === status.title)
              .map((record) => {
                const anons = anonsList.find((a) => a.id === parseInt(record.anonsId));
                return (
                  <div
                    key={record.id}
                    style={{ ...styles.card, backgroundColor: status.color }}
                    onClick={() => {
                      setSelectedRecord(record);
                      setIsModalOpen(true);
                    }}
                  >
                    <h4>{record.firstName} {record.lastName}</h4>
                    <p>Мероприятие: {anons?.title || 'Неизвестно'}</p>
                    <p>Телефон: {record.phone}</p>
                    <p>Telegram: {record.telegram}</p>
                    <div style={styles.amount}>
                      Сумма: {record.amount || '0'} ₽
                    </div>
                  </div>
                );
              })}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h3>Редактирование</h3>
            <select
              value={selectedRecord.status}
              onChange={(e) => handleStatusChange(e.target.value)}
              style={styles.select}
            >
              {statuses.map((status) => (
                <option key={status.title} value={status.title}>
                  {status.title}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Сумма оплаты"
              value={selectedRecord.amount || ''}
              onChange={(e) =>
                setSelectedRecord({ ...selectedRecord, amount: e.target.value })
              }
              style={styles.input}
            />
            <textarea
              placeholder="Комментарий"
              value={selectedRecord.comment || ''}
              onChange={(e) =>
                setSelectedRecord({ ...selectedRecord, comment: e.target.value })
              }
              style={styles.textarea}
            />
            <button
              onClick={() => handleSave(selectedRecord.comment, selectedRecord.amount)}
              style={styles.saveButton}
            >
              Сохранить
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Стили
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
  funnel: {
    display: 'flex',
    gap: '20px',
    overflowX: 'auto',
  },
  column: {
    minWidth: '300px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  columnTitle: {
    textAlign: 'center',
    marginBottom: '15px',
  },
  card: {
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '10px',
    cursor: 'pointer',
  },
  amount: {
    marginTop: '10px',
    fontWeight: 'bold',
    color: '#28a745',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    width: '400px',
  },
  select: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    height: '100px',
  },
  saveButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default GuestBuy;