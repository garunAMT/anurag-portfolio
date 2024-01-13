import { Projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const FeaturedProjects = () => {
  return (
    <section className="text-gray-600 body-font" id="projects">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              My featured projects
            </h1>
            <div className="h-1 mb-4 w-20 bg-green-400 rounded"></div>
            <Button asChild>
              <Link href="https://github.com/garunAMT">View all projects</Link>
            </Button>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Sculpting sleek, responsive websites with a focus on seamless user
            experiences. Proficient in fullstack technologies, I bring designs
            to life. Explore my featured projects for a glimpse into web
            development where form meets function effortlessly.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {Projects.map((project) => (
            <div className="xl:w-1/4 md:w-1/2 p-4" key={project.id}>
              <div className="bg-gray-100 p-6 rounded-lg">
                <Link href={project.deployedLink}>
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    width={500}
                    height={500}
                    src={project.image}
                    alt="content"
                  />
                </Link>

                <Link
                  href={project.githubLink}
                  className="tracking-widest text-indigo-500 text-xs font-medium title-font"
                >
                  Visit Github
                </Link>
                <h1 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {project.name}
                </h1>
                <p className="leading-relaxed text-base">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
