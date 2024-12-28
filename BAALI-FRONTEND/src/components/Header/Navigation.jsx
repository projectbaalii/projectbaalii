// import React from 'react';
import { Briefcase, Info } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { label: 'Find Jobs', icon: Briefcase },
    // { label: 'Companies', icon: Building2 },
    { label: 'About', icon: Info },
  ];

  return (
    <nav className="flex items-center space-x-8">
      <ul className="items-center hidden space-x-6 md:flex">
        {navItems.map(({ label, icon: Icon }) => (
          <li key={label}>
            <a
              href="#"
              className="flex items-center space-x-1 text-gray-300 transition-colors hover:text-primary"
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
      {/* <button className="flex items-center px-4 py-2 space-x-2 font-semibold transition-colors rounded-lg bg-primary text-secondary hover:bg-primary/90">
        <UserPlus className="w-4 h-4" />
        <span>Post a Job</span>
      </button> */}
    </nav>
  );
};

export default Navigation;