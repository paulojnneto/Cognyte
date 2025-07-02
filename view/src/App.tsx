import { Navigate, Route, Routes } from 'react-router-dom';
import './index.css';

import { Home } from './views/Home';
import { CreateEvent } from './views/CreateEvent';
import { EditEvent } from './views/EditEvent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<CreateEvent />} />
      <Route path="/edit/:id" element={<EditEvent />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
