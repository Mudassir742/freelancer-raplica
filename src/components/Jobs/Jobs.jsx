import React from "react";

import Filter from "./Filter/Filter";
import JobList from "./JobList/JobList";

import "./Jobs.css";

const Jobs = () => {
  return (
    <div className="jobs-container d-flex align-items-center justify-content-center">
      <div className="jobs-content">
        <Filter />
        <JobList />
      </div>
    </div>
  );
};

export default Jobs;
