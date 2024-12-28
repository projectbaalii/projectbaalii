import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Hero from "./components/Hero";
import { filterJobs } from "./utils/filters";

import './App.css'
import JobList from "./components/JobList";
import { jobs } from "./data/jobs";


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredJobs = filterJobs(jobs, searchQuery);

  return (
    <div>
      <MainLayout>
        <Hero onSearch={setSearchQuery} />
        <JobList jobs={filteredJobs} />
      </MainLayout>
    </div>
  )
}

export default App;
