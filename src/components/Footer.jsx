

export const Footer = () =>{
    return(
        <div className="font-serif w-full md:max-w-6xl mx-auto flex flex-col justify-center items-center mb-20">
            <h1 className="text-xl font-bold mb-4 mx-4">Subscribe to Cyberplan<span>Ai </span>today, Don't want to miss out</h1>
            <div>
                 <input className="text-white outline px-4 rounded-lg py-2 w-ful md:w-96" 
                        type="email" placeholder="Enter your email"
                        name="email"
                        
                         />
                 <button className="text-slate-300 mx-4 py-2 px-4 rounded-lg bg-purple-900 cursor-pointer" 
                    type="submit"
                    onClick={"i just subcribe"}
                    >Subscribe</button>
            </div>
           
        </div>
    )
}