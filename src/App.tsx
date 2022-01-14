import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [state, setStatus] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setStatus((state) => !state)}>
            {state ? 'Жмякни сюда еще раз' : 'Жмякни сюда'}
          </button>
        </p>
        <p>
          {state ? 'Извиняюсь за задержку' : ''}
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
