import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <motion.div 
      className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;