import  { useState } from "react"
import {menuItems} from "../assets/menuItems.js"
import {Button} from "./Button.jsx"
import {MdMenu, MdOutlineCancelPresentation} from "react-icons/md"

export const Navbar = () => {
    const [isopen, setIsOpen] = useState(false)
    
  return (
    <>
    <div className="bg-black/30 w-[85%] font-serif backdrop-blur-md rounded-lg shadow-lg shadow-purple-900/20 z-50">
        {/* navbar contents */}
        <div className=" flex justify-between items-center px-4 py-2">
            {/* logo contents */}
            <div>
                <h1>Cyberplan
                    <span className="text-purple-500">Ai</span>
                </h1>
            </div>
            {/* menu contents */}
            <div className="hidden md:flex gap-2">
            {
                menuItems.map((item, index) => (
                    <a key={index} href={item.link} className="px-4 py-2 text-white hover:bg-purple-900">{item.label}</a>
                ))
            }
            </div>
            {/* button contents */}
            <div className="hidden sm:flex gap-4">
                <div>
                    <Button label="SignIn" onClick={() => console.log("Sign Up clicked")} className="px-5 py-1 text-slate-300 hover:bg-purple-900 rounded-lg"/>
                </div>
                <div>
                    <Button label="Register" onClick={() => console.log("Sign Up clicked")} className="px-5 py-1 bg-purple-900 text-slate-300 hover:bg-slate-300 hover:text-purple-900 rounded-lg" />
                </div>  
            </div>
            {/* mobile menu button */}
            <div className="sm:hidden flex justify-end px-4 ">
                <Button label={isopen ? <MdOutlineCancelPresentation /> : <MdMenu />} onClick={() => setIsOpen(!isopen)} className="px-5 py-1 bg-purple-900 text-slate-300 hover:bg-slate-300 hover:text-purple-900 rounded-lg transition duration-300 ease-in-out"/>
            </div>
        </div>
            
         
            {/* mobile menu contents */}
            {isopen && (
                <div className="sm:hidden flex flex-col gap-2 px-4 py-2 transition duration-300 ease-in-out ">
                    {menuItems.map((item, index) => (
                        <a key={index} href={item.link} className="px-4 py-2 text-white hover:bg-blue-700">
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
    </div>       
    </>
  )
}
