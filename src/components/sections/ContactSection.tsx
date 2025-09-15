import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const animation = useScrollAnimation();
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('info@techshield.ly', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Thank you for your message. We will contact you soon!');
        reset();
      } else {
        alert(result.error || 'Oops! Something went wrong.');
      }
    } catch (error) {
      alert('Failed to send message. Please try again later.');
      console.error('Form submission error:', error);
    }
  };

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
            title="Work With Us"
            subtitle="Reach out and let’s explore how we can turn your vision into reality."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 dark:border-gray-700 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 dark:border-gray-700 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 dark:border-gray-700"
                  placeholder="Your company name"
                  {...register('company')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 dark:border-gray-700 ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us about your project or inquiry"
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>

{/* Contact Information + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0 mr-3" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">
                    Zawiyat al Dahmani St, Tripoli, Libya 
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail className="text-primary-600 dark:text-primary-400 flex-shrink-0 mr-3" size={20} />
                  <a
                    href="mailto:anjasprimary@gmail.com"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    info@techshield.ly
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="text-primary-600 dark:text-primary-400 flex-shrink-0 mr-3" size={20} />
                  <a
                    href="tel:+6285777222199"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    +218 92 1255124
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Info kontak bisa ditambah di sini */}
 
              <div>
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Monday - Friday</span>
                  <span className="text-gray-700 dark:text-gray-300">7:30 AM - 17:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Friday</span>
                  <span className="text-gray-700 dark:text-gray-300">7:30 AM - 16:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Sunday</span>
                  <span className="text-gray-700 dark:text-gray-300">Closed</span>
                </li>
              </ul>
            </div>
            {/* Simple map */}
            <div className="mt-6 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63439.306323957135!2d106.70477578143901!3d-6.3995883490381456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJl.%20Intan%20I%20Kampung%20Curug%2C%20Tulang%20Kuning%2C%20Gunung%20Sindur%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2C%2016340%20Indonesia!5e0!3m2!1sid!2sid!4v1748620250987!5m2!1sid!2sid"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Tech Shield Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
