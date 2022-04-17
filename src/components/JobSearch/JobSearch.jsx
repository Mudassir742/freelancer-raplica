import React from "react";
import * as Icon from "@tabler/icons";

const JobSearch = () => {
  return (
    <section className="job-search shadow my-3 mx-2">
      <div className="input-section h-100 p-1 d-flex flex-column flex-lg-row  justify-content-between">
        <div className="input-content h-100 h-lg-auto d-flex flex-column flex-lg-row justify-content-lg-start  justify-content-evenly">
           <div className="input-field d-flex align-items-center mx-2">
          <Icon.IconSearch color="#ccc" />
          <input
            type="text"
            placeholder="Search Keyword"
            className="w-75 mx-2 px-1"
          />
        </div>
        <div className="divider"></div>
        <div className="online-jobs mx-2">
          <Icon.IconMapPin color="#ccc" />
          <span className="mx-3">Online Job</span>
        </div>
        </div>
        <button className="search-btn mt-2 mt-lg-0 py-2">Search</button>
      </div>
    </section>
  );
};

export default JobSearch;
