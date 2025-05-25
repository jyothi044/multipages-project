import { GraduationCap, Briefcase, Award, Code, Star, Heart, Coffee, Zap } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimatedSection from '../components/AnimatedSection';
import SkillBar from '../components/SkillBar';
import TimelineItem from '../components/TimelineItem';

const About = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Passionate about creating innovative solutions and transforming ideas into reality through elegant code.
            </p>
          </AnimatedSection>

          {/* Bio Section */}
          <div className="flex flex-col lg:flex-row gap-12 mb-20">
            <AnimatedSection className="lg:w-2/5" direction="right">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="w-full h-full bg-gradient-to-tr from-primary to-secondary opacity-20 absolute -z-10 blur-2xl rounded-xl transform group-hover:scale-105 transition-transform duration-500"></div>
                <img
                  src='https://cdn.pixabay.com/photo/2024/05/20/13/28/ai-generated-8775232_1280.png'
                  alt="Professional headshot"
                  className="w-full h-full object-cover rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="lg:w-3/5" direction="left">
              <h2 className="section-title">My Journey</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                As a dedicated Full Stack Developer, I bring a unique blend of technical expertise and creative problem-solving abilities. My journey in technology began with a deep fascination for creating user-centric applications that make a real difference.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                I specialize in modern web technologies including React, Node.js, and cloud platforms. My approach combines clean code principles with innovative design thinking to deliver scalable and maintainable solutions.
              </p>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Beyond coding, I'm passionate about continuous learning and staying updated with emerging technologies. I believe in writing clean, efficient code and creating intuitive user experiences that delight users.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 bg-foreground/5 rounded-lg transform hover:scale-105 transition-transform duration-300">
                  <Coffee className="w-8 h-8 text-primary mb-2" />
                  <span className="text-3xl font-bold text-primary">1000+</span>
                  <span className="text-sm text-foreground/70">Hours Coded</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-foreground/5 rounded-lg transform hover:scale-105 transition-transform duration-300">
                  <Star className="w-8 h-8 text-primary mb-2" />
                  <span className="text-3xl font-bold text-primary">15+</span>
                  <span className="text-sm text-foreground/70">Projects</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-foreground/5 rounded-lg transform hover:scale-105 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-primary mb-2" />
                  <span className="text-3xl font-bold text-primary">100%</span>
                  <span className="text-sm text-foreground/70">Satisfaction</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-foreground/5 rounded-lg transform hover:scale-105 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-primary mb-2" />
                  <span className="text-3xl font-bold text-primary">24/7</span>
                  <span className="text-sm text-foreground/70">Support</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Skills Section */}
          <AnimatedSection className="mb-20">
            <h2 className="section-title mb-10 text-center">Technical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
              <SkillBar name="Frontend Development" percentage={90} />
              <SkillBar name="Backend Development" percentage={85} />
              <SkillBar name="React & React Native" percentage={88} />
              <SkillBar name="Node.js & Express" percentage={85} />
              <SkillBar name="Database Management" percentage={82} color="bg-secondary" />
              <SkillBar name="Cloud Services (AWS)" percentage={80} color="bg-secondary" />
              <SkillBar name="UI/UX Design" percentage={85} />
              <SkillBar name="DevOps & CI/CD" percentage={78} />
            </div>
          </AnimatedSection>

          {/* Timeline Section */}
          <AnimatedSection className="mb-20">
            <h2 className="section-title mb-10 text-center">Experience & Education</h2>
            <div className="max-w-3xl mx-auto">
              <TimelineItem
                year="2023 - Present"
                title="Full Stack Developer at TechCorp"
                description="Leading development of scalable web applications using React and Node.js. Implemented CI/CD pipelines and improved application performance by 40%."
                icon={<Briefcase size={20} />}
              />
              <TimelineItem
                year="2022 - 2023"
                title="Software Developer at InnovateHub"
                description="Developed and maintained multiple client projects. Specialized in React Native mobile applications and REST API development."
                icon={<Code size={20} />}
              />
              <TimelineItem
                year="2021 - 2022"
                title="B.Tech in Computer Science"
                description="Graduated with distinction. Focused on web technologies and software engineering principles."
                icon={<GraduationCap size={20} />}
                isLast
              />
            </div>
          </AnimatedSection>

          {/* Achievements Section */}
          <AnimatedSection>
            <h2 className="section-title mb-10 text-center">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-foreground/5 p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Award size={24} className="text-primary mr-3" />
                  <h3 className="text-xl font-bold">Best Developer</h3>
                </div>
                <p className="text-foreground/70">Recognized as the top performer for exceptional development skills and innovation.</p>
              </div>
              <div className="bg-foreground/5 p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Star size={24} className="text-primary mr-3" />
                  <h3 className="text-xl font-bold">Project Excellence</h3>
                </div>
                <p className="text-foreground/70">Led the development of a high-impact project that increased client efficiency by 60%.</p>
              </div>
              <div className="bg-foreground/5 p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Award size={24} className="text-primary mr-3" />
                  <h3 className="text-xl font-bold">Innovation Award</h3>
                </div>
                <p className="text-foreground/70">Received recognition for implementing innovative solutions in client projects.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;