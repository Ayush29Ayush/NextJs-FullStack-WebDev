/* eslint-disable no-unused-vars */
import React from "react";

const Body = () => {
  return (
    <div className="space-y-4 lg:flex">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
        <img
          src="../../public/assets/Blue-Shape.svg"
          alt="1st"
          className="-rotate-[45deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="../../public/assets/Pink-Shape.svg"
          alt="2nd"
          className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="../../public/assets/Purple-Shape.svg"
          alt="3rd"
          className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="../../public/assets/Hero-Model.png"
          alt="hero"
          className="absolute h-64 md:h-72 lg:h-[400px]"
        />
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight">
          Host your website in less than 5 minutes.
        </h1>
        <p>
          With Hosterr, get your website up and running in no less than 5
          minutes with the most competitive pricing packages available online.
        </p>
        <form action="" className="flex flex-col gap-5 md:flex-row">
          <input
            className="rounded-md px-4 py-3 placeholder:text-gray-500"
            type="email"
            placeholder="Enter email address"
          />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
            Join Waitlist
          </button>
        </form>
        <div className="flex gap-2 mt-1.5">
          <img src="../../public/assets/Checkmark.svg" alt="check" />
          <p className="font-lato text-gray-500">
            No spam ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
