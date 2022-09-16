import { Link, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Create from './components/Create';
import ViewOne from './components/ViewOne';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main - all Notes */}
        <Route path='/pirates' element={<Main />} />

        {/* Create */}
        <Route path='/pirates/new' element={<Create />} />

        {/* View one */}
        <Route path='/pirates/:id' element={<ViewOne />} />

        {/* Redirect */}
        <Route path='*' element={<Navigate to="/pirates" replace />} />
      </Routes>
    </div>
  );
}

export default App;
