import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Shirt, Scissors, CheckCircle, PenTool, Ship, Palette, Box } from 'lucide-react';
import { useStaggerAnimation } from '../../hooks/useScrollAnimation';

const ServicesSection: React.FC = () => {
  const { ref, controls, variants, childVariants } = useStaggerAnimation();
  
  const services = [
    {
      icon: <Palette size={32} className="text-primary-600 dark:text-primary-400" />,
      title: 'Garment Design & Development',
      description: 'Expert design services and pattern development to bring your concepts to life.'
    },
    {
      icon: <Box size={32} className="text-primary-600 dark:text-primary-400" />,
      title: 'Fabric Sourcing',
      description: 'Access to premium fabrics and materials from trusted suppliers worldwide.'
    },
    {
      icon: <Shirt size={32} className="text-primary-600 dark:text-primary-400" />,
      title: 'Garment Manufacturing',
      description: 'Full-service manufacturing from pattern-making to mass production of shirts, pants, hoodies, and jackets.'
    },
    {
      icon: <Scissors size={32} className="text-primary-600 dark:text-primary-400" />,
      title: 'Button Attachment & Finishing',
      description: 'Precise button attachment, embroidery, screen printing, and final detailing to perfect every garment.'
    },
    {
      icon: <CheckCircle size={32} className="text-primary-600 dark:text-primary-400" />,
      title: 'Quality Control',
      description: 'Rigorous multi-stage quality checks to ensure every piece meets international standards.'
    },
    {
      icon: <Ship size={32} className="text-primary-600 dark:text-primary-400" />,
      title: 'Logistics & Supply Chain',
      description: 'Complete export services including documentation, packaging, and logistics for global shipping.'
    }
  ];

  return (
    <section className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <SectionTitle
          title="Our Services"
          subtitle="We offer comprehensive garment manufacturing services from design to delivery."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                <div className="mb-4 md:mb-0 md:mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;