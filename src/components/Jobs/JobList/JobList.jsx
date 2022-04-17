import React from "react";
import { jobListsData } from "../../../data/jobsData";

const JobList = () => {
  return (
    <div className="jobs-list-section shadow">
      <div className="jobs-list-header w-100 p-4 my-2 border-bottom d-flex align-items-center justify-content-between">
        <div className="total-jobs">
          <span>12,092 jobs found, pricing in USD</span>
          <div className="pagination"></div>
          <div className="filter-button d-lg-none d-block">Filter</div>
        </div>
      </div>
      <div className="jobs-body mx-4 py-4 border-bottom">
        <div className="job-content-container d-flex justify-content-between">
          <div className="left-col">
            <div className="job-heading-section d-flex align-items-center">
              <span className="title fw-bold d-block">Customize vpn app</span>
              <span className="time mx-2 d-block">6 days left</span>
            </div>
            <div className="job-description my-3">
              I have a vpn app i want it to be customized from the previous
              version of the code and add some features to it.Customize themeadd
              buttons etc
            </div>
            <div className="jobs-tag d-flex align-items-center flex-wrap">
              <span>Android Development</span>
              <span>Android Development</span>
              <span>Android Development</span>
              <span>Android Development</span>
              <span>Android Development</span>
            </div>
          </div>
          <div className="right-col">
            <span className="price fw-bold">$20 - $164 / hr</span>
            <span className="d-block my-3">0 bids</span>
            <div className="bid-btn">
              <button>Bid now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
