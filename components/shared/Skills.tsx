import React from "react";
import { SkillSet } from "@/constants";

const Skills = () => {
  return (
    <div className="container mx-auto px-5 my-8" id="skills">
      <div>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">
          Skills
        </h1>
        <div className="h-1 mb-4 w-10 bg-green-400 rounded"></div>
      </div>
      <div className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4">
        {SkillSet.map((skill) => {
          return (
            <span
              className="px-2 py-2 border rounded-md text-center"
              key={skill.id}
            >
              {skill.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
