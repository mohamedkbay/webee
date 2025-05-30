import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ContactSection from '../components/sections/ContactSection';

const Contact: React.FC = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "Contact Us | PT Doori Lestari Garment";
  }, []);

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
              title="Contact Us"
              subtitle="Let's discuss how we can bring your apparel ideas to life."
              className="mb-0"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* FAQ Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services."
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What is your minimum order quantity (MOQ)?",
                answer: "Our standard MOQ is 500 units per style. However, we may be able to accommodate smaller orders depending on the complexity of the design and our current production schedule."
              },
              {
                question: "How long does production typically take?",
                answer: "Production timelines vary based on order size, complexity, and current capacity. On average, production takes 4-6 weeks after design approval and sample confirmation."
              },
              {
                question: "Can you help with design and pattern making?",
                answer: "Yes, we offer full design and pattern-making services. Our experienced design team can help bring your concepts to life or refine existing designs to optimize for production."
              },
              {
                question: "Do you handle shipping and logistics?",
                answer: "Yes, we provide complete export handling services, including documentation, packaging, and coordination with shipping partners to ensure your products reach their destination safely and on time."
              },
              {
                question: "What quality control processes do you have in place?",
                answer: "We implement a comprehensive quality control system that includes fabric inspection, in-process quality checks, and final product inspection to ensure every garment meets our high standards."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;