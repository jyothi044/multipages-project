import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with user authentication, product filtering, and payment integration.",
    image: "https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "MongoDB"],
    category: "web",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A creative portfolio website for a photographer with smooth animations and a minimalist design.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["HTML/CSS", "JavaScript", "GSAP"],
    category: "web",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app with drag-and-drop functionality, user collaboration, and real-time updates.",
    image: "https://images.pexels.com/photos/7439135/pexels-photo-7439135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Firebase", "Redux"],
    category: "web",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Mobile Banking App",
    description: "A secure banking application with biometric authentication, transaction history, and budget tracking.",
    image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React Native", "Node.js", "Express"],
    category: "mobile",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Travel Blog",
    description: "A travel blog with a custom CMS, user comments, and a photo gallery with lazy loading.",
    image: "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["WordPress", "PHP", "MySQL"],
    category: "web",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "A fitness tracking app with workout plans, progress charts, and social sharing capabilities.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Flutter", "Firebase", "Dart"],
    category: "mobile",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Restaurant Website",
    description: "A restaurant website with online ordering, table reservations, and menu customization.",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "Stripe"],
    category: "web",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Weather App",
    description: "A weather application with 7-day forecasts, location-based weather, and custom animations.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React Native", "Weather API", "Redux"],
    category: "mobile",
    demoUrl: "#",
    githubUrl: "#",
  },
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Development" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "design", name: "UI/UX Design" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <PageTransition>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Work</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Explore my latest projects and see how I bring ideas to life through code and design.
            </p>
          </AnimatedSection>

          <AnimatedSection className="flex justify-center mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-foreground/5 hover:bg-foreground/10'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.1}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    demoUrl={project.demoUrl}
                    githubUrl={project.githubUrl}
                  />
                </AnimatedSection>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-foreground/70">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;