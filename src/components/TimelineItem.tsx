import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: ReactNode;
  isLast?: boolean;
}

const TimelineItem = ({ 
  year, 
  title, 
  description, 
  icon,
  isLast = false 
}: TimelineItemProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4 sm:mr-8">
        <motion.div 
          className="rounded-full p-3 bg-primary/10 text-primary"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        {!isLast && (
          <motion.div 
            className="flex-grow w-px bg-foreground/20 my-2"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        )}
      </div>
      <motion.div 
        className="pb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary inline-block mb-2">
          {year}
        </span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </motion.div>
    </div>
  );
};

export default TimelineItem;