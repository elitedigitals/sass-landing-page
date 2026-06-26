
import { Hero } from './components/Hero.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Service } from './components/Service.jsx'
import './index.css'
function App() {

  return (
    
    <div className='flex flex-col items-center  w-full  bg-linear-to-r from-[#1c023f] to-[#000000] text-white'>
      <Navbar />
      <Hero />
      <Service />
    </div>
     
   
    
  )
}

export default App
