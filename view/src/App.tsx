// src/main.tsx ou App.tsx
import './index.css';

import { Card } from './components/Card'
import { NavBar } from './components/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <Card>
        <h1 className="text-red-500">Hello world</h1>
      </Card>
    </>
  )
}

export default App
