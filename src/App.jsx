import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { motion } from 'framer-motion';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  faCode,
  faMicrochip,
  faDatabase,
  faServer,
  faMobileAlt,
  faTerminal,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPython,
  faJsSquare,
  faRust,
  faReact,
  faSwift,
  faJava,
  faLinux,
  faNodeJs,
  faAngular,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';
import ImageGallery from './components/ImageGallery';
import EndlessRunner from './game/EndlessRunner';
import PhysicsPlayground from './components/PhysicsPlayground';
import HarmonographSimulator from './Harmonograph/HarmonographSimulator';
import CryptographyDemo from './cipher/CryptographyDemo';
import Navbar from './components/Navbar';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "C++", icon: faCode },
      { name: "Python", icon: faPython },
      { name: "Java", icon: faJava },
      { name: "Swift", icon: faSwift },
      { name: "Rust", icon: faRust },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3Alt },
      { name: "Javascript", icon: faJsSquare },
      { name: "React", icon: faReact },
      { name: "Angular", icon: faAngular },
      { name: "Typescript", icon: faCode },
    ],
  },
  {
    category: "Miscellaneous",
    items: [
      { name: "Algorithms", icon: faMicrochip },
      { name: "Distributed Systems", icon: faServer },
      { name: "gRPC", icon: faCode },
      { name: "Linux", icon: faLinux },
      { name: "Shell Scripting", icon: faTerminal },
      { name: "PostgreSQL", icon: faDatabase },
      { name: "MongoDB", icon: faDatabase },
      { name: "FactSet", icon: faCode },
      { name: "Bloomberg Terminal", icon: faChartColumn },
    ],
  },
];

const coursework = [
  {
    year: '1st Year',
    courses: [
      { name: 'CS 200 - Introduction to Programming' },
      { name: 'CS 252 - Intro to Computer Engineering' },
      { name: 'CS 300 - Programming II' },
      { name: 'MATH 222 - Calculus II' },
      { name: 'ASTRON 103 - The Evolving Universe' },
      { name: 'ECON 101 - Introduction to Microeconomics' },
      { name: 'ECON 102 - Introduction to Macroeconomics' },
      { name: 'PSYCH 202 - Introduction to Psychology' },
      { name: 'SOC 170 - Population Problems' },
      { name: 'ENGL 100 - Introduction to College Composition' },
      { name: 'COUN PSY 125 - A Wisconsin Experience Seminar' },
    ],
  },
  {
    year: '2nd Year',
    courses: [
      { name: 'CS 240 - Introduction to Discrete Mathematics' },
      { name: 'CS 354 - Machine Organization and Programming' },
      { name: 'CS 400 - Programming III' },
      { name: 'CS 532 - Matrix Methods in Machine Learning' },
      { name: 'CS 577 - Algorithms' },
      { name: 'ART HIST 210 - World History in 20 Buildings' },
      { name: 'DANCE 100 - Ballroom Dance' },
      { name: 'PHILOS 241 - Introduction to Ethics' },
      { name: 'MUSIC 113 - Music in Performance' },
      { name: 'BOTANY 100 - Survey of Botany' },
      { name: 'LITTRANS 247 - Slavic Literature in Translation - Literature and Revolution' },
      { name: 'CS 638 - Internship Course in Computer Science (This is the course International Students are required to take if they are doing off-campus work.)' },
    ],
  },
  {
    year: '3rd Year',
    courses: [
      { name: 'CS 564 - Database Management Systems' },
      { name: 'CS 578 - Contest Level Programming - Training for ACM-ICPC' },
      { name: 'CS 579 - Virtual Reality' },
      { name: 'CS 639 - Parallel and Throughput Optimized Programming' },
      { name: 'MATH 320 - Linear Algebra and Differential Equations' },
      { name: 'FINANCE 300 - Finance, Investment and Banking' },
      { name: 'PHILOS 549 - A Study of Great Moral Philosophers' },
      { name: 'INTER-LS 215- Communication About Careers' },
      { name: 'CS 638 - Internship Course in Computer Science' },
      { name: 'MUSIC 113 - Music in Performance' },
    ],
  },
   {
    year: '4th Year',
    courses: [
      { name: 'CS 403 - Internship Course in Computer Science' },
      { name: 'CS 407 - Foundations of Mobile Systems' },
      { name: 'CS 435 - Introduction to Cryptography' },
      { name: 'CS 570 - Introduction to Human-Computer Interaction' },
      { name: 'CS 639 - CS Capstone Project - I worked with Amazon\'s Shopbop team and built a game-like fashion assitant app for iOS' },
      { name: 'CS 699 - Directed Study - Research on Distributed Systems with Dr. Kai Mast and Prof. Remzi Arpaci-Dusseau' },
      { name: 'CS 739 - Distributed Systems (Graduate Level)' },
      { name: 'CS 839 - Blockchain and Decentralized Applications (Graduate Level)' },
      { name: 'CS&D 210 - Neural Basis of Communication' },
      { name: 'SLAVIC 245 - War and Culture - Polish Experience' },
    ],
  },
];



