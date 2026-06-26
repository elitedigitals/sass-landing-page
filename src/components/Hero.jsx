import { Button } from "./Button"

export const Hero = () => {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 pt-10 font-serif sm:px-6">
      <h2 className="text-center text-4xl font-bold">
        Manage Your Project
        <br /> Effortlessly with<span className="text-purple-800"> Cyberplan Ai</span>
      </h2>

      <div className="text-center">
        <p>Stay ahead of deadlines, automate task updates, and let AI turn chaos into clarity.</p>
        <p>CyberPlan AI helps your team focus on what matters delivering great results faster.</p>
      </div>

      <Button
        onClick={() => console.log("Get Started clicked")}
        className="mt-4 rounded-lg bg-purple-900 px-10 py-4 text-slate-300 transition-all duration-700 ease-in-out hover:bg-slate-300 hover:text-purple-900 hover:-translate-y-0.5"
        label="Get Started"
      />

      <img
        src="./landing.jpg"
        alt="landing"
        className="mt-10 aspect-ratio: 16/9; w-full rounded-lg object-cover shadow-lg shadow-purple-900/20 sm:aspect-[16/9]"
      />
    </section>
  )
}