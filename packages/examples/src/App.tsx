/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-05-07 17:20:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-08 02:29:18
 */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Button from '../../components/src/Button'
import Button from '@pink-ui/components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button>my Pink Button</Button>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
