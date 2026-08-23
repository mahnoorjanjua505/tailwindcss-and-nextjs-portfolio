import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Mehru&M Stationery",
    description:
      "Mehru&M Stationery is an e-commerce website designed with the Astra theme and Elementor. I integrated WhatsApp  for seamless communication, and articulated into an perfect aesthetic theme, also optimized SEO for better visibility. Additionally, I set up and managed the store’s content and handled WooCommerce for online sales. ",
    image: "/mehru&M.jpg",
    github: "",
    link: "https://mehromstationary.com/",
  }, 
  
  {
    name: "Lang&Co.",
    description:
      "I developed a custom-coded landing page using HTML, CSS, and JavaScript, designed to meet all the client's business requirements.The coding details and project files are available on my GitHub repository for reference.",
    image: "/lang-co.jpg",
    github: "https://github.com/mahnoorjanjua505/Lang-Co-site.git",
    link: "https://langandco.com/",
  },
  {
    name: "Galway Wool site",
    description:
      "I developed a decent farmer-owned Irish cooperative wordpress site dedicated to producing and promoting authentic, native Irish wool from purebred Galway sheep.",
    image: "/galwaywool.jpg",
    github: "",
    link: "https://galwaywool.ie/",
  },
  {
    name: "Shopify Beauty Store",
    description: "I developed and designed this Shopify, adding the product line, customer reviews in the theme designing, optimizing speed, SEO, and functionality.",
    image: "/kybo page.jpg",
    github: "",
    link: "https://kybo.store/",
  },
  {
    name: "Planting Store Shopify",
    description: "I built and designed a nice Shopify store from scratch. I added a beautiful range of plants — indoor greenery, succulents, and more — with clear photos and friendly descriptions. It feels welcoming and easy to shop!",
    image: "/planting store.jpg",
    github: "",
    link: "https://hyggecorner.pk/",
  },
  
  {
    name: "Catering Website",
    description:
      "I created a portfolio website for 'MJ Caterings' with five pages, including a blog with four fictional posts. This project helped me enhance my WordPress & Elementor skills. I included sections, content, images, and a video showcasing each part with animations..",
    image: "/mj-catering.jpg",
    github: "",
    link: "https://www.loom.com/share/9ba1842d0e664b1abb4ccac3267038e8?sid=c6bfaebe-3aa5-4786-a679-ebbf4ce3e034",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className=" text-center font-bold text-4xl">
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
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {<Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>}
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default ProjectsSection
