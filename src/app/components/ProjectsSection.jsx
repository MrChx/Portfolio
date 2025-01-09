"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Gorontalo Satu Data",
    description: "Create a restfull and documentation API for web and applications that will be used by government agencies in Gorontalo, Indonesia",
    image: "/images/projects/GSD.jpg",
    tag: ["All", "Laravel"],
    gitUrl: "http://36.67.194.180/backend/api/documentation",
    previewUrl: "https://www.canva.com/design/DAGaAUHkSQ4/mFcHkuWGAoZCOPrG23ggEg/edit?utm_content=DAGaAUHkSQ4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    id: 2,
    title: "Blog API",
    description: "make restfull API website blog for documentation using Express dan MongoDB",
    image: "/images/projects/blog.png",
    tag: ["All", "Express"],
    gitUrl: "https://github.com/MrChx/Api-Blog",
    previewUrl: "https://documenter.getpostman.com/view/38348317/2sAYQUpE8a",
  },
  {
    id: 3,
    title: "E-commerce",
    description: "creating an API for web-based e-commerce using Express and MongoDB with midtrans integration",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Express"],
    gitUrl: "https://github.com/MrChx/Ecommerce",
    previewUrl: "https://documenter.getpostman.com/view/38348317/2sAYJ6CKyN",
  },
  {
    id: 4,
    title: "UniShop",
    description: "campus canteen web-based academic project created using fullstack laravel and filament as cms",
    image: "/images/projects/unishop2.png",
    tag: ["All", "Laravel"],
    gitUrl: "https://github.com/MrChx/UniShop",
    previewUrl: "https://dbdiagram.io/d/UnisanShop-67302719e9daa85acae7a2f8",
  },
  {
    id: 5,
    title: "Search Hotel",
    description: "create an API for a hotel search website in Sulawesi using Laravel and MySql as a database, as well integrating APIs from Twilio and Sulawesi maps",
    image: "/images/projects/hotel.png",
    tag: ["All", "Laravel"],
    gitUrl: "https://github.com/MrChx/Api-Hotel",
    previewUrl: "https://dbdiagram.io/d/Hotel-ERD-67727bfc5406798ef7eb4da6",
  },
  {
    id: 6,
    title: "Sensor",
    description: "Practice creating hand, face and expression sensors in python with open-cv",
    image: "/images/projects/sensor.png",
    tag: ["All"],
    gitUrl: "https://github.com/MrChx/Sensor",
    previewUrl: "https://github.com/MrChx/Sensor/blob/main/README.md",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Laravel"
          isSelected={tag === "Laravel"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Express"
          isSelected={tag === "Express"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
