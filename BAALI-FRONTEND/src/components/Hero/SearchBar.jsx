// // import React from 'react';
// import { Search, MapPin } from 'lucide-react';

// const SearchBar = ({ onSearch }) => {
//   return (
//     <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
//       <div className="relative flex-grow">
//         <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//         <input
//           type="text"
//           placeholder="Job title or keyword"
//           className="w-full px-4 py-4 pl-12 rounded-lg border-2 border-transparent focus:border-primary bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none"
//           onChange={(e) => onSearch(e.target.value)}
//         />
//       </div>
//       <div className="relative flex-grow">
//         <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//         <input
//           type="text"
//           placeholder="Location"
//           className="w-full px-4 py-4 pl-12 rounded-lg border-2 border-transparent focus:border-primary bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none"
//         />
//       </div>
//       <button className="bg-primary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
//         Search Jobs
//       </button>
//     </div>
//   );
// };

// export default SearchBar;
