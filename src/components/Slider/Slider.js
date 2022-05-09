import React from "react";

const Slider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            src="https://storyshares.blob.core.windows.net/media/contest_1_winners.jpg"
            className="block w-full h-[90vh]"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center text-slate-800 bg-slate-100 rounded ">
            <h5 className="text-xl">You Are Mostly Welcome</h5>
            <p>
              We congratulate you to our book store you can find your book here
            </p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/09/Gateway_Billboard_B_SummerReading-5-9.jpg"
            className="block w-full h-[90vh]"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center text-slate-800 bg-slate-100 rounded ">
            <h5 className="text-xl">You Can By It </h5>
            <p>You can By Your Federate Book Hare</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://i.ibb.co/rfSF5ZS/lf.jpg"
            className="block w-full h-[90vh] "
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center text-slate-800 bg-slate-100 rounded ">
            <h5 className="text-2xl">The Book You wants to know</h5>
            <p>
              You Can imagine this and this are tof of the book store that you
              can find hare{" "}
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
