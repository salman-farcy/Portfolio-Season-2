"use client";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectiItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";


const info = [
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    description: "01602695577",
  },
  {
    icon: <FaEnvelope/>,
    title: "Email",
    description: "salmanfarcy253@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: "Address",
    description: "Basila, Mohammadpur, Dhaka 1207, Bangladesh",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section>
      contact page
    </motion.section>
  )
}

export default Contact
