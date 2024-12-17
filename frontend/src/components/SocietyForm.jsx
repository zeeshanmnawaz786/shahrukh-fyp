import React, { useState } from "react";
import "./SocietyForm.css";
import axios from "axios";

const SocietyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    whatsapp: false,
    district: "",
    institution: "",
    registeredAtYAP: "",
    societies: [],
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const societiesList = [
    "Readers & Writers",
    "Dramatic & Alliance",
    "Beats & Buzz",
    "Sports",
    "Science & Tech",
    "Arts & Culture",
    "Social Impact",
    "Entrepreneurship",
    "Finance",
    "Debating & Public Speaking",
    "Psych Aquad",
    "International Relations",
    "Media & Journalism",
    "Gaming & Esports",
    "Music",
    "Community Service",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setFormData((prev) => ({
          ...prev,
          societies: [...prev.societies, value],
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          societies: prev.societies.filter((society) => society !== value),
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    const {
      name,
      email,
      phoneNumber,
      district,
      institution,
      registeredAtYAP,
      societies,
    } = formData;

    const newErrors = {};

    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!phoneNumber) newErrors.phoneNumber = "Phone number is required.";
    if (!district) newErrors.district = "District is required.";
    if (!institution) newErrors.institution = "Institution name is required.";
    if (!registeredAtYAP)
      newErrors.registeredAtYAP = "Please select your YAP registration status.";
    if (societies.length === 0)
      newErrors.societies = "Please select at least one society.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/societyRegister",
        formData
      );

      if (response.data.success) {
        setSuccess("Registration successful!");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          whatsapp: false,
          district: "",
          institution: "",
          registeredAtYAP: "",
          societies: [],
        });
      } else {
        setErrors({
          general:
            response.data.message || "Something went wrong, please try again.",
        });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrors({ general: "Server error. Please try again later." });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="society-form">
      <h1>YAP Society Registration</h1>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number (WhatsApp)</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        {errors.phoneNumber && (
          <p className="error-message">{errors.phoneNumber}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="district">District</label>
        <input
          type="text"
          id="district"
          name="district"
          value={formData.district}
          onChange={handleChange}
          required
        />
        {errors.district && <p className="error-message">{errors.district}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="institution">Institution Name</label>
        <input
          type="text"
          id="institution"
          name="institution"
          value={formData.institution}
          onChange={handleChange}
          required
        />
        {errors.institution && (
          <p className="error-message">{errors.institution}</p>
        )}
      </div>

      <div className="form-group">
        <label>Are you already registered at YAP?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="registeredAtYAP"
              value="yes"
              checked={formData.registeredAtYAP === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="registeredAtYAP"
              value="no"
              checked={formData.registeredAtYAP === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div>
        {errors.registeredAtYAP && (
          <p className="error-message">{errors.registeredAtYAP}</p>
        )}
      </div>

      <div className="form-group">
        <label>Which society do you want to join?</label>
        <div className="checkbox-group">
          {societiesList.map((society, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name="societies"
                value={society}
                checked={formData.societies.includes(society)}
                onChange={handleChange}
              />
              {society}
            </label>
          ))}
        </div>
        {errors.societies && (
          <p className="error-message">{errors.societies}</p>
        )}
      </div>

      <button type="submit" className="submit-btn">
        Submit
      </button>

      {errors.general && (
        <p
          style={{
            color: "red",
            backgroundColor: "#f8d7da",
            border: "1px solid red",
            fontSize: "14px",
            padding: "5px",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          {errors.general}
        </p>
      )}
    </form>
  );
};

export default SocietyForm;
