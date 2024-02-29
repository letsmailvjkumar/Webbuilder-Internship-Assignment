import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex justify-between mt-5 items-center max-[420px]:flex-col">
      <div className="text-2xl w-72">Sign up and get exclusive special deals</div>
      <div className="max-[420px]:flex-col">
        <div className="max-[420px]:mt-5">
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-72 h-10 ps-5 outline-none border"
        />
        </div>
        <button className="bg-[rgb(27,136,244)] text-white w-28 rounded-md h-10">Sign Up</button>
      </div>
    </div>
  );
};

export default NewsLetter;
