import { Link } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { MdLightbulb, MdOutlineLight } from "react-icons/md"
import { GoLink } from "react-icons/go"
import { staggerContainer, staggerItem, stackCardTransform } from "../lib/motion"

const services = [
  {
    title: "AI-Powered Project Management",
    description: "Cyberplan Ai leverages advanced AI algorithms to streamline project management, providing intelligent insights and recommendations for optimal task allocation and resource utilization.",
    icon: <MdLightbulb />,
    link: "/service",
  },
  {
    title: "Ai Task Automation",
    description: "Cyberplan Ai leverages advanced AI algorithms to streamline project management, providing intelligent insights and recommendations for optimal task allocation and resource utilization.",
    icon: <MdOutlineLight />,
    link: "/service",
  },
  {
    title: "Smart Scheduling",
    description: "Cyberplan Ai leverages advanced AI algorithms to streamline project management, providing intelligent insights and recommendations for optimal task allocation and resource utilization",
    icon: <MdOutlineLight />,
    link: "/service",
  },
  {
    title: "AI-Powered Project Management",
    description: "Cyberplan Ai leverages advanced AI algorithms to streamline project management, providing intelligent insights and recommendations for optimal task allocation and resource utilization.",
    icon: <MdLightbulb />,
    link: "/service",
  },
]

const ServiceCard = ({ service, index, total }) => {
  const cardRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["center center", "center start"],
  })

  const { scale, opacity } = stackCardTransform(index, total)

  const scaleValue = useTransform(scrollYProgress, [0, 1], scale)
  const opacityValue = useTransform(scrollYProgress, [0, 1], opacity)

  return (
    <motion.div
      ref={cardRef}
      variants={staggerItem}
      style={{
        top: `${95 + index * 24}px`,
        zIndex: index + 1,
        scale: scaleValue,
        opacity: opacityValue,
      }}
      className="sticky sm:static bg-purple-900 p-4 m-4 rounded-lg shadow-lg shadow-purple-900/30 "
    >
      <div className="flex justify-between mb-3">
        <div>{service.icon}</div>
        <div>
          <Link to={service.link} className="hover:bg-slate-300 hover:text-purple-300">
            <GoLink />
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold pb-4">{service.title}</h2>
        <p className="text-slate-300 text-sm">{service.description}</p>
      </div>
    </motion.div>
  )
}

export const Service = () => {
  return (
    <div className="pt-10 mt-10 font-serif w-full sm:max-w-6xl mx-auto">
      <h2 className="sticky top-0 z-50 text-center font-serif py-3 mb-5 text-4xl font-bold">
        Our Services
      </h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer()}
        className="flex flex-col sm:grid mb-30 sm:grid-cols-2 gap-2"
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            index={index}
            total={services.length}
          />
        ))}
      </motion.div>
    </div>
  )
}