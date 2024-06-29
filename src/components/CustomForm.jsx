import React, { useState } from "react";
import Button from "./Button";
import LightGreenArrowCircle from "/src/assets/images/LightGreenArrowCircle.png";

const CustomForm = () => {
  const [userMessage, setUserMessage] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
    agree: false,
  });

  const { email, firstName, lastName, message, agree } = userMessage;

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setUserMessage((prevState) => ({
      ...prevState,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(userMessage);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-lg">
      <div>
        <label className="block mb-2 font-dm-sans font-medium" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label
          className="block mb-2 font-dm-sans font-medium"
          htmlFor="firstName"
        >
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label
          className="block mb-2 font-dm-sans font-medium"
          htmlFor="lastName"
        >
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label
          className="block mb-2 font-dm-sans font-medium"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
        ></textarea>
      </div>
      <div className="grid grid-cols">
        <input
          id="agree"
          type="checkbox"
          checked={agree}
          onChange={handleChange}
          className="h-4 w-4 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
        />
        <label className="font-dm-sans text-xs ml-6 -mt-5" htmlFor="agree">
          I agree to receiving payment news and trends from Inpay, including
          updates to our products and services. I am aware that I can withdraw
          this consent at any time by contacting Inpay or unsubscribing via
          email. I agree to Inpay processing my personal data in accordance with
          its 
          <a className="ml-1 underline" href="#">
            Privacy Policy.
          </a>
        </label>
      </div>
      <Button
        backgroundGradient="linear-gradient(264.61deg, #24343E -97.02%, #5AAF87 133.21%)"
        width="160px"
        height="50px"
        buttonBorderRadius="10px"
        imgSrc={LightGreenArrowCircle}
        text="Submit"
        fontSize="16px"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default CustomForm;
