import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Target, EyeIcon, Heart } from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const animation = useScrollAnimation();
  const staggerAnimation = useStaggerAnimation();

  const values = [
    { 
      icon: <Target size={28} className="text-primary-600 dark:text-primary-400" />,
      title: 'Professionalism',
      description: 'Paying attention to detail and ensuring top-quality results in every project.'
    },
    { 
      icon: <EyeIcon size={28} className="text-primary-600 dark:text-primary-400" />,
      title: 'Integrity & Trust',
      description: 'Working with transparency and commitment to build long-term relationships. Providing professional and flexible garment production solutions to brands or retail companies, prioritizing timeliness, product quality, and partner satisfaction in every collaboration process.'
    },
    { 
      icon: <Heart size={28} className="text-primary-600 dark:text-primary-400" />,
      title: 'Customer-Centric',
      description: 'Placing our clients’ needs at the center of our services and listening carefully to their requirements.'
    }
  ];

  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={animation.ref}
          initial="hidden"
          animate={animation.controls}
          variants={animation.variants}
        >
          <SectionTitle
            title="Businesses with Technology Solutions"
            subtitle="Tech Shield is a trusted IT partner that provides reliable support, software solutions, networking, and professional training. We help businesses and individuals harness technology effectively to grow, innovate, and stay ahead in a digital world."
          />
        </motion.div>

        <div className="max-w-3xl mx-auto mb-16">
          <motion.p 
            ref={animation.ref}
            initial="hidden"
            animate={animation.controls}
            variants={animation.variants}
            className="text-gray-700 dark:text-gray-300 text-center"
          >
            Our dedication to quality, security, and continuous learning ensures every solution we deliver meets the unique needs of our clients.
          </motion.p>
        </div>

        <motion.div
          ref={staggerAnimation.ref}
          initial="hidden"
          animate={staggerAnimation.controls}
          variants={staggerAnimation.variants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerAnimation.childVariants}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;