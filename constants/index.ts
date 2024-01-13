import afg from "../public/assets/afg.jpg";
import febs from "../public/assets/febs.jpg";
import dallE from "../public/assets/dalleclone.jpg";
import PeerPlay from "../public/assets/PeerPlay.jpg";

export const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Contact",
    path: "/contact",
  },
];

export const SkillSet = [
    {
      id: 1,
      name: 'HTML',
      value: 90,
      logo: 'html5'
    },
    {
      id: 2,
      name: 'CSS',
      value: 85,
      logo: 'css3'
    },
    {
      id: 3,
      name: 'JavaScript',
      value: 80,
      logo: 'javascript'
    },
    {
      id: 4,
      name: 'Bootstrap',
      value: 85,
      logo: 'css3'
    },
    {
      id: 5,
      name: 'Tailwind CSS',
      value: 80,
      logo: 'javascript'
    },
    {
      id: 6,
      name: 'React',
      value: 95,
      logo: 'react'
    },
    {
      id: 7,
      name: 'Node.js',
      value: 88,
      logo: 'nodejs'
    },
    {
      id: 8,
      name: 'MongoDB',
      value: 82,
      logo: 'mongodb'
    },
    {
      id: 9,
      name: 'Next.js',
      value: 92,
      logo: 'nextjs'
    },
    {
      id: 10,
      name: 'Python',
      value: 88,
      logo: 'python'
    },
    {
      id: 11,
      name: 'C',
      value: 75,
      logo: 'c'
    }
  ]

export const Projects = [
    {
      id: 1,
      name: 'FEBS Website',
      image: febs,
      description: 'A website created for the Society of Financxe, Economics & Business of IIT Bhubaneswar.',
      deployedLink: 'https://febs-iitbbs.org/',
      githubLink: 'https://github.com/garunAMT/FEBS-Website'
    },
    {
      id: 2,
      name: 'AFG Website',
      image: afg,
      description: 'A portfolio website created for the Applied Fluids Group, IIT Bhubaneswar.',
      deployedLink: 'https://www.appliedfluidsgroup.in/',
      githubLink: 'https://github.com/garunAMT/afg-2'
    },
    {
      id: 3,
      name: 'DallE Clone',
      image: dallE,
      description: 'Cloned DallE as a part of my fullstack project. Used OpenAI\'s API & Cloudinary',
      deployedLink: '',
      githubLink: 'https://github.com/garunAMT/DALL-E-Clone'
    },
    {
      id: 4,
      name: 'PeerPlay',
      image: PeerPlay,
      description: 'Built the frontend of blockchain based music app as part of Inter IIT Tech Team.',
      deployedLink: '',
      githubLink: 'https://github.com/shlok-007/On-Chain-Radio/tree/mem2'
    }
  ]
  
