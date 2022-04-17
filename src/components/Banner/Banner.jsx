import React from "react";

const Banner = () => {
  return (
    <div className="banner-parent d-flex  align-items-center justify-content-center">
      <div className="banner-content-container w-100 d-flex  align-items-center justify-content-center">
        <section className="banner-container w-100 d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between">
          <div className="top-jobs fw-bold text-light">Top Jobs</div>
          <div className="btns mt-2">
            <button className="hire-btn fw-bold text-light p-1">
              I want to Hire
            </button>
            <button className="work-btn fw-bold text-light bg-transparent p-1">
              I want to Work
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
