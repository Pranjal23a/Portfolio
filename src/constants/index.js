import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  Mysql,
  python,
  c,
  cpp,
  Github,
  carrent,
  hospital,
  comparison,
  coursefile,
  arora,
  optima,
  wedding,
  jobit,
  tripguide,
  threejs,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education & Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Coding & Algorithms",
    icon: mobile,
  },
  {
    title: "Cloud Computing",
    icon: backend,
  },
  {
    title: "Data Visualization",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C",
    icon: c
  },
  {
    name: "C++",
    icon: cpp
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MYSQL",
    icon: Mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Github",
    icon: Github,
  },
];

const experiences = [
  {
    title: "Class X",
    company_name: "Saffron Public School",
    icon: web,
    iconBg: "#383E56",
    date: "April 2017 - March 2018 (Education)",
    points: [
      "Percentage: 79.2%",
      "Information Technology.",
    ],
  },
  {
    title: "Class XII",
    company_name: "Vidya Mandir Public School",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "April 2019 - March 2020 (Education)",
    points: [
      "Percentage: 90.8%",
      "Physics, Chemistry, Mathematics.",
      "Computer Science (C++ & Python)."
    ],
  },
  {
    title: "Integrated M.Tech. CSE",
    company_name: "Jaypee Institute of Information Technology",
    icon: web,
    iconBg: "#383E56",
    date: "October 2020 - present (Education)",
    points: [
      "Data Structures & Algorithms.",
      "Object Oriented Programming.",
      "Artificial Intelligence.",
      "Database Management Systems.",
      "Operating Systems & System Programming.",
      "Computer Networks.",
      "Machine Learing.",
    ],
  },
  {
    title: "Website Developer Trainee",
    company_name: "Inforises Technologies",
    icon: backend,
    iconBg: "#383E56",
    date: "May 2023 - July 2023 (Experience)",
    points: [
      "Successfully developed four websites tailored for direct customer engagement, overseeing the entire process for three of them.",
      "These websites boast responsive designs enriched with captivating animations to enhance user experience.",
      "Worked upon SEO of the website, ensuring they reach their target audience effectively.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Smart HealthCare Ecosystem ",
    description:
      "It enables administrators to manage inventory, view selling data, and add staff/doctors. Staff can sell medicine, doctors write prescriptions, and users book appointments, creating a comprehensive and efficient healthcare system.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: hospital,
    source_code_link: "https://github.com/Pranjal23a/Smart-Hospital-Ecosystem",
  },
  {
    name: "Real Time Product Information",
    description:
      "The website enables users to search Amazon and Flipkart, providing real-time data for informed purchasing decisions by comparing prices and product details on a single platform. This help the user to view any product at one click.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "puppeteer",
        color: "green-text-gradient",
      },
      {
        name: "cheerio",
        color: "pink-text-gradient",
      },
    ],
    image: comparison,
    source_code_link: "https://github.com/Pranjal23a/Comparison",
  },
  {
    name: "Course File Generator",
    description:
      "The website simplifies course file creation for faculty members by automating the process through uploads of marks, course details, and other information, enhancing efficiency in managing 20 comprehensive modules. Additionally, the system generates a comprehensive PDF document for the entire course file.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: coursefile,
    source_code_link: "https://github.com/Pranjal23a/CourseFile",
  },
  {
    name: "Arora Nursing Home Website",
    description:
      "Developed a responsive website for Arora Nursing Home with a focus on enhancing patient experience, ensuring visitors can easily access relevant information about the healthcare services offered.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "blue-text-gradient",
      },
    ],
    image: arora,
    source_code_link: "https://allbest.in/pranjal/arora-hospital/",
  },
  {
    name: "Optima Water Solution Pvt Ltd. Website",
    description:
      "Developed a cutting-edge responsive website for Optima Water Solution, highlighting a comprehensive array of water solutions and state-of-the-art technologies, providing an immersive experience for users.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
    ],
    image: optima,
    source_code_link: "https://allbest.in/pranjal/optima-water-solution/",
  },
  {
    name: "The Wedding Touch Website",
    description:
      "Developed a responsive website for The Wedding Touch, a comprehensive platform offering detailed information and services provided by wedding planners, providing an immersive and user-friendly experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "blue-text-gradient",
      },
    ],
    image: wedding,
    source_code_link: "https://www.allbest.in/mohit/wedding-touch/",
  },
];

export { services, technologies, experiences, testimonials, projects };
