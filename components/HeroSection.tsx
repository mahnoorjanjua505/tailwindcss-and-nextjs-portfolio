"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-4 sm:mt-24 py-15 sm:py-32 md:py-40 md:flex-row md:space-x-4 md:text-left"> 
        <div className="sm:mt-60 md:mt-2 md:w-1/2">
          <Image
            src="/me.jpeg"
            alt=""
            width={300}
            height={300}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-1 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-5xl">Hi, I&#39;m Mahnoor!</h1>
          <p className="text-lg mt-4 mb-6 md:text-xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Web Developer{" "}
            </span>
            I am a passionate professional with a strong background in 
            <span className="font-semibold text-teal-600">
            {" "} office administration  {" "}
            </span> 
            and a keen interest in web development
            makes life easier and websites that leave a lasting impression.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
