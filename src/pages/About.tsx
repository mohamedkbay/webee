import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/sections/AboutSection';
import SectionTitle from '../components/ui/SectionTitle';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | PT Doori Lestari Garment";
  }, []);

  const teamMembers = [
    {
      name: "Kwun Hun Ik",
      position: "Chief Executive Officer",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "With over 20 years of experience in the garment industry, Sarah leads our company's strategic vision and global expansion."
    },
    {
      name: "David Tanaka",
      position: "Head of Production",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "David oversees all manufacturing operations, ensuring the highest quality standards across our production lines."
    },
    {
      name: "Linda Sanjaya",
      position: "Marketing Director",
      image: "https://images.pexels.com/photos/2381068/pexels-photo-2381068.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Linda drives our global marketing strategy and client relationships, expanding our presence in international markets."
    }
  ];

  return (
    <div className="pt-16 mt-10">
      {/* Header Section */}
      <section className="bg-primary-50 dark:bg-gray-800 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle
              title="About PT Doori Lestari Garment"
              subtitle="Learn about our journey, our people, and our commitment to quality."
              className="mb-0"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Company History */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <SectionTitle
            title="Our Journey"
            subtitle="From humble beginnings to becoming a trusted partner for global brands."
          />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg max-w-none dark:prose-invert"
            >
              <p>
                Founded in 2010, PT Doori Lestari Garment began as a small workshop with just 20 skilled tailors. Today, we've grown into a full-scale manufacturing facility employing over 200 skilled workers and producing thousands of garments each month for export worldwide.
              </p>
              <p>
                Our growth has been built on a foundation of quality, reliability, and strong relationships with our clients. We've continuously invested in modern equipment, improved our processes, and expanded our capabilities to meet the evolving needs of the fashion industry.
              </p>
              <p>
                Throughout our journey, we've maintained our commitment to ethical manufacturing practices, fair labor standards, and sustainable production methods. We believe that responsible business practices are not just good ethics—they're good business.
              </p>
              <p>
                As we look to the future, we remain dedicated to our founding principles while embracing innovation and new technologies that allow us to deliver even greater value to our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team/Leadership Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Our Leadership Team"
            subtitle="Meet the people driving our vision forward."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm"
              >
                <div className="h-64 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-3">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-400">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;