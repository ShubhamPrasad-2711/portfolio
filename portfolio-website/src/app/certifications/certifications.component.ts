import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  fileName: string;
  iconPath: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [NgFor],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  certificates: Certificate[] = [
    {
      name: "Introduction to DevOps",
      issuer: "IBM with Coursera",
      date: "Dec 2024",
      fileName: "Intro-DevOps.pdf",
      iconPath: "../../assets/icons/coursera-icon.png"
    },
    {
      name: "Web Design",
      issuer: "Udemy",
      date: "May 2021",
      fileName: "Web Design.pdf",
      iconPath: "../../assets/icons/udemy-icon.png"
    },
    {
      name: "Introduction to Agile Development and Scrum",
      issuer: "IBM with Coursera",
      date: "Dec 2024",
      fileName: "Intro-to-Scrum.pdf",
      iconPath: "../../assets/icons/coursera-icon.png"
    },
    {
      name: "Python - Complete Course",
      issuer: "Udemy",
      date: "Oct 2020",
      fileName: "Certificate - PYTHON.pdf",
       iconPath: "../../assets/icons/udemy-icon.png"
    },
    {
      name: "ReactJS - Basic to Advanced Development",
      issuer: "Udemy",
      date: "Dec 2022",
      fileName: "ReactJS.pdf",
       iconPath: "../../assets/icons/udemy-icon.png"
    },
    {
      name: "Graphic Designing and tools",
      issuer: "Udemy",
      date: "July 2021",
      fileName: "Graphic Designing Certificate.pdf",
       iconPath: "../../assets/icons/udemy-icon.png"
    },
    {
      name: "Soft skills Certification",
      issuer: "Barclays",
      date: "Dec 2021",
      fileName: "soft-skills.pdf",
       iconPath: "../../assets/icons/barclays-icon.png"
    },
    {
      name: "HTML - Basic to Advance",
      issuer: "Udemy",
      date: "Nov 2020",
      fileName: "Certificate - HTML.pdf",
       iconPath: "../../assets/icons/udemy-icon.png"
    },
    {
      name: "Programming in C",
      issuer: "Udemy",
      date: "Sept 2020",
      fileName: "Certificate - C.pdf",
       iconPath: "../../assets/icons/udemy-icon.png"
    }
  ];

  viewCertificate(fileName: string): void {
    window.open(`../../assets/certificates/${fileName}`, '_blank');
  }
}
