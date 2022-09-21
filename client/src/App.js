import { Link, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import MainAdmin from './components/MainAdmin';
import Create from './components/Create';
import ViewOne from './components/ViewOne';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main - all Notes */}
        <Route path='/' element={<Home />} />

        {/* Main - all Notes */}
        <Route path='/contact' element={<Contact />} />

        {/* Main - all Notes */}
        <Route path='/allfruits' element={<Main />} />

        {/* View one */}
        <Route path='/fruits/:id' element={<ViewOne />} />

        {/* Redirect */}
        <Route path='*' element={<Navigate to="/" />} />
      {/* ===================================================================== */}
        {/* Admin Main - all Notes */}
        <Route path='/admin' element={<MainAdmin />} />

        {/* Create */}
        <Route path='/admin/new' element={<Create />} />
      
      
      </Routes>
    </div>
  );
}

export default App;
