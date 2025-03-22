// src/services/api.js
export const getDirections = async () => {
    // Ваш код для получения направлений
    return [{ id: 1, name: 'Направление 1' }, { id: 2, name: 'Направление 2' }];
  };
  
  export const getBranches = async () => {
    // Ваш код для получения филиалов
    return [{ id: 1, name: 'Филиал 1' }, { id: 2, name: 'Филиал 2' }];
  };
  
  export const getStudents = async () => {
    // Ваш код для получения студентов
    return [{ id: 1, name: 'Студент 1' }, { id: 2, name: 'Студент 2' }];
  };
  
  export const getTeachers = async () => {
    // Ваш код для получения преподавателей
    return [{ id: 1, name: 'Преподаватель 1' }, { id: 2, name: 'Преподаватель 2' }];
  };