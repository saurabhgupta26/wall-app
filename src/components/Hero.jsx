import React from "react";

export default function Hero() {
  return (
    <div className="shadow-sm d-sm-flex justify-content-between align-items-center border-0 p-3 py-4 bg_hero">
      <div className="container d-sm-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-start align-items-center w-80 p-3 input_color rounded-pill border border-secondary">
          <img src="/icons/find.svg" alt="find" className="icon_2" />
          <input
            className="border-0 fs-6 w-10 bg-transparent"
            type="text"
            placeholder="Mekaverse"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center input_color p-3 rounded-pill border border-secondary">
          <div className="d-flex justify-content-between align-items-center ">
            <input
              className="border-0 fs-6 w-10 bg-transparent"
              type="text"
              placeholder="People"
            />
          </div>
          <img src="/icons/down.svg" alt="down" />
        </div>
      </div>
    </div>
  );
}
