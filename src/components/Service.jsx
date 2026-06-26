import {} from "react-icons";
import { MdLightbulb, MdOutlineLight, } from "react-icons/md";
import { GoLink } from "react-icons/go";

export const Service = () => {
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
  return (
    <div className="pt-10 mt-10 px-4 font-serif">
        <div>
            <h2 className="text-center  font-serif py-3 mb-5">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 p-5">
            {
                services.map((service, index)=>(
                    <div key={index} className="bg-purple-900/30 gap-2 p-6 m-6"> 
                        <div className="flex justify-between mb-3">
                            <div>{service.icon}</div>
                            <div>
                                <a href={service.link} className="hover:bg-slate-300 hover:text-purple-300"><GoLink /></a>
                            </div>
                        </div>
                        <div>
                           <h2 className="text-xl font-bold">{service.title}</h2> 
                           <p className="text-slate-300 text-sm">{service.description}</p>

                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
