import React from "react";
import { SkillSet } from "@/constants";

const Skills = () => {
  return (
    <div className="container mx-auto px-5 my-8" id="skills">
      <div>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Skills
        </h1>
      </div>
      <div className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-y-4">
        {SkillSet.map((skill) => {
          return (
            <span
              className="px-2 py-2 border rounded-md mx-2 bg-gray-100 text-center"
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
