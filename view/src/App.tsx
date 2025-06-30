// src/main.tsx ou App.tsx
import './index.css';

import { Card } from './components/Card'
import { NavBar } from './components/NavBar'
import { Home } from './views/Home';

function App() {

  return (
    <>
      <NavBar />
      <div className='flex items-center justify-center w-screen bg-gray-300 h-screen'>
        <div className="w-[80%] h-[80%]">
          <Card>
            <Home />
            {/* <h1 className="text-red-500">Hello world</h1> */}
          </Card>
        </div>
      </div>
    </>
  )
}

export default App
