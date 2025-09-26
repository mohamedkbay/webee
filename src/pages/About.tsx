import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/sections/AboutSection';
import SectionTitle from '../components/ui/SectionTitle';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | Tech Shield- درع التقنية";
  }, []);

  // const teamMembers = [
  //   {
  //     name: "Kwun Hun Ik",
  //     position: "Chief Executive Officer",
  //     image: "https://raw.githubusercontent.com/malik027/doorilestarigarment/refs/heads/main/images/kwun%20hun%20lk.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     description: "With over 20 years of experience in the garment industry, Kwun leads our company's strategic vision and global expansion."
  //   },
  //   {
  //     name: "Joon Tae Kim",
  //     position: "Head of Production",
  //     image: "https://raw.githubusercontent.com/malik027/doorilestarigarment/refs/heads/main/images/joon%20tae%20kim.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     description: "Joon oversees all manufacturing operations, ensuring the highest quality standards across our production lines."
  //   },
  //   {
  //     name: "Linda Sanjaya",
  //     position: "Marketing Director",
  //     image: "https://raw.githubusercontent.com/malik027/doorilestarigarment/refs/heads/main/images/Linda.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     description: "Linda drives our global marketing strategy and client relationships, expanding our presence in international markets."
  //   }
  // ];

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
              title="Who We Are"
              subtitle="Discover our journey, the team behind the production, and our commitment to the highest quality in the garment industry."
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
              className="Our Journey"
            >
              <p>
                Tech Shield was founded with a clear vision: to provide reliable IT support, software solutions, and training that empower businesses and individuals in Libya. From the very beginning, our goal has been to make technology simple, secure, and effective for everyone
                Over time, we have grown into a trusted partner for organizations seeking dependable IT services, innovative software, and professional training.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    
      
    </div>
  );
};

export default About;