// import React from 'react';
import { jobCategories } from '../../constants/categories';

const JobCategories = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-12 md:grid-cols-4">
      {jobCategories.map(({ icon: Icon, label, count }) => (
        <div
          key={label}
          className="p-4 transition-colors rounded-lg cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-white/20"
        >
          <Icon className="w-8 h-8 mb-2 text-primary" />
          <h3 className="font-semibold text-white">{label}</h3>
          <p className="text-sm text-gray-400">{count} jobs</p>
        </div>
      ))}
    </div>
  );
};

export default JobCategories;