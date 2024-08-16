"use client";
import Image from "next/image";
// import proj2 from "../assets/proj2.jpg";
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.png"
import proj4 from "../assets/proj4.jpg"
import { motion } from "framer-motion";

// Array of projects
const projects = [
  {
    title: "Ecommerce Digital Product",
    desc: "An innovative e-commerce platform focused on digital products like software, e-books, and online courses. The platform allows users to purchase, download, and manage their digital assets seamlessly.",
    devstack:
      "React, Node.js, Express, MongoDB, Stripe API for payments, AWS S3 for file storage",
    link: "https://ecommerce-digital-product.com",
    git: "https://github.com/username/ecommerce-digital-product",
    src: proj2,
  },
  {
    title: "Another Cool Project",
    desc: "This is another cool project description.",
    devstack: "Next.js, Tailwind CSS, Firebase",
    link: "https://another-cool-project.com",
    git: "https://github.com/username/another-cool-project",
    src: proj3,
  },
  {
    title: "Yet Another Cool Project ",
    desc: "This is yet another cool project description.",
    devstack: "Next.js, Tailwind CSS, Firebase",
    link: "https://yet-another-cool-project.com",
    git: "https://github.com/username/yet-another-cool-project",
    src: proj4,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40"
      id="portfolio"
    >
      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24 my-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col ${
              index % 2 === 1 ? " md:flex-row-reverse gap-12" : " md:flex-row"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
              <p className="text-xl text-orange-400 font-semibold">{project.devstack}</p>
              <div className="w-64 h-[1px] bg-gray-400 my-4"></div>
              <div>
                <a href={project.link} className="mr-6">
                  Link
                </a>
                <a href={project.git}>Git</a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                className="h-[350px] w-[500px] object-cover border rounded border-gray-700"
                onError={() => console.error(`Failed to load image: ${project.src}`)}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
