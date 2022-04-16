import React from "react";

const Banner = () => {
  return (
    <section className="banner-container w-100 d-flex flex-column align-items-center justify-content-center">
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
  );
};

export default Banner;
