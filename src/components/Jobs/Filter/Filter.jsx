import React from "react";

const Filter = ({ showFilter, setshowFilter }) => {

  return (
    <div className={showFilter ? "filter-container" : "hidden"}>
      <div className="filter-content p-4 w-100 shadow">
        <div className="filter-header mb-5 d-flex align-items-center justify-content-between">
          <h5 className="filter-heading text-center">My recent searches</h5>
          <div
            className="filter-cross d-lg-none fs-2"
            onClick={(e) => setshowFilter(false)}
          >
            x
          </div>
        </div>
        <div className="filter-divider my-4"></div>

        <div className="filter-body w-100">
          <div className="filter-options">
            <h5 className="mb-4">Filter by:</h5>
            <div className="budget-filter">
              <span className="fw-bold mb-3 d-block">Budget</span>
              <form className="budget-form">
                <div className="price d-flex align-items-center">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox" className="mx-2 d-block">
                    Fixed Price Projects
                  </label>
                </div>
                <div className="min-max d-flex align-items-center justify-content-between">
                  <input type="text" placeholder="min" />
                  <span>to</span>
                  <input type="text" placeholder="max" />
                </div>
                <div className="price  d-flex align-items-center">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox" className="mx-2 d-block">
                    Hourly Projects
                  </label>
                </div>
                <div className="min-max d-flex align-items-center justify-content-between">
                  <input type="text" placeholder="min" />
                  <span>to</span>
                  <input type="text" placeholder="max" />
                </div>
                <select
                  class="form-select form-select-sm py-2 mb-3"
                  aria-label=".form-select-sm example"
                >
                  <option selected>All Durations</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div className="price  d-flex align-items-center">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox" className="mx-2 d-block">
                    Contests
                  </label>
                </div>
                <div className="min-max d-flex align-items-center justify-content-between">
                  <input type="text" placeholder="min" />
                  <span>to</span>
                  <input type="text" placeholder="max" />
                </div>
                <div className="filter-divider my-4"></div>
                <div className="types">
                  <span className="d-block fw-bold mb-3">Type</span>
                  <div className="price  d-flex align-items-center">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="mx-2 d-block">
                      Local Jobs
                    </label>
                  </div>
                  <div className="price  d-flex align-items-center">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="mx-2 d-block">
                      Feature Jobs
                    </label>
                  </div>
                  <div className="price  d-flex align-items-center">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="mx-2 d-block">
                      Recruiter Jobs
                    </label>
                  </div>
                  <div className="price  d-flex align-items-center">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="mx-2 d-block">
                      Full Time Jobs
                    </label>
                  </div>
                </div>
                <div className="filter-divider my-4"></div>
                <div className="skills">
                  <span className="d-block fw-bold mb-3">Skill</span>
                  <div className="price  d-flex align-items-center">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="mx-2 d-block">
                      .NET 5.0/6
                    </label>
                  </div>
                  <div className="price  d-flex align-items-center">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="mx-2 d-block">
                      .NET
                    </label>
                  </div>
                  <div className="price  d-flex align-items-center">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="mx-2 d-block">
                      PHP
                    </label>
                  </div>
                  <div className="price  d-flex align-items-center">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="mx-2 d-block">
                      HTML
                    </label>
                  </div>
                  <div className="price  d-flex align-items-center">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="mx-2 d-block">
                      CSS
                    </label>
                  </div>

                  <div className="add-input d-flex align-items-center justify-content-between">
                    <input
                      type="text"
                      placeholder="Or enter skill"
                      className="m-0"
                    />
                    <span>+</span>
                  </div>
                </div>
                <div className="filter-divider my-4"></div>
                <div className="skills">
                  <span className="d-block fw-bold mb-3">Languages</span>
                  <div className="price  d-flex align-items-center">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="mx-2 d-block">
                      English
                    </label>
                  </div>
                  <div className="price  d-flex align-items-center">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="mx-2 d-block">
                      Spanish
                    </label>
                  </div>
                  <div className="price  d-flex align-items-center">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="mx-2 d-block">
                      German
                    </label>
                  </div>
                  <div className="price  d-flex align-items-center">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="mx-2 d-block">
                      French
                    </label>
                  </div>
                  <div className="price  d-flex align-items-center">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="mx-2 d-block">
                      Portuguese
                    </label>
                  </div>
                  <div className="add-input d-flex align-items-center justify-content-between">
                    <input
                      type="text"
                      placeholder="Or enter skill"
                      className="m-0 border-0"
                    />
                    <span>+</span>
                  </div>
                </div>
                <div className="filter-divider my-4"></div>
                <div className="job-State">
                  <span className="fw-bold mb-3 d-block">Job State</span>
                  <div class="form-check">
                    <div className="radio-btns">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        checked
                      />
                      <label
                        class="form-check-label fw-bold"
                        for="flexRadioDefault1"
                      >
                        All open jobs
                      </label>
                    </div>

                    <div className="radio-btns">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label fw-bold"
                        for="flexRadioDefault1"
                      >
                        All open and closed <br /> jobs
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
