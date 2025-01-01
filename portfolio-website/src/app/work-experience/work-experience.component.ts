import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  technologies: string[];
}

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [NgFor],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  experiences: WorkExperience[] = [
    {
      company: "Transmogriffy Global Private Limited",
      role: "Fullstack Software Developer",
      duration: "Jan 2024 - Aug 2024",
      description: [
        "Led development of scalable web applications using Angular and Node.js",
        "Led a team of 2 interns on 2+ full-stack projects, ensuring quality and deadlines.",
        "Implemented CI/CD pipelines for automated deployment",
        "Improved system performance by 40% through optimization techniques",
        "Developed RESTful APIs using NestJS framework",
        "Managed AWS cloud infrastructure for application hosting"
      ],
      technologies: ["Angular", "Ionic", "NestJS", "Docker",  "Javascript", "TypeScript", "AWS"]
    },
    {
      company: "Vara Infrovate Private Limited",
      role: "Software Developer",
      duration: "Jan 2023 - Jan 2024",
      description: [
        "Designed and developed responsive web interfaces using Angular , Angular Material and NgRx components.",
        "Contributed to a blockchain development team, exploring decentralized applications.",
        "Collaborated with UX team to implement modern design patterns",
        "Proficient in Git, GitHub, JIRA, and collaborative tools for efficient project management.",
        "Implemented complex styling using SCSS",
        "Ensured cross-browser compatibility across all major browsers"
      ],
      technologies: ["Angular", "TypeScript", "Angular Material", "NgRx"]
    }
  ];

}
