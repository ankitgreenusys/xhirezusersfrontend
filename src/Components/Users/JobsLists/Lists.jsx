import React from "react";

const Lists = () => {
  const dta = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className="lists mt-3">
      <div className="d-flex justify-content-between listhead">
        <div className="resdel">
          <span>1-20 of 200</span>
          <span className="txt-blue ms-2">ui ux designer</span>
        </div>
        <div className="sortdel">
          <label htmlFor="sortby">sort by</label>
          <select className="txt-blue" name="sortby" id="sortby">
            <option  value="relevance">relevance</option>
            <option value="date">date</option>
          </select>
        </div>
      </div>

      {dta.map((item, idx) => (
        <div className="listbody my-3 " key={idx}>
          <div
            className={
              "atextbox py-3 listitem cursor-pointer " +
              (idx % 2 ? "atextboxborder" : "")
            }
          >
            <div className="namesec">
              <div className="d-flex justify-content-between">
                <div className="title">UI Designer</div>
                <div className="">
                  <i class="fa-regular fa-bookmark"></i>
                </div>
              </div>
            </div>
            <div className="smalldet mt-1 ">
              <span class="cmpy txt-blue">Microsoft Pvt. Ltd.</span>
              <span className="ms-3 ">
                <i class="fa-solid fa-location-dot"></i>
                <span class="ms-1 txt-muted">Delhi, India</span>
              </span>
            </div>
            <div className="mt-2 jobdescr">
              <p class="mb-0">
                Familiarity with design software and technologies e.g. Adobe
                creative suite like InDesign, Acrobat, Illustrator, Acrobat,
                After Effects, and Premiere......
              </p>
            </div>
            <div className="jobexp d-flex mt-2">
              <div className="me-2">
                <i class="fa-solid fa-briefcase"></i> 5-10 Years
              </div>
              <div className="ms-2">
                <i class="fa-solid fa-money-bills"></i> 10,000 - 20,000 PM
              </div>
            </div>
            <div className="d-flex mt-2 boxdesc">
              <div className="boxbtn">Full Time</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lists;
