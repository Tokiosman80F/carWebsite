import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import part from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className=" hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={part}
            className="w-1/2 absolute left-1/3 border-8 top-1/2 rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h5 className="text-red-400 font-bold">About Us</h5>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p >
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable
          </p>
          <button className="btn btn-error">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
