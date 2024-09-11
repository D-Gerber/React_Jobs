import { Link } from "react-router-dom";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false); // declaring useState so we can change the state of the description

  let description = job.description; // use let variable because it can change with each job

  if (!showFullDescription) {
    //that is an if/not ternary...if its not showing full description then run the below code.
    description = description.substring(0, 90) + "..."; // this cuts the wording to Link max of 90 characters and adds (concatenates +) the ellipse (...) to the end. Substring cuts it down
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{description}</div>

        <button
          onClick={() => setShowFullDescription((precState) => !precState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
