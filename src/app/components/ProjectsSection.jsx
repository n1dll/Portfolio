"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "globalbeauty.bg",
    description: "cosmetic catalogue",
    image: "/images/projects/gb.png",
    tag: ["All", "Web"],
    previewUrl: "https://globalbeauty.bg/",
  },
  {
    id: 2,
    title: "vitaceptin.bg",
    description: "pharmacy product",
    image: "/images/projects/vitaceptin.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.vitaceptin.bg/",
  },
  {
    id: 3,
    title: "magellan.bg",
    description: "online showroom",
    image: "/images/projects/magellan.png",
    tag: ["All", "Web"],
    previewUrl: "https://magellan.bg/",
  },
  {
    id: 4,
    title: "admin dashboard",
    description: "next.js app",
    image: "/images/projects/dashboard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/n1dll/nextadmin",
  },
  {
    id: 5,
    title: "admin dashboard",
    description: "next.js app",
    image: "/images/projects/dashboard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/n1dll/nextadmin",
  },
  {
    id: 6,
    title: "e-bike app",
    description: "mobile app using expo",
    image: "/images/projects/mobile.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Ivanina-Nedelcheva/BicycleApp",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="py-20 md:py-2">
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
        Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-4 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
