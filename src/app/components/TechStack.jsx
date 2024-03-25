import React from 'react'
import ParallaxText from "./ParallaxText";

const line1 = ["HTML", "CSS", "JS", "HTML", "CSS", "JS", "HTML", "CSS", "JS", "HTML", "CSS", "JS", "HTML", "CSS", "JS", "HTML", "CSS", "JS", "HTML", "CSS", "JS", "HTML", "CSS", "JS",]
const line2 = ["Tailwind CSS", "Less", "Vue 3", "Tailwind CSS", "Less", "Vue 3", "Tailwind CSS", "Less", "Vue 3", "Tailwind CSS", "Less", "Vue 3"]
const line3 = ["React", "NextJS", "React Native", "React", "NextJS", "React Native", "React", "NextJS", "React Native", "React", "NextJS", "React Native"];

const TechStack = () => {
  return (
    <div className="relative pb-20">
      <h1 className='text-4xl mb-4 mx-auto px-16 md:px-28'>Technologies</h1>
      <ParallaxText baseVelocity={-5} list={line1} />
      <ParallaxText baseVelocity={5} list={line2} />
      <ParallaxText baseVelocity={-5} list={line3} />
    </div>)
}

export default TechStack