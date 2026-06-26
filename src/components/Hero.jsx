import { Aibetter } from "./Aibetter"
import { Button } from "./Button"
export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10 w-[80%] font-serif">
       <h2 className="text-4xl text-center font-bold">Manage Your Project 
        <br /> Effortlessly with<span className="text-purple-800"> Cyberplan Ai</span>
         </h2>
       <div>
          <p>Stay ahead of deadlines, automate task updates, and let AI turn chaos into clarity.</p>
          <p>CyberPlan AI helps your team focus on what matters delivering great results faster.</p>
        </div>
        <Button 
        onClick={() => console.log("Get Started clicked")} 
        className={`bg-purple-900 text-slate-300 hover:bg-slate-300 hover:text-purple-900 px-5 py-2 rounded-lg transition duration-300 ease-in-out`}
        label={"Get Started"}/>
        <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row sm:h-[60%] w-full">
          <img src="./landing.jpg" alt="landing" className="sm:w-[100%] sm:h-[100%] w-full h-full rounded-lg shadow-lg shadow-purple-900/20"/>
        </div>
        <div>
          <Aibetter />
        </div>
    </div>
  )
}
