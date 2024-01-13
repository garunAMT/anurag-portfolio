import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import Developer from "../../public/assets/Developer.svg";

const Hero = () => {
  return (
    <div id="home">
      <section className="body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={Developer}
              width={720}
              height={600}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col justify-center">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium">
              Hello I'm Anurag
            </h1>
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium">The developer next door</h2>
            {/* <p className="mb-8 leading-relaxed">
              Copper mug
            </p> */}
            <div className="flex gap-4">
              <Button className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <span>Resume</span>
              </Button>

              <Button variant="outline">Explore</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
