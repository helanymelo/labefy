import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RouteApp from './routes/RouteApp'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return(
    <div>
    <ToastContainer autoClose={3000}/>
      <RouteApp/>
      
    </div>
  )
}

export default App
