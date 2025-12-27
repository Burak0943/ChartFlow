import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="center-screen">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ loop: Infinity, duration: 1 }}
        className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center"
      >
        <div className="w-8 h-8 bg-white/10 rounded-full" />
      </motion.div>
    </div>
  );
}
