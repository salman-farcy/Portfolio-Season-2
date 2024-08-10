"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BtnsWorkSlider from "@/components/BtnsWorkSlider";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cupiditate fugit rem voluptates, sapiente recusandae modi officia facere dicta dolorem.",
    stack: [{ name: "HTML-5" }, { name: "CSS-3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb1.png",
    live: "https://www.w3schools.com/html/",
    github: "https://www.w3schools.com/html/",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cupiditate fugit rem voluptates, sapiente recusandae modi officia facere dicta dolorem.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "tailwind" },
      { name: "Node.js" },
      { name: "mongoDB" },
      { name: "mongoes" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cupiditate fugit rem voluptates, sapiente recusandae modi officia facere dicta dolorem.",
    stack: [{ name: "HTML-5" }, { name: "CSS-3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;

    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          {/* text */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-8 h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration500 capitalize">
                {project.category} project
              </h2>

              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>

              {/* Stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-8">
                {/* live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent group" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group">
                        <BsGithub className="text-white text-2xl group-hover:text-accent group" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl: h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="Project image"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider buttons */}
              <BtnsWorkSlider
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_ - _22px)] xl:bottm-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center item-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
