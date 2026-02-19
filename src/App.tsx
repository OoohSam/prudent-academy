/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Academics', href: '#academics' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-maroon p-2 rounded-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">PRUDENT <span className="text-maroon">ACADEMY</span></span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium hover:text-maroon transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-zinc-900 transition-colors"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black border-t border-zinc-800 px-4 pt-2 pb-6 space-y-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium hover:bg-maroon rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://thumbs.dreamstime.com/b/johannesburg-south-africa-october-african-children-primary-school-classroom-african-children-primary-school-classroom-117293026.jpg"
            alt="African students in classroom"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Elimu <span className="text-maroon">Haki</span>, Uwezo
            </h1>
            <p className="text-xl text-zinc-300 mb-8">
              At Prudent Academy, we provide a world-class education rooted in integrity, 
              innovation, and the pursuit of knowledge for every child.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-maroon hover:bg-maroon-dark text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
                Apply Now
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-bold transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-maroon mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <BookOpen className="w-10 h-10 text-maroon" />,
                title: "Academic Excellence",
                description: "A rigorous curriculum designed to challenge and inspire students to reach their full potential."
              },
              {
                icon: <Users className="w-10 h-10 text-maroon" />,
                title: "Inclusive Community",
                description: "A supportive environment where every student feels valued, respected, and empowered."
              },
              {
                icon: <Award className="w-10 h-10 text-maroon" />,
                title: "Character Building",
                description: "Instilling values of integrity, responsibility, and leadership in all our learners."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100 shadow-sm text-center"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-zinc-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&h=1000&auto=format&fit=crop"
                alt="Happy African student"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-maroon p-8 rounded-2xl hidden md:block">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm uppercase tracking-widest">Years of Excellence</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6">Welcome to <span className="text-maroon">Prudent Academy</span></h2>
              <p className="text-zinc-400 text-lg mb-8">
                Founded on the principles of wisdom and foresight, Prudent Academy has been 
                a beacon of quality education for over a decade. We believe that every child 
                possesses unique talents that deserve to be cultivated in a safe and 
                stimulating environment.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Modern Learning Facilities",
                  "Dedicated & Experienced Faculty",
                  "Robust Extra-curricular Programs",
                  "Safe and Secure Campus"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-maroon w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-maroon font-bold hover:gap-4 transition-all">
                Read Our Full Story <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Life at Prudent</h2>
            <p className="text-zinc-600">Capturing moments of growth, joy, and discovery.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://thumbs.dreamstime.com/b/african-schoolchildren-6079122.jpg",
              "https://media.gettyimages.com/id/143922541/photo/african-students-at-school.jpg?s=612x612&w=gi&k=20&c=nDsrny81WMsZrI1RsF1ojjEn-UYd2kK86gN935PB8oY=",
              "hhttps://t4.ftcdn.net/jpg/03/11/48/73/360_F_311487387_5jkdQsYUGmP6D8DKWJPRk4esBymRQXNL.jpgttps://t4.ftcdn.net/jpg/03/11/48/73/360_F_311487387_5jkdQsYUGmP6D8DKWJPRk4esBymRQXNL.jpg",
              "https://st2.depositphotos.com/7232356/11182/i/950/depositphotos_111828836-stock-photo-african-children-at-school.jpg",
            ].map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="aspect-square overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={ "https://media.gettyimages.com/id/143922541/photo/african-students-at-school.jpg?s=612x612&w=gi&k=20&c=nDsrny81WMsZrI1RsF1ojjEn-UYd2kK86gN935PB8oY="}
                  alt={`Student ${idx + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 bg-maroon text-white">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <p className="mb-12 text-maroon-100">
                Have questions about admissions or our programs? We're here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-maroon-200">Call Us</p>
                    <p className="font-bold">+254 701 121 054</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-maroon-200">Email Us</p>
                    <p className="font-bold">info@prudentacademy.edu</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-maroon-200">Visit Us</p>
                    <p className="font-bold">452 Kabiria, Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-maroon focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-maroon focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-maroon focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-maroon focus:border-transparent outline-none transition-all"></textarea>
                </div>
                <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <GraduationCap className="w-6 h-6 text-maroon" />
            <span className="text-xl font-bold tracking-tight">PRUDENT <span className="text-maroon">ACADEMY</span></span>
          </div>
          <p className="text-zinc-500 text-sm mb-8">
            © {new Date().getFullYear()} Prudent Academy. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
