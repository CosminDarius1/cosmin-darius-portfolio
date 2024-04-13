import { nanoid } from 'nanoid';
import { FaBootstrap, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { FaArrowsSplitUpAndLeft, FaDatabase, FaGit, FaNodeJs, FaPhp, FaS } from 'react-icons/fa6';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-orange-500 hover:text-slate-200 duration-300 cursor-pointer' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
    href:"https://github.com/CosminDarius1?tab=repositories&q=HTML&type=&language=&sort=",
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-orange-500 hover:text-slate-200 duration-300 cursor-pointer' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
    href:"https://github.com/CosminDarius1?tab=repositories&q=Javascript&type=&language=&sort=",
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-orange-500 hover:text-slate-200 duration-300 cursor-pointer' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
    href:'https://github.com/CosminDarius1?tab=repositories&q=React&type=&language=&sort=',
  },
  {
    id: nanoid(),
    title: 'NodeJS',
    icon: <FaNodeJs className='h-16 w-16 text-orange-500 hover:text-slate-200 duration-300 cursor-pointer' />,
    text: 'Proficient in crafting efficient server-side applications with Node.js, specializing in building RESTful APIs, seamless database integration, and real-time communication implementations.',
    href:'https://github.com/CosminDarius1?tab=repositories&q=robot&type=&language=&sort=',
  },
  {
    id: nanoid(),
    title: 'PHP',
    icon: <FaPhp className='h-16 w-16 text-orange-500 hover:text-slate-200 duration-300 cursor-pointer' />,
    text: 'Skilled in PHP development, with a focus on Object-Oriented Programming (OOP) and the Model-View-Controller (MVC) design pattern. Proficient in leveraging PHPUnit for robust unit testing, ensuring code reliability and maintainability.',
    href:'https://github.com/CosminDarius1?tab=repositories&q=php&type=&language=&sort=',
  },
  {
    id: nanoid(),
    title: 'SLIM',
    icon: <FaS className='h-16 w-16 text-orange-500 hover:text-slate-200 duration-300 cursor-pointer' />,
    text: "Skilled in Slim framework, adept at utilizing its HTTP router, middleware, and message implementation for seamless communication. Proficient in dependency injection for managing dependencies.",
    href:'https://github.com/CosminDarius1?tab=repositories&q=slim-framework&type=&language=&sort=',
  },
  {
    id: nanoid(),
    title: 'MySQL',
    icon: <FaDatabase className='h-16 w-16 text-orange-500 hover:text-slate-200 duration-300 cursor-pointer' />,
    text: 'Skilled in MySQL database management, proficient in designing schemas, optimizing queries, and ensuring data integrity.',
    href:'https://github.com/CosminDarius1?tab=repositories&q=mysql&type=&language=&sort=',
  },
  {
    id: nanoid(),
    title: 'Git',
    icon: <FaGit className='h-16 w-16 text-orange-500 hover:text-slate-200 duration-300 cursor-pointer' />,
    text: 'Proficient in Git for version control, with experience in branching, merging, and collaboration. Familiar with CI/CD pipelines for automated software delivery.',
    href:'https://github.com/CosminDarius1?tab=repositories&q=circleci&type=&language=&sort=',
  },

  // {
  //   id: nanoid(),
  //   title: 'Bootstrap',
  //   icon: <FaBootstrap className='h-16 w-16 text-orange-500 hover:text-slate-200 duration-300 cursor-pointer' />,
  //   text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  // },
  // {
  //   id: nanoid(),
  //   title: 'Agile',
  //   icon: <FaArrowsSplitUpAndLeft className='h-16 w-16 text-orange-500 hover:text-slate-200 duration-300 cursor-pointer' />,
  //   text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  // },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
