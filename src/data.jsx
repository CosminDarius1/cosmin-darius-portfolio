import { nanoid } from 'nanoid';
import { FaBootstrap, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { FaArrowsSplitUpAndLeft, FaDatabase, FaGit, FaNodeJs, FaPhp, FaS } from 'react-icons/fa6';
import academyServer from './assets/academyserver.png';
import caterpillarImg from '../src/assets/caterpillar.png';
import caterpillarImg2 from '../src/assets/caterpillar2.png';
import cMail from '../src/assets/cmail.png';
import eStore from '../src/assets/estore.png'
import guessNr1 from '../src/assets/guess1.png';
import guessNr2 from '../src/assets/guess2.png'
import phpProject from '../src/assets/phpproject.png';
import phpProject2 from '../src/assets/phpproject2.png';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#contact', text: 'contact' },
];

export const skills = [
  // {
  //   id: nanoid(),
  //   title: 'HTML&CSS',
  //   icon: <FaHtml5 className='h-16 w-16 text-orange-500 hover:text-slate-200 duration-300 cursor-pointer' />,
  //   text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  //   href:"https://github.com/CosminDarius1?tab=repositories&q=HTML&type=&language=&sort=",
  // },
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
  // {
  //   id: nanoid(),
  //   title: 'NodeJS',
  //   icon: <FaNodeJs className='h-16 w-16 text-orange-500 hover:text-slate-200 duration-300 cursor-pointer' />,
  //   text: 'Proficient in crafting efficient server-side applications with Node.js, specializing in building RESTful APIs, seamless database integration, and real-time communication implementations.',
  //   href:'https://github.com/CosminDarius1?tab=repositories&q=robot&type=&language=&sort=',
  // },
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
  // {
  //   id: nanoid(),
  //   title: 'Git',
  //   icon: <FaGit className='h-16 w-16 text-orange-500 hover:text-slate-200 duration-300 cursor-pointer' />,
  //   text: 'Proficient in Git for version control, with experience in branching, merging, and collaboration. Familiar with CI/CD pipelines for automated software delivery.',
  //   href:'https://github.com/CosminDarius1?tab=repositories&q=circleci&type=&language=&sort=',
  // },

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
    img: academyServer,
    url: 'https://portal.dev.io-academy.uk/',
    gitUrl: 'https://github.com/iO-Academy/AcademyPortal',
    title: 'Academy Portal',
    text: 'A collaborative full-stack project at iO Academy, where students contribute by implementing new features and fixing bugs.',
    text2:'My primary task involved enhancing security by enabling Admins to lock specific fields, preventing unauthorized edits by students.',
    text3:'Engaged with legacy code, I integrated new JavaScript and PHP code, ensuring compatibility with existing legacy code.',
    text4:'While working on the back-end, I adhered to the MVC design pattern architecture.',
    text5:'Incorporated Continous Integration practices using CircleCI.This enabled real-time error detection, ensuring smooth development and deployment processes.',
    text6:'Technologies used: JavaScript, PHP, MySQL, MVC,Git,CircleCI,HTML5, Boostrap3.'
  },
  {
    id: nanoid(),
    img: eStore,
    url: 'https://e-store-8sstopedn-cosmins-projects-2425edf3.vercel.app/',
    gitUrl: 'https://github.com/CosminDarius1/e-store',
    title: 'e-store',
    text: 'A full-stack e-commerce application built with Next.js, TypeScript, and Tailwind CSS. It features a clean, responsive UI using Shadcn components and integrates with Supabase and Prisma for the backend',

    text2:'Worked on a Seamless Shopping Experience where the user can browse dynamic product listings with variations, add/remove items to a cart, and complete purchases securely with Stripe-powered checkout.',

    text3:'Implemented Robust Authentication & Data Management using Secure user authentication via Clerk, real-time database management with Supabase and Prisma, and strong data validation using Zod.',

    text4:"Modern & Responsive UI: Clean, mobile-friendly design using Tailwind CSS and Shadcn UI for a smooth user experience.",
    
    text5:'Optimized Performance & Deployment: Social sharing via ReactShare, fast load times with Next.js optimizations, and seamless deployment on Vercel',
    
    text6:'Technologies used:Next.JS,TypseScript, TailwindCSS,Shadcn UI, Supabase(PostgreSQL + Prisma), Clerk, Zod, Stripe, ReactShare, Vercel, Github'
  },
  {
    id: nanoid(),
    img: phpProject,
    url: 'https://2023-jul-project-management-api.dev.io-academy.uk/projects.php',
    gitUrl: 'https://github.com/iO-Academy/jul-2023-project-management-API',
    title: 'Project Management App',
    text: 'Trello or Jira similar app for effective project management',
    text2:'Utilised PHP OOP to architect a robust REST API for efficient data flow between front-end and back-end.',
    text3:'Worked with Slim framework for efficient routing and error handling, including error codes and messages for API data access to clarify success and enhance user understanding.',
    text4:'Enabled project managers to oversee projects, assing team members, and monitor tasks.',
    text5:' Also utilised MySQL database for effective communication between PHP and MySQL, enabling seamless data management for API operations such as adding or deleting data on the frontend.',
    text6:'Technologies used:PHP,Slim,MySQL,REST API,Git'
  },
  {
    id: nanoid(),
    img: cMail,
    url: 'https://2023-jul-cmail.dev.io-academy.uk/',
    gitUrl: 'https://github.com/iO-Academy/2023-jul-cmail',
    title: 'Email Client',
    text: 'Project in React which emulates a real email client, enabling users to compose, send, and receive emails through an API',
    text2:'Developed an email client with RESTful API integration for sending, composing, and receiving emails',
    text3:'Implemented validation rules using Regex to ensure correct user input, including valid email addresses.',
    text4:'Facilitated user navigation across sections like Inbox, Sent, and Deleted Emails, displaying relevant emails and enabling reading or marking as unread.',
    text5:'Created desired layout using Bootstrap5 for a better user experience.',
    text6:'Technologies used:React,RESTful API,Git,Bootstrap5, HTML5.'
  },
  {
    id: nanoid(),
    img: caterpillarImg,
    url: 'https://2023-jul-caterpillar-countdown.dev.io-academy.uk/',
    gitUrl: 'https://github.com/iO-Academy/jul-23-caterpillar-countdown',
    title: 'Caterpillar Countdown',
    text: 'JavaScript-based browser game for testing mental agility, where users click numbers in ascending order within a time limit.',
    text2:'Implemented logic to generate 3 to 5 random numbers each time the player clicked the correct boxes in ascending order. This dynamic feature enhanced gameplay by offering varied challenges as players progressed.',
    text3:'Worked with DOM manipulation and event listeners to manage the color change of correctly clicked boxes, enabling advancement to the next round. Additionally, incorrect clicks triggered the reset of marked boxes to their default color, prompting users to select numbers in ascending order once more.',
    text4:'Implemented a counter and score feature to add challenge and provide users with feedback on their points earned within the timeframe.',
    text5:'Also worked on the layout using mainly CSS and Flexbox',
    text6:'Technologies used: HTML5,CSS,JavaScript,Git',
  },
 
  {
    id: nanoid(),
    img: guessNr1,
    url: 'https://cosmindarius1.github.io/Guess-my-number-project/',
    gitUrl: 'https://github.com/CosminDarius1/Guess-my-number-project',
    title: 'Guess My Number app',
    text: 'JavaScript number-based game where users engage by guessing a randomly generated number within the range of 1 to 20.',
    text2:'Implemented JavaScript logic for generating numbers,also validation rules added, limiting users to 20 attempts to guess the generated number.',
    text3:"Displayed feedback messages on the browser during gameplay, informing users if their guesses were too low or high compared to the correct answer.",
    text4:"Once user will guess correctly feedback message will be displayed and background color will change , also revealing the guessed number.",
    text5:'Added a "Play Again" button to reset game elements while retaining the Highscore display for enhanced user challenge and interaction.',
    text6:'Technologies: JavaScript, CSS, HTML5,Git'
  },
];
