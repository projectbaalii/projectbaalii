// import React from "react";
import PropTypes from "prop-types";
import { Building2, MapPin, Clock, IndianRupee } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const JobCard = ({ job }) => {
  return (
    <div className="p-6 transition-shadow duration-300 bg-white border-l-4 rounded-lg shadow-md hover:shadow-lg border-primary">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="mb-2 text-xl font-bold text-secondary">{job.title}</h3>
          <div className="flex items-center mb-2 text-gray-600">
            <Building2 className="w-4 h-4 mr-2" />
            <span>{job.company}</span>
          </div>
          <div className="flex items-center mb-2 text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{job.location}</span>
          </div>
        </div>
        <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-secondary">
          {job.job_type}
        </span>
      </div>
      <p className="my-4 text-gray-600">{job.description}....</p>
      <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
        <div className="flex items-center text-gray-600">
          <IndianRupee className="w-4 h-4 mr-1" />
          <span>{job.salary}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-1" />
          <span>
            {formatDistanceToNow(new Date(job.posted), { addSuffix: true })}
          </span>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    job_type: PropTypes.string.isRequired,
    salary: PropTypes.string,
    posted: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCard;
