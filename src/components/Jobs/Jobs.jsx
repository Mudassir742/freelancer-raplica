import React, { useState } from "react";
import * as Icon from "@tabler/icons"

import Filter from "./Filter/Filter";
import JobList from "./JobList/JobList";

import "./Jobs.css";

const Jobs = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="jobs-container d-flex align-items-center flex-column justify-content-center">
      <div className="jobs-content">
        <Filter showFilter={showFilter} setshowFilter={setShowFilter} />
        <JobList showFilter={showFilter} setShowFilter={setShowFilter} />
      </div>
      <div className="bottom-pagiantion my-5 d-flex align-items-center flex-column justify-content-center">
        <div className="results">
          <span>Showing 1 to 50 of 12,092 entires</span>
        </div>
        <div className="pagination my-4">
          <span>
            <Icon.IconPlayerSkipBack size={20} />
          </span>
          <span>
            <Icon.IconCaretLeft size={24} />
          </span>
          <span>1</span>
          <span>1</span>
          <span>1</span>
          <span>
            <Icon.IconCaretRight size={24} />
          </span>
          <span>
            <Icon.IconPlayerSkipForward size={20} />
          </span>
        </div>
      </div>
      <div className="divider w-100"></div>
    </div>
  );
};

export default Jobs;
