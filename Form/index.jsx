"use client"; // if using next js

import { useState, useLayoutEffect } from "react";

const index = () => {
  const [state, setState] = useState({
    username: "John Doe",
    email: "johndoe@example.com",
    mobileNumber: "1234567890",
    resume: "",
    skills: "React, JavaScript, HTML, CSS",
    experience: "3 years",
    education: "Bachelor's Degree in Computer Science",
    message: "I am interested in applying for this job opportunity.",
  });
  const formFields = [
    {
      label: "Full Name:",
      id: "username",
      type: "text",
      value: state.username,
      required: true,
    },
    {
      label: "Email:",
      id: "email",
      type: "email",
      value: state.email,
      required: true,
    },
    {
      label: "Phone Number:",
      id: "mobileNumber",
      type: "tel",
      value: state.mobileNumber,
      required: true,
    },
    {
      label: "Resume:",
      id: "resume",
      type: "file",
      accept: ".pdf",
      value: state.resume,
      required: true,
    },
    {
      label: "Work Experience:",
      id: "experience",
      type: "textarea",
      value: state.experience,
      required: true,
    },
    {
      label: "Education:",
      id: "education",
      type: "textarea",
      value: state.education,
      required: true,
    },
    {
      label: "Skills:",
      id: "skills",
      type: "textarea",
      value: state.skills,
      required: true,
    },
    {
      label: "Cover Letter:",
      id: "message",
      type: "textarea",
      value: state.message,
      required: true,
    },
  ];

  useLayoutEffect(() => {
    const x = localStorage.getItem("Job_Portal-User");
    const data = JSON.parse(x);
    console.log("x", data);
    const {
      username,
      email,
      mobileNumber,
      resume,
      experience,
      education,
      skils,
    } = data;
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="ApplyForm m50 flex">
      <h1 className="highlight">
        Job <span>Application</span>{" "}
      </h1>
      <form onSubmit={handleSubmit} className="job-apply-form">
        {formFields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                value={field.value}
                name={field.id}
                onChange={(e) => handleChange(e)}
                required={field.required}
              />
            ) : (
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                value={field.value}
                onChange={(e) => handleChange(e)}
                required={field.required}
                accept={field.accept}
              />
            )}
          </div>
        ))}
        <button type="submit" className="btnCss btn-primary">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default index;

