import React from 'react'
import ParallaxText from "./ParallaxText";

const techStack = [
  "React Native",
  "Tailwind CSS",
  "CSS",
  "NextJS",
  "Less",
  "HTML",
  "React",
  "Vue 3",
  "JS",
  "Tailwind CSS",
  "NextJS",
  "Vue 3",
  "React",
  "CSS",
  "Less",
  "Tailwind CSS",
];

const TechStack = () => {
  return (
    <div className="relative py-[15vh]">
      <h1 className='text-5xl p-10 text-sky-500'>What i use</h1>
      <ParallaxText baseVelocity={-5} list={techStack} />
      <ParallaxText baseVelocity={5} list={techStack} />
      <ParallaxText baseVelocity={-5} list={techStack} />
    </div>)
}

export default TechStack