const Home = () => (
  <>
    <header className="App-header">
  <motion.h1 initial="initial" animate="animate" variants={fadeIn}>
    Yatharth Bindal
  </motion.h1>
</header>

    <Container>
      <section className="App-section">
        <motion.h2 initial="initial" animate="animate" variants={fadeIn}>
          About Me
        </motion.h2>
        <motion.p initial="initial" animate="animate" variants={fadeIn}>
          I'm a React developer with a passion for creating modern and interactive web applications.
        </motion.p>
      </section>
      <section className="App-section">
      <motion.h2 initial="initial" animate="animate" variants={fadeIn}>
        Skills
      </motion.h2>
      {skills.map((skillGroup, index) => (
        <div key={index}>
          <motion.h3 initial="initial" animate="animate" variants={fadeIn}>
            {skillGroup.category}
          </motion.h3>
          <div className="skills-container">
            {skillGroup.items.map((skill, index) => (
              <div key={index} className="skill-item">
                <FontAwesomeIcon icon={skill.icon} style={{ marginRight: "0.5rem" }} />
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
      <section className="App-section">
        <motion.h2 initial="initial" animate="animate" variants={fadeIn}>
          Coursework
        </motion.h2>
        {coursework.map((yearGroup, index) => (
          <div key={index}>
            <motion.h3 initial="initial" animate="animate" variants={fadeIn}>
{yearGroup.year}
</motion.h3>
<div className="courses-container">
{yearGroup.courses.map((course, index) => (
<div key={index} className="course-item">
{course.name}
</div>
))}
</div>
</div>
))}
</section>
<section className="App-section">
<ImageGallery
images={[
{
thumbnail: 'bdn.png',
full: 'bdn.png',
},
{
thumbnail: 'bcn.png',
full: 'bcn.png',
},
{
thumbnail: 'bbn.png',
full: 'bbn.png',
},
]}
/>
</section>
<section className="App-section">
<HarmonographSimulator />
</section>
<section className="App-section">
<EndlessRunner />
</section>
<section className="App-section">
  <motion.h2 initial="initial" animate="animate" variants={fadeIn}>
    Contact
  </motion.h2>
  <motion.p initial="initial" animate="animate" variants={fadeIn}>
    Yatharth Bindal
  </motion.p>
  <motion.p initial="initial" animate="animate" variants={fadeIn}>
    Feel free to reach out to me at:
  </motion.p>
  <motion.p initial="initial" animate="animate" variants={fadeIn}>
    <FontAwesomeIcon icon={faEnvelope} /> Email: [first_name][last_name]@gmail.com
  </motion.p>
  <motion.div
    className="social-links"
    initial="initial"
    animate="animate"
    variants={fadeIn}
  >
    <a
      href="https://www.linkedin.com/in/yatharthbindal/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin size={30} />
    </a>
    <a
      href="https://github.com/yatharthb"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub size={30} />
    </a>
  </motion.div>
</section>

</Container>
<footer className="App-footer">
<p>Thank you for visiting my portfolio!</p>
</footer>
</>
);

const App = () => {
return (
<div className="App">
<Router>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/harmonograph" element={<HarmonographSimulator />} />
<Route path="/physics-playground" element={<PhysicsPlayground />} />
<Route path="/cipher" element={<CryptographyDemo />} />
</Routes>
</Router>
</div>
);
};

export default App;
