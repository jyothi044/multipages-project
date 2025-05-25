import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.5,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getDirectionVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        };
      case 'none':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const variants = getDirectionVariants();

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration, delay, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedSection;