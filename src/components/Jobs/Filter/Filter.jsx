import React from "react";

const Filter = () => {
  return (
    <div className="filter-container">
      <div className="filter-content">
        <div className="filter-header">
          <h5 className="filter-heading">My recent searches</h5>
        </div>
        <div className="filter-body">
          <div className="filter-options">
            <h5>Filter by:</h5>
            <div className="budget-filter">
              <span>Budget</span>
              <form className="budget-form">
                <div className="price">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox">Fixed Price Projects</label>
                  <div className="min-max">
                    <input type="text" placeholder="min" />
                    <span>to</span>
                    <input type="text" placeholder="max" />
                  </div>
                </div>
                <div className="price">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox">Hourly Projects</label>
                  <div className="min-max">
                    <input type="text" placeholder="min" />
                    <span>to</span>
                    <input type="text" placeholder="max" />
                  </div>
                </div>
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>All Durations</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div className="price">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox">Contests</label>
                  <div className="min-max">
                    <input type="text" placeholder="min" />
                    <span>to</span>
                    <input type="text" placeholder="max" />
                  </div>
                </div>

                <div className="filter-divider"></div>
                <div className="types">
                  <span>Type</span>
                  <div className="price">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Local Jobs</label>
                  </div>
                  <div className="price">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Featured Jobs</label>
                  </div>
                  <div className="price">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Recruiter Jobs</label>
                  </div>
                  <div className="price">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Full Time Jobs</label>
                  </div>
                </div>
                <div className="filter-divider"></div>
                <div className="skills">
                  <span>Skill</span>
                  <div className="price">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">.NET 5.0/6</label>
                  </div>
                  <div className="price">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">.NET</label>
                  </div>
                  <div className="price">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">PHP</label>
                  </div>
                  <div className="price">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">HTML</label>
                  </div>
                  <div className="price">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">CSS</label>
                  </div>
                  <div className="add-btn">
                    <input type="button" placeholder="Or enter skills" />
                  </div>
                </div>
                <div className="filter-divider"></div>
                <div className="languages">
                  <span>Type</span>
                  <div className="price">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">English</label>
                  </div>
                  <div className="price">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Spanish</label>
                  </div>
                  <div className="price">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Gemran</label>
                  </div>
                  <div className="price">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">French</label>
                  </div>
                  <div className="price">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Portuguese</label>
                  </div>
                  <div className="add-btn">
                    <input type="button" placeholder="Or enter skills" />
                  </div>
                </div>
                <div className="filter-divider"></div>
                <div className="job-State">
                  <span>Job State</span>
                  <div class="form-check">
                    <div className="radio-btns">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
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
                      <label class="form-check-label" for="flexRadioDefault1">
                        All open and closed <br/> jobs
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
