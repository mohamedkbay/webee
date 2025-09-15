import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ClientsSection from '../components/sections/ClientsSection';
import { MapPinIcon } from 'lucide-react';

const Clients: React.FC = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "Clients | tech Shield- درع التقنية";
  }, []);

  const testimonials = [
    {
      name: "Mohamed ALhijaji",
      company: "Alhijaji Workshop.",
      quote: "Workshop for Amarican Cars That we provied it with warchapro.",
      location: "libya janzour"
    },
    {
      name: "Ahmed Alnajar",
      company: "albab alateek",
      quote: "The team at PT Doori Lestari understands our aesthetic perfectly. Their craftsmanship and ability to translate our designs into high-quality garments has been invaluable to our growth.",
      location: "Libya alsabha"
    },
    {
      name: "Mohamed Salah",
      company: "Alwatnya For Importing Of Marine Equipments",
      quote: "Alwatnya specializes in importing high-quality marine equipment and is the official distributor of Mercury engines, serving the boating and maritime industry with reliable products and trusted expertise.",
      location: "Libya Tajoura"
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
              title="Our Global Clients"
              subtitle="We are proud to be a trusted partner for visionary companies across the globe. At Tech Shield, we believe innovation and collaboration are the keys to staying ahead in the ever-evolving world of technology. By providing programming solutions, network services, and reliable IT infrastructure, we help businesses build secure, efficient, and sustainable systems. Our partnerships reflect a shared vision of responsible technology and sustainable digital growth."
              className="mb-0"
            />
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientsSection />

      {/* Testimonials */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Some of the Services We Provide to Our Clients"
            subtitle="We offer programming solutions, network services, and IT infrastructure to help businesses run securely and efficiently."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm relative"
              >
                <div className="mb-6">
                  <svg className="text-primary-400 dark:text-primary-500 w-10 h-10 absolute top-6 left-6 opacity-20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.722 6.844c-5.677 0-10.281 4.604-10.281 10.281s4.604 10.281 10.281 10.281 10.281-4.604 10.281-10.281-4.604-10.281-10.281-10.281zM8.625 10.935c0.599-0.599 1.571-0.599 2.17 0s0.599 1.571 0 2.17c-0.599 0.599-1.571 0.599-2.17 0s-0.599-1.571 0-2.17zM8.625 21.518c-0.599-0.599-0.599-1.571 0-2.17s1.571-0.599 2.17 0c0.599 0.599 0.599 1.571 0 2.17s-1.571 0.599-2.17 0zM10.802 17.227c-0.599-0.599-0.599-1.571 0-2.17s1.571-0.599 2.17 0c0.599 0.599 0.599 1.571 0 2.17s-1.571 0.599-2.17 0zM16.443 21.518c-0.599-0.599-0.599-1.571 0-2.17s1.571-0.599 2.17 0c0.599 0.599 0.599 1.571 0 2.17s-1.571 0.599-2.17 0zM14.364 17.227c-0.599-0.599-0.599-1.571 0-2.17s1.571-0.599 2.17 0c0.599 0.599 0.599 1.571 0 2.17s-1.571 0.599-2.17 0zM16.443 13.105c-0.599-0.599-0.599-1.571 0-2.17s1.571-0.599 2.17 0c0.599 0.599 0.599 1.571 0 2.17s-1.571 0.599-2.17 0z"></path>
                  </svg>
                  <p className="text-gray-600 dark:text-gray-400 italic relative z-10">"{testimonial.quote}"</p>
                </div>
                <div className="mt-auto">
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-primary-600 dark:text-primary-400">{testimonial.company}</p>
                  <div className="flex items-center mt-2 text-gray-500 dark:text-gray-400">
                    <MapPinIcon size={16} className="mr-1" />
                    <span className="text-sm">{testimonial.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}

    </div>
  );
};

export default Clients;