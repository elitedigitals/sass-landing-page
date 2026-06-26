import {Link} from "react-router-dom"
import { MdLightbulb, MdOutlineLight, } from "react-icons/md";
import { GoLink } from "react-icons/go";


   const services = [
        {
            title: "AI-Powered Project Management",
            description: "Cyberplan Ai leverages advanced AI algorithms to streamline project management, providing intelligent insights and recommendations for optimal task allocation and resource utilization.",
            icon: <MdLightbulb />,
            link:"/service"
        },
        {
            title: "Ai Task Automation",
            description:"Cyberplan Ai leverages advanced AI algorithms to streamline project management, providing intelligent insights and recommendations for optimal task allocation and resource utilization.",
            icon: <MdOutlineLight />,
            link: "/service"
        },
        {
            title: "Smart Scheduling",
            description:"Cyberplan Ai leverages advanced AI algorithms to streamline project management, providing intelligent insights and recommendations for optimal task allocation and resource utilization",
            icon: <MdOutlineLight />,
            link: "/service"
        },
        {
            title: "AI-Powered Project Management",
            description: "Cyberplan Ai leverages advanced AI algorithms to streamline project management, providing intelligent insights and recommendations for optimal task allocation and resource utilization.",
            icon: <MdLightbulb />,
            link: "/service"
        },
    ];
export const Service = () => {
 
  return (
    <div className="pt-10 mt-10 font-serif w-full sm:max-w-6xl mx-auto">
        <div>
            <h2 className="text-center font-serif py-3 mb-5 text-4xl font-bold">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
            {
                services.map((service, index)=>(
                    <div key={index} className="bg-purple-900/30  p-4 gap-2 m-4 rounded-lg shadow-lg shadow-purple-900/30"> 
                        <div className="flex justify-between mb-3">
                            <div>{service.icon}</div>
                            <div>
                                <Link to={service.link} className="hover:bg-slate-300 hover:text-purple-300"><GoLink /></Link>
                            </div>
                        </div>
                        <div>
                           <h2 className="text-xl font-bold pb-4">{service.title}</h2> 
                           <p className="text-slate-300 text-sm">{service.description}</p>

                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
