import React from "react";
import * as Icon from "@tabler/icons";

const JobSearch = () => {
  return (
    <section className="job-search shadow my-3 mx-2">
      <div className="input-section h-100 px-1 py-3 d-flex flex-column justify-content-between">
        <div className="input-field d-flex align-items-center mx-2">
          <Icon.IconSearch color="#ccc" />
          <input
            type="text"
            placeholder="Search Keyword"
            className="w-75 mx-2 px-1"
          />
        </div>
        <div className="divider"></div>
        <div className="online-jobs mx-2 d-flex align-items-center">
          <Icon.IconMapPin color="#ccc" />
          <span className="mx-3">Online Job</span>
        </div>
      </div>
    </section>
  );
};

export default JobSearch;
