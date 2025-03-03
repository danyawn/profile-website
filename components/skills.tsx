"use client"

import { AnimatedSection } from "./animated-section"
import { StaggeredChildren } from "./staggered-children"
import { AnimatedSkillBar } from "./animated-skill-bar"

export function Skills() {
  const skills = [
    { name: "React", percentage: 92 },
    { name: "CSS", percentage: 85 },
    { name: "NextJS", percentage: 92 },
    { name: "Node.js", percentage: 87 },
    { name: "JavaScript", percentage: 93 },
    { name: "React Native", percentage: 85 },
    { name: "TypeScript", percentage: 80 },
    { name: "AWS", percentage: 75 },
    { name: "UI/UX Design", percentage: 78 },
  ]

  return (
    <AnimatedSection className="py-16" id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gradient">My Skills</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I've spent years honing my skills in web development. Here's an overview of my technical expertise and
          proficiency levels.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <StaggeredChildren key={skill.name} staggerDelay={0.1}>
            <AnimatedSkillBar name={skill.name} percentage={skill.percentage} />
          </StaggeredChildren>
        ))}
      </div>
    </AnimatedSection>
  )
}

