import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "WordPress" },
  { skill: "Shopify" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Database Management"},
  { skill: "Virtual Assistant"},
  { skill: "Microsoft Office"},
  { skill: "Project Management"},

]

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
            I graduated with a strong foundation in office administration and completed two IT web development courses. I have 2-3 years of professional experience, including roles as a Web Developer and an Administrative/Executive Virtual Assistant. 
            </p>
            <br />
            <p>
            I created decent simple websites, blogs using WordPress and custom code. Over the years, I have not only developed websites or e-commerce stores but also managed them for various clients, including small businesses looking to grow and professionals who want to enhance their portfolios. Below are few of my projects I recently worked on.
             
            </p>
            <br />
            <p>
            I am always seeking new experiences and love to keep myself
            engaged and {" "}
              <span className="font-bold text-teal-500">
             learning new things.
              </span>{" "}
            I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
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
                )
              })}
            </div>
            {/* <Image
              src="/Studying girl.jpg"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
