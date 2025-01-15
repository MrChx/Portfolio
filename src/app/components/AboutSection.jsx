"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2 gap-x-16">
        <li>Python</li>
        <li>MongoDB</li>
        <li>Laravel</li>
        <li>Postgre</li>
        <li>Express</li>
        <li>Postman</li>
        <li>MySql</li>
        <li>Swagger</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Developer Student Club</li>
        <li>MSIB Batch 7 at TSA Kominfo</li>
        <li>Network Operations in Divison HD at Telkom</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Building a REST API with Express & MongoDB</li>
        <li>Python for Data Science</li>
        <li>Web Development for career opportunity</li>
        <li>Machine Learning Kit</li>
        <li>MSIB Batch 7</li>
        <li>Backend Developer Talent Scouting Academy Digital Talent Scholarship</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I’m a 5th-semester Informatics Engineering student and a passionate software developer focusing on backend development.
          I enjoy managing business logic, creating rest APIs, documentation API, and managing databases. I like learning new things and implementing my skills through internships and freelance.
          The following are the skills, experience and certificates that I have. You can also see it on my linkedin 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
