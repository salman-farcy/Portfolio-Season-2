"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing  doloremque! Voluptate cumque molestias similique omnis non quas cum sapiente autem?",
    href: "https://www.behance.net/gallery/200576297/Wix-Full-Site",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing  doloremque! Voluptate cumque molestias similique omnis non quas cum sapiente autem?",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing  doloremque! Voluptate cumque molestias similique omnis non quas cum sapiente autem?",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing  doloremque! Voluptate cumque molestias similique omnis non quas cum sapiente autem?",
    href: "",
  },
];
const Services = () => {
  return (
    <section className="min-h-[80vh] justify-center flex flex-col  py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.1, diration: 0.8, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-14"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6 group"
              >
                <div className="flex justify-between">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  
                  <Link href={service.href} className="w-[45px] h-[45px]  rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[43px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">{service.title}</h2>
                {/* discription */}
                <p className="text-white/60 ">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
