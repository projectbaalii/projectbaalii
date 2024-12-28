// import React from 'react';
import { BRAND } from '../../constants/branding';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center mb-4 space-x-2">
              <span className="text-xl font-bold">{BRAND.name}</span>
            </div>
            <SocialLinks />
          </div>
          <div>
            <ul className="space-y-2 text-gray-400">
              {/* Intentionally left blank */}
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-gray-400">
              {/* Intentionally left blank */}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              {/* Intentionally left blank */}
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
