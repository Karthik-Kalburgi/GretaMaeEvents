import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import { BrowserRouter as Router,Routes , Route } from 'react-router-dom'
import About from './Components/About'
import MyPortfolio from './Components/MyPortfolio'
import Testimonial from './Components/Testimonial'
import Contact from './Components/Contact'
import Home from './Components/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Router>
      <Navbar />
      <Card />
     
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/myportfolio' element={<MyPortfolio/>} />
        <Route path='/testimonial' element={<Testimonial/>} />
        <Route path='/contact' element={<Contact/>} />

        
      </Routes>
    </Router>
 
   </>
  )
}

export default App
