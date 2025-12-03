import { PortfolioData } from './types';

export const DATA: PortfolioData = {
  profile: {
    name: "Wei Zheng",
    title: "Senior Software Engineer (P.Eng)",
    contact: {
      email: "weizheng777@gmail.com",
      phone: "778-878-2297",
      address: "21130 44A Ave, Langley, BC",
    },
    highlights: [
      "Achieved the Professional Software Engineer (P.Eng) title, recognizing expert proficiency and ethical commitment.",
      "Leveraged over 15 years of experience across a full stack of development environments (Web, Android, iOS, Mac, Windows).",
      "Demonstrated strong capacity for independent and collaborative work, excelling in problem-solving and time management.",
      "Managed personal workflow and mentored junior software engineers, fostering team growth and technical excellence.",
    ],
  },
  skills: {
    languages: ["Java", "JavaScript", "Python", "C/C++", "C#", "Objective-C", "PHP"],
    cloudDevOps: ["AWS", "Kubernetes", "Docker", "Jenkins", "Puppet", "CI/CD", "Grafana", "InfluxDB"],
    frameworks: ["jQuery", "Bootstrap", "React/React Native", "Node.js", "Express.js", "Redux", "Netty"],
    tools: ["Git", "Android Studio", "NetBeans", "IntelliJ IDEA", "Eclipse", "Visual Studio", "Xcode"],
    integration: ["RESTful API", "GraphQL", "TomTom SDK", "Firebase", "Keycloak"],
  },
  experience: [
    {
      company: "A.T.S Electro-Lube International Inc.",
      role: "Senior Software Engineer (Contract)",
      location: "Delta, BC",
      period: "March 2022 – Present",
      details: [
        "Enhanced existing Lube management Android app using C#/Xamarin to integrate Geese management features.",
        "Refactored existing Bluetooth Low Energy (BLE) implementation to enhance connection stability and data throughput.",
      ],
    },
    {
      company: "Rx Networks Inc.",
      role: "Software Engineer",
      location: "Vancouver, BC",
      period: "January 2020 – April 2024",
      details: [
        "Automated data processing workflow using Python, NumPy, and Pandas for InfluxDB/Grafana visualization.",
        "Developed Android NTRIP Client library in C++, leading to a partnership with Qualcomm.",
        "Automated end-to-end deployment on Linux using Bash scripting.",
        "Engineered IAM solutions utilizing Keycloak for user management.",
        "Developed highly scalable NTRIP Caster leveraging Java Netty's NIO framework (10k concurrent connections).",
        "Developed and maintained SSR2OSR and DGNSS servers using Java and Maven.",
        "Developed Kubernetes configuration scripts to enhance resource allocation.",
      ],
    },
    {
      company: "DDS Wireless International Inc.",
      role: "Senior Software Developer",
      location: "Richmond, BC",
      period: "January 2019 – 2020",
      details: [
        "Designed and built end-to-end taxi/paratransit platform using React Native (Android/iOS).",
        "Developed React Native map component using TomTom's map SDK.",
        "Mentored junior software developers in React Native.",
      ],
    },
    {
      company: "DDS Wireless International Inc.",
      role: "Mobile Software/Firmware Developer",
      location: "Richmond, BC",
      period: "July 2014 – Dec 2018",
      details: [
        "Enhanced jQuery-based digital dispatch system on Android.",
        "Established automated testing framework using Jenkins, Robotium, and Sikuli.",
        "Designed taxi meter native app for Android.",
        "Developed custom U-Boot and USB driver for credit card readers.",
        "Built Android OS/OTA packages from AOSP codebase.",
      ],
    },
    {
      company: "Ensemble System Inc.",
      role: "Software Developer",
      location: "Richmond, BC",
      period: "November 2011 – July 2014",
      details: [
        "Developed native iOS restaurant rating app.",
        "Contributed to hotel web app using Node.js and Express.js.",
        "Engineered video streaming app for Windows 8 tablets using C#, JS, HTML5.",
      ],
    },
    {
      company: "Kodak Graphic Communications",
      role: "Software Developer",
      location: "Burnaby, BC",
      period: "October 2007 – November 2009",
      details: [
        "Developed key features for Prinergy Evo in C++.",
        "Integrated Color Flow technology and CORBA interfaces.",
        "Designed new build scripts using Perl.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Engineering",
      institution: "University of Victoria",
      location: "Victoria, BC",
      year: "2005 – 2007",
    },
    {
      degree: "Electronics Engineering Technology Diploma",
      institution: "British Columbia Institute of Technology",
      location: "Burnaby, BC",
      year: "2000 – 2002",
    },
  ],
  volunteer: [
    {
      role: "Member of Squadron Sponsoring Committee (SSC)",
      organization: "583 Air Cadets, Maple Ridge",
      period: "2024 - present",
    },
  ],
};