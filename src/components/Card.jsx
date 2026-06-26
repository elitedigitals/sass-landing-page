import { MdLightbulb, MdSync } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const better = [
    {
        title: "AI-Powered Project Management",
        description: "Cyberplan Ai leverages advanced AI algorithms to streamline project management, providing intelligent insights and recommendations for optimal task allocation and resource utilization.",
        icon: <MdLightbulb />
    },
    {
        title: "Real-Time Collaboration",
        description: "With Cyberplan Ai, teams can collaborate seamlessly in real-time, enabling efficient communication, task tracking, and progress updates, regardless of geographical locations.",
        icon: <FaUsers />
    },
    {
        title: "Automated Task Updates",
        description: "Cyberplan Ai automates task updates, reducing manual effort and ensuring that project stakeholders are always informed about the latest developments, deadlines, and milestones.",
        icon: <MdSync />
    }
];

export const Card = () => {
    return (
        <div className="mt-10 max-w-6xl font-serif">
            <div className="text-center mb-4">
                <h2 className="text-3xl font-bold mb-4 py-4">What makes Cyberplan Ai different?</h2>
                <p className="text-slate-300">Cyberplan Ai stands out from traditional project management tools by integrating cutting-edge <br /> AI technology to provide intelligent insights, automate routine tasks, and enhance collaboration among team members.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 rounded-lg mx-auto p-4 gap-4">
                {better.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-2 bg-purple-900/30 backdrop-blur-md rounded-lg shadow-lg shadow-purple-900/20 p-4"
                    >
                        <div className="text-4xl text-purple-500">
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="text-center mb-2 font-bold">{item.title}</h3>
                            <p className="text-center text-slate-300 text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};