import React from "react";
import * as Icon from "@tabler/icons";

import { jobListsData } from "../../../data/jobsData";

const JobList = ({ showFilter, setShowFilter }) => {
  return (
    <div className="jobs-list-section shadow">
      <div className="jobs-list-header w-100 p-4 my-2 border-bottom d-flex align-items-center justify-content-between">
        <div className="total-jobs">
          <span>12,092 jobs found, pricing in USD</span>
        </div>
        <div className="pagination d-none d-lg-flex">
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
        <div
          className="filter-button d-lg-none d-block"
          onClick={(e) => setShowFilter(!showFilter)}
        >
          <Icon.IconAdjustmentsHorizontal/>
        </div>
      </div>
      {jobListsData &&
        jobListsData.map((job, index) => {
          return (
            <div className="jobs-body mx-4 py-4 border-bottom">
              <div className="job-content-container d-flex justify-content-between">
                <div className="left-col">
                  <div className="job-heading-section d-flex align-items-center">
                    <span className="title fw-bold d-block">{job.title}</span>
                    <span className="time mx-2 d-block">{job.time}</span>
                  </div>
                  <div className="job-description my-3">{job.description}</div>
                  <div className="jobs-tag d-flex align-items-center flex-wrap">
                    {job.tags &&
                      job.tags.map((tag, tagIndex) => {
                        return <span key={tagIndex}>{tag.tag}</span>;
                      })}
                  </div>
                </div>
                <div className="right-col">
                  <span className="price fw-bold">{job.price}</span>
                  <span className="d-none d-lg-block my-3">{job.bids}</span>
                  <div className="bid-btn">
                    <button>Bid now</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default JobList;
