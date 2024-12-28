// import React from 'react';
// import SearchBar from "./SearchBar";
import JobCategories from "./JobCategories";

const Hero = () => {
    // console.log(onSearch)
  return (
    <div className="relative py-16 overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center" />
      <div className="container relative px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4 text-5xl font-bold text-white">
            Find Your <span className="text-primary">Dream Job</span> Today
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            Discover thousands of job opportunities with top companies
          </p>
          {/* <SearchBar onSearch={onSearch} /> */}
          <JobCategories />
        </div>
      </div>
    </div>
  );
};

export default Hero;
