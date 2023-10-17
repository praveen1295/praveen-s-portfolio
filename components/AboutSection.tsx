import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Redux" },
  { skill: "Redux Toolkit" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Node js" },
  { skill: "Express Js" },
  { skill: "MongoDB" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Praveen and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Indore, Madhya Pradesh.
            </p>
            <br />
            <p>
              I graduated from VITS College, Indore, in 2017 with a
              Bachelor&#39;s degree in Mechanical Engineering. After my
              engineering, I pursued a Full Stack Web Developer course from
              Newton School, which I completed in October 2022. Since then, I
              have been working as a Software Engineer, combining my technical
              knowledge and passion for coding to create meaningful solutions.
            </p>
            <br />
            <p>
              My life is a blend of diverse interests, from reading and playing
              sports to traveling and exploring new horizons. I thrive on new
              experiences and am continuously engaged in learning.
            </p>
            <br />
            <p>
              {/* <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "} */}
              I firmly believe in the philosophy of perpetual growth. With a
              passion for technology, I constantly strive to push the boundaries
              of what is possible. I am excited about the journey my career is
              on and am always open to new and exciting opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
