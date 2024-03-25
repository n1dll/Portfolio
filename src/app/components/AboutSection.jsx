"use client";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center mt-20 py-20 px-4 xl:gap-16">
        <Image
          src="/images/coding.jpg"
          width={500}
          height={500}
          alt="coding"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Vue 3,
            HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
