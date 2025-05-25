import { ArrowRight, Code, Layout, Smartphone, Paintbrush } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import AnimatedSection from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-20 md:pb-32 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                  Creative <span className="text-primary">Developer</span> & <span className="text-accent">Designer</span>
                </h1>
                <p className="text-xl text-foreground/80 mb-8 md:pr-12">
                  I create beautiful digital experiences that engage users and elevate brands to the next level.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/projects">
                    <motion.button
                      className="btn btn-primary px-6 py-3 rounded-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View My Work
                    </motion.button>
                  </Link>
                  <Link to="/contact">
                    <motion.button
                      className="btn btn-outline px-6 py-3 rounded-md border-2 border-foreground/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get In Touch
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 absolute -z-10 blur-2xl" />
                <img
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Professional Developer"
                  className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-background shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-foreground/5">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title mx-auto">My Services</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              I offer a range of services to help businesses and individuals establish a strong online presence.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <ServiceCard
                title="Web Development"
                description="I create responsive, performant websites that work flawlessly across all devices and browsers."
                icon={<Code size={24} />}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <ServiceCard
                title="UI/UX Design"
                description="I design intuitive user interfaces and experiences that engage users and achieve business goals."
                icon={<Layout size={24} />}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <ServiceCard
                title="Mobile Development"
                description="I build cross-platform mobile applications that provide native-like experiences."
                icon={<Smartphone size={24} />}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <ServiceCard
                title="Brand Identity"
                description="I develop cohesive brand identities that communicate your values and resonate with your audience."
                icon={<Paintbrush size={24} />}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <ServiceCard
                title="E-commerce Solutions"
                description="I build online stores that are optimized for conversions and provide seamless shopping experiences."
                icon={<Layout size={24} />}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <ServiceCard
                title="SEO Optimization"
                description="I optimize websites for search engines to improve visibility and drive organic traffic."
                icon={<Code size={24} />}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="flex justify-between items-center mb-12 flex-col sm:flex-row">
            <div>
              <h2 className="section-title">Featured Projects</h2>
              <p className="text-foreground/70 max-w-xl">
                Check out some of my recent work that showcases my skills and expertise.
              </p>
            </div>
            <Link to="/projects" className="group flex items-center mt-4 sm:mt-0 text-primary font-medium">
              View All Projects
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <ProjectCard
                title="E-commerce Platform"
                description="A fully responsive e-commerce platform with user authentication, product filtering, and payment integration."
                image="https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                tags={['React', 'Node.js', 'MongoDB']}
                demoUrl="#"
                githubUrl="#"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <ProjectCard
                title="Portfolio Website"
                description="A creative portfolio website for a photographer with smooth animations and a minimalist design."
                image="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                tags={['HTML/CSS', 'JavaScript', 'GSAP']}
                demoUrl="#"
                githubUrl="#"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <ProjectCard
                title="Task Management App"
                description="A productivity app with drag-and-drop functionality, user collaboration, and real-time updates."
                image="https://images.pexels.com/photos/7439135/pexels-photo-7439135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                tags={['React', 'Firebase', 'Redux']}
                demoUrl="#"
                githubUrl="#"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Let's collaborate to bring your ideas to life. Contact me today to discuss your project requirements.
            </p>
            <Link to="/contact">
              <motion.button
                className="bg-white text-primary px-8 py-3 rounded-md font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;