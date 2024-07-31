"use client";
import { Info } from "lucide-react";
import Link from "next/link";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiRedux } from "react-icons/si";

// about
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing doloremque sint nesciunt incidunt voluptate obcaecati illum aliquam id blanditiis distinctio!",
  Info: [
    {
      fieldName: "Name",
      fieldVale: "Salman farcy",
    },
    {
      fieldName: "Phone",
      fieldVale: "01602695577",
    },
    {
      fieldName: "Experience",
      fieldVale: "3+ Years",
    },
    {
      fieldName: "Email",
      fieldVale: "salmanfarcy253@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldVale: "Bangladesh",
    },
    {
      fieldName: "Freelance",
      fieldVale: "Available",
    },
    {
      fieldName: "Languages",
      fieldVale: "English, Bangla, Hindi, Urdu",
    },
  ],
};

//exprience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing doloremque sint nesciunt incidunt voluptate obcaecati illum aliquam id blanditiis distinctio!",
  items: [
    {
      company: "Tech Solutions Inc",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
    {
      company: "Tech Acadeny",
      position: "Teaching Assistan",
      duration: "2019 - 2020",
    },
  ],
};

//exprience data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Salman ipsum dolor sit amet, consectetur adipisicing doloremque sint nesciunt incidunt voluptate!",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Developer Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front-End Track",
      duration: "Summer 2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2016 - 2018",
    },
    {
      institution: "Community Collage",
      degree: "Diploma in Graphic Design",
      duration: "2014 - 2016",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description:
    "Farcy ipsum dolor sit amet, sint nesciunt incidunt voluptate obcaecati illum aliquam id blanditiis distinctio!",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML-5",
      percentage: "70%",
      href: "https://www.w3schools.com/html/",
    },
    {
      icon: <FaCss3 />,
      name: "CSS-3",
      percentage: "85%",
      href: " ",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      percentage: "75%",
      href: " ",
    },
    {
      icon: <FaReact />,
      name: "React.js",
      percentage: "65%",
      href: " ",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
      percentage: "40%",
      href: " ",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      percentage: "30%",
      href: " ",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
      percentage: "80%",
      href: " ",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      percentage: "60%",
      href: " ",
    },
    {
      icon: <SiRedux />,
      name: "Redux.js",
      percentage: "60%",
      href: " ",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-8 xl:gap-14"
        >
          {/* tabs */}
          <TabsList className="flex  flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Expreience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About ME</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mx-w-[600px] text-white/60 max-auto xl:mx-0 text-justify">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="h-[184px] flex flex-col px-10 bg-[#2323] py-6 rounded-lg justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>

                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[7px] h-[7px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="mx-w-[600px] text-white/60 max-auto xl:mx-0 text-justify">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="h-[184px] flex flex-col px-10 bg-[#2323] py-6 rounded-lg justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>

                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[7px] h-[7px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8 text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                    {skills.description}
                  </p>
                </div>

                <ScrollArea className="h-[344px] xl:h-[350px]">
                  <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 xl:gap-8 ">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex  justify-center items-center group">
                                <Link
                                  href={skill.href}
                                  target="_blank"
                                  className="flex flex-col items-center justify-center gap-2"
                                >
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                    {skill.icon}
                                  </div>
                                  <div className="text-accent group-hover:text-white font-extralight text-sm transition-all duration-300">
                                    {skill.percentage}
                                  </div>
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="text-accent capitalize">
                                  {skill.name}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-8">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6  max-w-[620px]">
                  {about.Info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span>{item.fieldVale}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
