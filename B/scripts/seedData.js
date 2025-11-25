import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Service from '../models/Service.js';
import Technology from '../models/Technology.js';
import Customer from '../models/Customer.js';
import Project from '../models/Project.js';
import Team from '../models/Team.js';
import Job from '../models/Job.js';
import Office from '../models/Office.js';

dotenv.config();

const servicesData = [
  // Regular Services
  {
    title: "Full-Stack Web Development",
    description: "We build scalable, secure, and responsive web applications.",
    icon: "FaCode",
    category: "web",
    serviceType: "regular",
    features: ["React/Next.js", "Node.js/Express", "MongoDB/PostgreSQL", "RESTful APIs"],
    order: 1
  },
  {
    title: "Mobile App Development", 
    description: "Custom Android & iOS applications built to elevate your business.",
    icon: "FaMobileAlt",
    category: "mobile",
    serviceType: "regular",
    features: ["React Native", "Flutter", "iOS/Android", "Cross-platform"],
    order: 2
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful interfaces to engage your users.",
    icon: "FaPaintBrush",
    category: "design",
    serviceType: "regular",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    order: 3
  },
  {
    title: "Cloud Integration",
    description: "Deploy and scale your applications seamlessly in the cloud.",
    icon: "FaCloud",
    category: "cloud",
    serviceType: "regular",
    features: ["AWS/Azure/GCP", "Serverless", "Microservices", "CI/CD"],
    order: 4
  },
  {
    title: "API Development",
    description: "Designing secure and performant RESTful and GraphQL APIs.",
    icon: "FaPlug",
    category: "api",
    serviceType: "regular",
    features: ["REST APIs", "GraphQL", "Authentication", "Documentation"],
    order: 5
  },
  {
    title: "Software Consulting",
    description: "Providing expert technology guidance for your software projects.",
    icon: "FaLightbulb",
    category: "consulting",
    serviceType: "regular",
    features: ["Technical Audit", "Architecture", "Best Practices", "Code Review"],
    order: 6
  },
  
  // Top Services
  {
    title: "ML & AI Development",
    description: "Advanced machine learning and artificial intelligence solutions.",
    icon: "FaRobot",
    category: "ai",
    serviceType: "top",
    order: 1
  },
  {
    title: "Data Engineering",
    description: "Building robust data pipelines and analytics platforms.",
    icon: "FaDatabase",
    category: "data",
    serviceType: "top", 
    order: 2
  },
  {
    title: "Business Intelligence",
    description: "Transform your data into actionable business insights.",
    icon: "FaChartBar",
    category: "analytics",
    serviceType: "top",
    order: 3
  },
  {
    title: "AR/VR Solutions",
    description: "Immersive augmented and virtual reality experiences.",
    icon: "FaVrCardboard",
    category: "ar-vr", 
    serviceType: "top",
    order: 4
  },
  {
    title: "Game Studio",
    description: "End-to-end game development for all platforms.",
    icon: "FaGamepad",
    category: "gaming",
    serviceType: "top",
    order: 5
  },
  {
    title: "QA Testing & Automation",
    description: "Comprehensive quality assurance and test automation.",
    icon: "FaCheckCircle",
    category: "testing",
    serviceType: "top",
    order: 6
  }
];

const technologiesData = [
  { name: "React", icon: "SiReact", color: "#61DAFB", category: "frontend", proficiency: 5 },
  { name: "Angular", icon: "SiAngular", color: "#DD0031", category: "frontend", proficiency: 4 },
  { name: "Vite", icon: "SiVite", color: "#646CFF", category: "tools", proficiency: 5 },
  { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E", category: "frontend", proficiency: 5 },
  { name: "TypeScript", icon: "SiTypescript", color: "#3178C6", category: "frontend", proficiency: 5 },
  { name: "Python", icon: "SiPython", color: "#3776AB", category: "backend", proficiency: 5 },
  { name: "Java", icon: "FaJava", color: "#007396", category: "backend", proficiency: 4 },
  { name: "Node.js", icon: "SiNodedotjs", color: "#339933", category: "backend", proficiency: 5 },
  { name: "MongoDB", icon: "SiMongodb", color: "#47A248", category: "database", proficiency: 5 },
  { name: "PostgreSQL", icon: "SiPostgresql", color: "#336791", category: "database", proficiency: 4 },
  { name: "Docker", icon: "SiDocker", color: "#2496ED", category: "devops", proficiency: 4 },
  { name: "AWS", icon: "SiAmazonaws", color: "#FF9900", category: "devops", proficiency: 4 }
];

const customersData = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    website: "https://google.com",
    industry: "Technology",
    type: "customer",
    isFeatured: true,
    order: 1
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    website: "https://microsoft.com", 
    industry: "Technology",
    type: "customer",
    isFeatured: true,
    order: 2
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    website: "https://amazon.com",
    industry: "E-commerce",
    type: "customer",
    isFeatured: true,
    order: 3
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    website: "https://apple.com",
    industry: "Technology",
    type: "customer",
    isFeatured: true,
    order: 4
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    website: "https://ibm.com",
    industry: "Technology",
    type: "partner",
    isFeatured: true,
    order: 5
  },
  {
    name: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png",
    website: "https://salesforce.com",
    industry: "CRM",
    type: "partner",
    isFeatured: true,
    order: 6
  }
];

