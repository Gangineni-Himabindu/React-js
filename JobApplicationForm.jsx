import React, { useState } from 'react';
import './JobApplicationForm.css'; // Assuming you have a separate CSS file for styles

function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    skills: '',
    education: '',
    resume: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form data for submission
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('position', formData.position);
    data.append('experience', formData.experience);
    data.append('skills', formData.skills);
    data.append('education', formData.education);
    data.append('resume', formData.resume);

    // Send form data to the server (example endpoint)
    fetch('submit_application.php', {
      method: 'POST',
      body: data,
    })
      .then((response) => response.text())
      .then((result) => {
        setIsSubmitted(true);
        console.log(result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <h1>Software Job Application</h1>
      {isSubmitted ? (
        <div className="success-message">
          <h2>Application submitted successfully!</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position Applied For:</label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="experience">Years of Experience:</label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="skills">Technical Skills:</label>
            <textarea
              id="skills"
              name="skills"
              rows="4"
              value={formData.skills}
              onChange={handleChange}
              placeholder="List your technical skills"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="education">Highest Level of Education:</label>
            <select
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="highschool">High School</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="phd">Ph.D.</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="resume">Upload Resume:</label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf, .doc, .docx"
              onChange={handleFileChange}
              required
            />
          </div>
          <button type="submit">Submit Application</button>
        </form>
      )}
    </div>
  );
}

export default JobApplicationForm;
