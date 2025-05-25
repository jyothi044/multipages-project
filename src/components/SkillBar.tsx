import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
}

const SkillBar = ({ name, percentage, color = 'bg-primary' }: SkillBarProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-foreground/70">{percentage}%</span>
      </div>
      <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  );
};

export default SkillBar;