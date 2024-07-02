import React, { useState } from "react";
import Button from "./Button";
import LightGreenArrowCircle from "/src/assets/images/LightGreenArrowCircle.png";
import xss from "xss";

const CustomForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = "Invalid email address";
    }
    if (formData.firstName.trim() === "") {
      errors.firstName = "First name is required";
    }
    if (formData.lastName.trim() === "") {
      errors.lastName = "Last name is required";
    }
    if (formData.message.trim() === "") {
      errors.message = "Message is required";
    }
    if (!formData.agree) {
      errors.agree = "Pls tick the checkbox to agree";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      const sanitizedData = {
        ...formData,
        email: xss(formData.email),
        firstName: xss(formData.firstName),
        lastName: xss(formData.lastName),
        message: xss(formData.message),
        agree: xss(formData.agree),
      };
      console.log("Sanitized Form Data:", sanitizedData);
      // Proceed with form submission (axios)
    }
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
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
          value={formData.firstName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName}</p>
        )}
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
          value={formData.lastName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName}</p>
        )}
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
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </div>
      <div className="grid grid-cols">
        <input
          id="agree"
          type="checkbox"
          checked={formData.agree}
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
        {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}
      </div>
      <div className="mx-4">
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
      </div>
    </form>
  );
};

export default CustomForm;
