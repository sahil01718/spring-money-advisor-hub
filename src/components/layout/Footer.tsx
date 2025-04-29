
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-spring-green rounded-md h-8 w-8 flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="font-bold text-lg">Spring Money</span>
            </div>
            <p className="text-gray-600 mb-4">
              Simplifying finances for everyday Indians through trusted advice and education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-spring-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-spring-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-spring-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-spring-green transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-spring-green transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-spring-green transition-colors">Press</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-spring-green transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">For Advisors</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-spring-green transition-colors">Join as an Advisor</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-spring-green transition-colors">Advisor Resources</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-spring-green transition-colors">Success Stories</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-spring-green transition-colors">FAQs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-spring-green transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-spring-green transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-spring-green transition-colors">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-spring-green transition-colors">SEBI Registration</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Spring Money. All rights reserved. SEBI Registration No: INA000012345
          </p>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-500 hover:text-spring-green text-sm transition-colors">
              Privacy
            </Link>
            <Link to="/" className="text-gray-500 hover:text-spring-green text-sm transition-colors">
              Terms
            </Link>
            <Link to="/" className="text-gray-500 hover:text-spring-green text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
