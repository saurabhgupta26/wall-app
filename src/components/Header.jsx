import React from "react";

export default function Header() {
  return (
    <div className="header_bg navbar">
      <div className="d-sm-flex justify-content-between container align-items-center">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between my-4 align-items-center">
            <img src="/icons/logo.png" alt="logo" className="logo_head" />
            <div className="border rounded-pill d-flex justify-content-between align-items-center p-1 border-secondary opacity-75 px-2 mx-2">
              <a href="##" className="text-white link mx-2 fs-6">
                Explore
              </a>
              <img
                src="/icons/compass.svg"
                alt="compass"
                className="icons_top"
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center my-4">
          <a href="##" className="link mx-2">
            <img
              src="/icons/lightening.png"
              alt="light"
              className="icons_top icons_top1 mx-2"
            />
          </a>

          <img src="/icons/cartoon_dp.jpeg" alt="avatar" className="avatar" />
          <a href="##" className="text-white link mx-4">
            ibadatcreates
          </a>
        </div>
      </div>
      {/* <div className="container py-5">
        <div className="d-block mxy-4 my-5">
          <h1 className="h1 boldest text-white my-2"> Find Your Dream Job</h1>
          <p className="fs-6 lighter text-white my-2">
            Browse through thousands of full-time or part-time jobs near you
          </p>
        </div>
      </div> */}
    </div>
  );
}
