import React, { useState } from 'react';
import './RegistrationForm.css';

const AmbassadorForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    cnic: '',
    email: '',
    studentId: '',
    subjectOfStudy: '',
    yearOfStudy: '',
    cellNo1: '',
    cellNo2: '',
    instituteName: '',
    residentialAddress: '',
    district: '',
    profilePicture: null,
    studentIdCard: null,
    fieldOfInterest: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        fieldOfInterest: [...formData.fieldOfInterest, value],
      });
    } else {
      setFormData({
        ...formData,
        fieldOfInterest: formData.fieldOfInterest.filter(
          (interest) => interest !== value
        ),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to server or API)
    console.log(formData);
  };

  return (
    <div className="form-container ">
      <h2 className="form-title">ACP Youth Ambassador Programme</h2>
      <p className="form-subtitle">
        Access to ACP Facilities | Collaborations | Volunteer & Internship
        Initiatives | Performances In International Festivals | Networking
        Opportunities
      </p>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="fullName">Name:</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="fatherName">Father Name:</label>
            <input
              type="text"
              className="form-control"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleInputChange}
              placeholder="Father Full Name"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label htmlFor="cnic">CNIC No:</label>
            <input
              type="text"
              className="form-control"
              name="cnic"
              value={formData.cnic}
              onChange={handleInputChange}
              placeholder="1234567891234"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="ex: abc@gmail.com"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label htmlFor="studentId">Student ID No:</label>
            <input
              type="text"
              className="form-control"
              name="studentId"
              value={formData.studentId}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="subjectOfStudy">Subject of Study:</label>
            <input
              type="text"
              className="form-control"
              name="subjectOfStudy"
              value={formData.subjectOfStudy}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label htmlFor="yearOfStudy">Year of Study:</label>
            <input
              type="text"
              className="form-control"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="cellNo1">Cell No 1:</label>
            <input
              type="text"
              className="form-control"
              name="cellNo1"
              value={formData.cellNo1}
              onChange={handleInputChange}
              placeholder="03001234567"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label htmlFor="cellNo2">Cell No 2:</label>
            <input
              type="text"
              className="form-control"
              name="cellNo2"
              value={formData.cellNo2}
              onChange={handleInputChange}
              placeholder="03001234567"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="instituteName">Institute Name:</label>
            <input
              type="text"
              className="form-control"
              name="instituteName"
              value={formData.instituteName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label htmlFor="residentialAddress">Residential Address:</label>
            <input
              type="text"
              className="form-control"
              name="residentialAddress"
              value={formData.residentialAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="district">District:</label>
            <input
              type="text"
              className="form-control"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label>Upload Your Documents:</label>
            <label htmlFor="profilePicture">Profile Picture:</label>
            <input
              type="file"
              className="form-control-file"
              name="profilePicture"
              onChange={handleFileChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="studentIdCard">Student ID Card:</label>
            <input
              type="file"
              className="form-control-file"
              name="studentIdCard"
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <label>Field of Interest:</label>
            <div className="interest-checkboxes">
              <label>
                <input
                  type="checkbox"
                  name="fieldOfInterest"
                  value="Theatre"
                  onChange={handleCheckboxChange}
                />{' '}
                Theatre
              </label>
              <label>
                <input
                  type="checkbox"
                  name="fieldOfInterest"
                  value="Music"
                  onChange={handleCheckboxChange}
                />{' '}
                Music
              </label>
              <label>
                <input
                  type="checkbox"
                  name="fieldOfInterest"
                  value="Dance"
                  onChange={handleCheckboxChange}
                />{' '}
                Dance
              </label>
              <label>
                <input
                  type="checkbox"
                  name="fieldOfInterest"
                  value="Fine Arts"
                  onChange={handleCheckboxChange}
                />{' '}
                Fine Arts
              </label>
              <label>
                <input
                  type="checkbox"
                  name="fieldOfInterest"
                  value="Textile Design"
                  onChange={handleCheckboxChange}
                />{' '}
                Textile Design
              </label>
              <label>
                <input
                  type="checkbox"
                  name="fieldOfInterest"
                  value="Graphic Design"
                  onChange={handleCheckboxChange}
                />{' '}
                Graphic Design
              </label>
              <label>
                <input
                  type="checkbox"
                  name="fieldOfInterest"
                  value="Photography"
                  onChange={handleCheckboxChange}
                />{' '}
                Photography
              </label>
              <label>
                <input
                  type="checkbox"
                  name="fieldOfInterest"
                  value="Videography"
                  onChange={handleCheckboxChange}
                />{' '}
                Videography
              </label>
              <label>
                <input
                  type="checkbox"
                  name="fieldOfInterest"
                  value="PR"
                  onChange={handleCheckboxChange}
                />{' '}
                PR
              </label>
              <label>
                <input
                  type="checkbox"
                  name="fieldOfInterest"
                  value="Community Welfare"
                  onChange={handleCheckboxChange}
                />{' '}
                Community Welfare
              </label>
              <label>
                <input
                  type="checkbox"
                  name="fieldOfInterest"
                  value="Production"
                  onChange={handleCheckboxChange}
                />{' '}
                Production
              </label>
              <label>
                <input
                  type="checkbox"
                  name="fieldOfInterest"
                  value="Direction"
                  onChange={handleCheckboxChange}
                />{' '}
                Direction
              </label>
              <label>
                <input
                  type="checkbox"
                  name="fieldOfInterest"
                  value="Cinematography"
                  onChange={handleCheckboxChange}
                />{' '}
                Cinematography
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AmbassadorForm;
