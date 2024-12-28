export const filterJobs = (jobs, query) => {
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) return jobs;
  
  return jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm) ||
    job.company.toLowerCase().includes(searchTerm) ||
    job.location.toLowerCase().includes(searchTerm) ||
    job.description.toLowerCase().includes(searchTerm)
  );
};
