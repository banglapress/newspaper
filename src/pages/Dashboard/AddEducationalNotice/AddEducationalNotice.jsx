import { useState } from "react";
import axios from "axios";
import "./AddEducationalNotice.css";

const AddEducationalNotice = () => {
  // State for storing educational notice data
  const [noticeData, setNoticeData] = useState({
    noticeTitle: "",
    noticeDescription: "",
    noticeCategory: "",
    noticeDate: "",
    noticeInstitute: "",
    noticeLocation: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNoticeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/educationalNotices", noticeData);
      if (response.status === 201) {
        alert("Educational notice added successfully!");
        setNoticeData({
          noticeTitle: "",
          noticeDescription: "",
          noticeCategory: "",
          noticeDate: "",
          noticeInstitute: "",
          noticeLocation: "",
        });
      }
    } catch (error) {
      console.error("Error adding educational notice:", error);
      alert("Failed to add educational notice. Please try again.");
    }
  };

  return (
    <div className="add-notice-container">
      <h2 className="add-notice-title">Add Educational Notice</h2>
      <form onSubmit={handleSubmit} className="add-notice-form">
        <div className="form-group">
          <label htmlFor="noticeTitle">Notice Title:</label>
          <input
            type="text"
            id="noticeTitle"
            name="noticeTitle"
            value={noticeData.noticeTitle}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="noticeDescription">Notice Description:</label>
          <textarea
            id="noticeDescription"
            name="noticeDescription"
            value={noticeData.noticeDescription}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="noticeCategory">Notice Category:</label>
          <input
            type="text"
            id="noticeCategory"
            name="noticeCategory"
            value={noticeData.noticeCategory}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="noticeDate">Date of Notice:</label>
          <input
            type="date"
            id="noticeDate"
            name="noticeDate"
            value={noticeData.noticeDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="noticeInstitute">Institute:</label>
          <input
            type="text"
            id="noticeInstitute"
            name="noticeInstitute"
            value={noticeData.noticeInstitute}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="noticeLocation">Location:</label>
          <input
            type="text"
            id="noticeLocation"
            name="noticeLocation"
            value={noticeData.noticeLocation}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Add Notice
        </button>
      </form>
    </div>
  );
};

export default AddEducationalNotice;
