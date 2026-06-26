import { Button } from "./Button";

export const Pricing = () =>{

    return(
        <div className="grid grid-cols-1 w-full md:grid-cols-2 md:max-w-6xl mx-auto  font-serif mt-20 mb-30">
            <div className="pb-5 mx-4">
                <h2 className=" text-2xl font-bold pb-3"> One Plan <br /> Everything Included</h2>
                <p className="pb-3">Use for free, no hidden charges</p>
                <Button 
                className={`bg-purple-900 rounded-lg py-2 px-5 hover:bg-slate-300 hover:text-purple-900 cursor-pointer`}
                onClick={"i got clicked"}
                label={"For Agency"}
                />
            </div>
            <div className="bg-purple-900/10 p-4 shadow-lg shadow-purple-900/10">
                <h2 className="text-2xl font-bold">Free</h2>
                <p className="mb-3">For 7 days</p>
                <button className="mb-3 bg-purple-900 rounded-lg py-2 px-5 hover:bg-slate-300 hover:text-purple-900 cursor-pointer">Get started for free</button>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
               
            </div>
        </div>
    )
};