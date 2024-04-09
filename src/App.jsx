import Dragon from './pages/Dragon'
import Knight from './pages/Knight'
import Navbar from './Components/Navbar'
import {Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dragon/>} />
        <Route path='/knight' element={<Knight/>}/>
      </Routes>
    </>
  )
}

export default App
