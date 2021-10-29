import React from "react";
import data from "../assets/data.json";

export default function Main() {
  return (
    <div className="main-bg">
      <span className="container text-light bolder h1">People</span>
      <div className="d-sm-flex justify-content-between align-items-center pt-4  container">
        {data.lists.map((x) => {
          return (
            <div
              className="btn-group border border-secondary rounded-pill p-3 py-2 sm-width"
              role="group"
            >
              <button className=" btn text-light bold btn_setting">{x}</button>
            </div>
          );
          // }
        })}
      </div>

      <div className="d-sm-flex justify-content-between align-items-start pt-4 container ">
        <div className="d-sm-block sm-margin width_user">
          <div className="shadow-sm d-block mx-3 my-5 mb-0 pb-0 w-40 rounded-lg smviewb">
            {data.users.map((user) => {
              return (
                <div className="my-4 mt-4 border border-dark rounded-lg p-3 mb-5 height-user">
                  <div className="d-sm-flex justify-content-start align-items-center">
                    <img
                      src={user.img}
                      alt="user"
                      className="image_users rounded-lg"
                    />
                    <div className="d-sm-block mx-2">
                      <span className="text-white h4">{user.name}</span>
                      <span className="text_id h6">{user.id}</span>
                    </div>
                  </div>
                  <p className="text-white px-1">{user.description}</p>
                  <div
                    className={
                      "btn rounded-pill border-0 bg-transparent color_gradient " +
                      (user.follow === "Follow" ? "active_follow" : "")
                    }
                  >
                    {user.follow}
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className="shadow-sm bg-body d-flex justify-content-between align-items-start mx-3 my-5 mb-0 p-4 pb-0 w-40 bg-white rounded-lg"></div> */}
        </div>
        <div className="d-sm-block overflow-hid">
          <div className="display-grid overflow_image ">
            {data.images[0].map((image) => {
              return (
                <img
                  src={image}
                  alt="img"
                  className="g-col-5 g-col-sm-5 width_img "
                />
              );
            })}
            <div className="shuffle g-col-1 g-col-md-1 width_img d-flex flex-column align-items-center justify-content-center">
              <img src="/icons/shuffle.png" alt="shuffle" />
              <span>Shuffle</span>
            </div>
          </div>
          <div className="display-grid overflow_image ">
            {data.images[1].map((image) => {
              return (
                <img
                  src={image}
                  alt="img"
                  className="g-col-5 g-col-sm-5 width_img "
                />
              );
            })}
            <div className="shuffle g-col-1 g-col-md-1 width_img d-flex flex-column align-items-center justify-content-center">
              <img src="/icons/shuffle.png" alt="shuffle" />
              <span>Shuffle</span>
            </div>
          </div>
          <div className="display-grid overflow_image ">
            {data.images[2].map((image) => {
              return (
                <img
                  src={image}
                  alt="img"
                  className="g-col-5 g-col-sm-5 width_img "
                />
              );
            })}
            <div className="shuffle g-col-1 g-col-md-1 width_img d-flex flex-column align-items-center justify-content-center">
              <img src="/icons/shuffle.png" alt="shuffle" />
              <span>Shuffle</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
