
import React from "react";
import { Advisor } from "../types";
import AdvisorCard from "./AdvisorCard";
import { motion } from "framer-motion";

interface AdvisorListProps {
  advisors: Advisor[];
}

const AdvisorList: React.FC<AdvisorListProps> = ({ advisors }) => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (advisors.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-2">No advisors found</h3>
        <p className="text-gray-600">
          Try adjusting your search to see more results
        </p>
      </div>
    );
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {advisors.map((advisor) => (
        <motion.div key={advisor.id} variants={item}>
          <AdvisorCard advisor={advisor} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AdvisorList;