const projectsData = [
  {
    title: "AI Chatbot Platform",
    description: "A smart AI-powered chatbot to assist customers 24/7 with natural language processing.",
    link: "https://aus-pac.vercel.app/",
    category: "ai",
    technologies: ["React", "Node.js", "OpenAI", "MongoDB"],
    isFeatured: true,
    order: 1
  },
  {
    title: "E-Commerce Platform",
    description: "A scalable and secure platform for online shopping with payment integration.",
    link: "#",
    category: "ecommerce", 
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
    isFeatured: true,
    order: 2
  },
  {
    title: "Mobile Fitness App",
    description: "Track workouts and health metrics with real-time synchronization.",
    link: "#",
    category: "mobile",
    technologies: ["React Native", "Firebase", "Redux"],
    isFeatured: true,
    order: 3
  }
];

const teamData = [
  {
    name: "Alice Johnson",
    role: "Lead Developer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedin: "#",
    twitter: "#",
    email: "alice@flowbiascraft.com",
    bio: "Full-stack developer with 8+ years of experience in web technologies.",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    order: 1
  },
  {
    name: "Michael Smith",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
    linkedin: "#",
    twitter: "#", 
    email: "michael@flowbiascraft.com",
    bio: "Creative designer focused on user-centered design and beautiful interfaces.",
    skills: ["Figma", "Adobe XD", "UI/UX", "Prototyping"],
    order: 2
  },
  {
    name: "Sara Lee",
    role: "Project Manager",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
    linkedin: "#",
    twitter: "#",
    email: "sara@flowbiascraft.com",
    bio: "Experienced project manager ensuring timely delivery and client satisfaction.",
    skills: ["Agile", "Scrum", "Project Management", "Client Relations"],
    order: 3
  }
];

const jobsData = [
  {
    title: "Senior Frontend Developer",
    location: "Remote",
    experience: "4+ Years Exp.",
    type: "remote",
    department: "engineering",
    requirements: ["React", "TypeScript", "Next.js", "Testing"],
    order: 1
  },
  {
    title: "Backend Engineer", 
    location: "Dhaka, Bangladesh",
    experience: "3+ Years Exp.",
    type: "full-time",
    department: "engineering",
    requirements: ["Node.js", "MongoDB", "API Development", "Microservices"],
    order: 2
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    experience: "3+ Years Exp.",
    type: "remote",
    department: "engineering",
    requirements: ["Docker", "Kubernetes", "CI/CD", "AWS"],
    order: 3
  }
];

const officesData = [
  {
    title: "Bangladesh Headquarters",
    address: "8th Floor, 2 Bir Uttam AK Khandakar Road, Mohakhali C/A, Dhaka 1212",
    email: "contact@flowbiascraft.com",
    phone: "+8801404055226",
    country: "Bangladesh",
    order: 1
  },
  {
    title: "USA Office",
    address: "7426 Alban Station Blvd, Suite A101, Springfield, VA 22150",
    email: "usa@flowbiascraft.com",
    phone: "+1 201 534 7200", 
    country: "United States",
    order: 2
  },
  {
    title: "Germany Office",
    address: "26160 Bad Zwischenahn, Germany",
    email: "germany@flowbiascraft.com",
    phone: "+49 4403 6999839",
    country: "Germany",
    order: 3
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/flowbiascraft');
    console.log(' Connected to MongoDB');

    // Clear existing data
    await Service.deleteMany({});
    await Technology.deleteMany({});
    await Customer.deleteMany({});
    await Project.deleteMany({});
    await Team.deleteMany({});
    await Job.deleteMany({});
    await Office.deleteMany({});
    console.log(' Cleared existing data');

    // Insert new data
    await Service.insertMany(servicesData);
    console.log(' Services seeded');
    await Technology.insertMany(technologiesData);
    console.log(' Technologies seeded');

    await Customer.insertMany(customersData);
    console.log(' Customers & Partners seeded');

    await Project.insertMany(projectsData);
    console.log(' Projects seeded');

    await Team.insertMany(teamData);
    console.log(' Team seeded');

    await Job.insertMany(jobsData);
    console.log(' Jobs seeded');

    await Office.insertMany(officesData);
    console.log(' Offices seeded');

    console.log(' All data seeding completed!');
    console.log(' You can now access your data at: http://localhost:5000/api');
    process.exit(0);
  } catch (error) {
    console.error(' Seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();