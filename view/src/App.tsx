import { Navigate, Route, Routes } from 'react-router-dom';
import './index.css';

import { Home } from './views/Home';
import { CreateEvent } from './views/CreateEvent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<CreateEvent />} />
      {/* <Route path="/edit" element={<EditEvent />} /> */}
      {/* Added to navigate user to home on case of any wrong path */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
