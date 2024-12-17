import React, { useState } from 'react';
import './SocietyForm.css'; // Add styles similar to your provided design

const SocietyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    whatsapp: false,
    district: '',
    institution: '',
    registeredAtYAP: '',
    societies: [],
  });

  const societiesList = [
    'Readers & Writers',
    'Dramatic & Alliance',
    'Beats & Buzz',
    'Sports',
    'Science & Tech',
    'Arts & Culture',
    'Social Impact',
    'Entrepreneurship',
    'Finance',
    'Debating & Public Speaking',
    'Psych Aquad',
    'International Relations',
    'Media & Journalism',
    'Gaming & Esports',
    'Music',
    'Community Service',
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData((prev) => ({ ...prev, societies: [...prev.societies, value] }));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="society-form">
      <h1>YAP Society Registration</h1>

      {/* Name Input */}
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
      </div>

      {/* Email Input */}
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
      </div>

      {/* Phone Number Input */}
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
      </div>

      {/* District Input */}
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
      </div>

      {/* Institution Input */}
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
      </div>

      {/* Registered at YAP Input */}
      <div className="form-group">
        <label>Are you already registered at YAP?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="registeredAtYAP"
              value="yes"
              checked={formData.registeredAtYAP === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="registeredAtYAP"
              value="no"
              checked={formData.registeredAtYAP === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      {/* Societies Checkboxes */}
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
      </div>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default SocietyForm;
