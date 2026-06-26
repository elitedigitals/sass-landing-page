

import { BrowserRouter } from 'react-router-dom'
import { Hero } from './components/Hero.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Service } from './components/Service.jsx'
import {Pricing} from './components/Pricing.jsx'
import './index.css'
import { Card } from './components/Card.jsx'
function App() {

  return (
    
    <div className='flex flex-col items-center  w-full  bg-linear-to-r from-[#1c023f] to-[#000000] text-white'>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Card />
        <Service />
        <Pricing />
      </BrowserRouter>
    </div>
     
   
    
  )
}

export default App
