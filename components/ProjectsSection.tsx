import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Perpetual Block",
    description:
      "Perpetual Block Technologies Pvt Ltd is Our company official website",
    image: "/perpetualBlock.png",
    github: "",
    link: "https://perpetualblock.io/",
    isActive: { git: false, link: true },
  },
  {
    name: "PB Research DAO",
    description:
      "PB Research DAO funds innovative aging research, supporting unconventional projects globally. We empower independent researchers, fostering groundbreaking contributions to science through comprehensive application-to-funding support. ",
    image: "/pbDao.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "",
    isActive: { git: false, link: false },
  },
  {
    name: "Protean Pay",
    description:
      "ProteanPay makes paying online easy! Use crypto with MetaMask or any currency with PayPal. Safe and simple payments for everyone, all in one place!",
    image: "/proteanPay.png",
    github: "https://github.com/hqasmei/platoio",
    link: "",
    isActive: { git: false, link: false },
  },
  {
    name: "Driven",
    description:
      "Discover an innovative platform offering comprehensive car details, from models to gear types, empowering enthusiasts and buyers with essential information for informed decisions. Dive into the world of automobiles!",
    image: "/driven.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "",
    isActive: { git: false, link: false },
  },
  {
    name: "Movie Tickets Booking App",
    description:
      "Introducing Movie Ticket Booking App, your ultimate destination for seamless show tracking and ticket booking. Enjoy the convenience of finding and booking your favorite shows anytime, anywhere.",
    image: "/movieTicket.png",
    link: "https://movie-tickets-booking-app-by-praveen.netlify.app",
    github: "https://github.com/praveen1295/move-tickrts-booking-app",
    isActive: { git: true, link: true },
  },
  {
    name: "Recipe Website",
    description:
      "An application that will assist an end-user to explore a variety of recipes with the available ingredients in one's kitchen.",
    image: "/recipeWebsite.png",
    github: "https://github.com/praveen1295/Recipe-Website",
    link: "https://recipie-website-by-pv-bankhede.netlify.app",
    isActive: { git: true, link: true },
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <div>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl"
                      />
                    </div>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project?.isActive?.git ? (
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      ) : (
                        <button className="cursor-not-allowed">
                          <BsGithub
                            size={30}
                            className="transition-transform opacity-50"
                          />
                        </button>
                      )}
                      {project?.isActive?.link ? (
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      ) : (
                        <button className="cursor-not-allowed">
                          <BsArrowUpRightSquare
                            size={30}
                            className="transition-transform opacity-50"
                          />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
