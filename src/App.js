import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './mainpages/homemain/homepage';
import MainPage from './mainpages/homemain/MainPage'; // Импортируем MainPage
import SchedulePage from './schedulepage/SchedulePage';
import BookingPage from './mainpages/BookingPage';
import GalleryPage from './subscriptionpage/GalleryPage';
import ConsultationPage from './mainpages/ConsultationPage';
import GuestPage from './guestpage/GuestPage';
import AdministraionPage from './adminpage/AdministraionPage'
import EditingPage from './adminpage/editpage/EditingPage'
import ScheduleEdit from './adminpage/editpage/scheldule/ScheduleEdit'
import AbonementEdit from './adminpage/editpage/abonement/AbonementEdit'
import StudentEdit from './adminpage/editpage/student/StudentEdit'
import TeacherEdit from './adminpage/editpage/teacher/TeacherEdit'
import RecordPage from './guestpage/record/RecordPage';
import StudentPage from './studentmain/StudentPage';
import TeacherPage from './teacherpage/TeacherPage';
import ModerPage from './adminpage/moderationpage/ModerPage';
import CreateStudentPage from './adminpage/moderationpage/CreateStudentPage';
import CreateTeacherPage from './adminpage/moderationpage/CreateTeacherPage';
import DirectPage from './adminpage/moderationpage/DirectPage';
import CreateAbonement from './adminpage/moderationpage/CreateAbonement'

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
        <Route path="/guestpage" element={<GuestPage />} />
        <Route path="/adminpage" element={<AdministraionPage />} />
        <Route path="/editingpage" element={<EditingPage/>} />
        <Route path="/scheduleedit" element={<ScheduleEdit/>} />
        <Route path="/abonementedit" element={<AbonementEdit/>} />
        <Route path="/studentedit" element={<StudentEdit/>} />
        <Route path="/teacher" element={<TeacherEdit/>} />
        <Route path="/recordpage" element={<RecordPage/>} />
        <Route path='/studentpage' element={<StudentPage/>} />
        <Route path='/teacherpage' element={<TeacherPage/>} />
        <Route path='/moderpage' element={<ModerPage/>} />
        <Route path='/createstudent' element={<CreateStudentPage/>} />
        <Route path='/createteacher' element={<CreateTeacherPage/>} />
        <Route path='/directpage' element={<DirectPage/>} />
        <Route path='/createabonement' element={<CreateAbonement/>} />
      </Routes>
    </Router>
  );
}

export default App;
