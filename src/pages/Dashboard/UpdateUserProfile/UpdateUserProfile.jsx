import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const UpdateUserProfile = () => {
  const { user, updateUserProfile, loading } = useAuth();
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [education, setEducation] = useState("");
  const [jobStatus, setJobStatus] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  // Set initial form values from current user data
  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhoto(user.photoURL || "");
      // Assuming you have additional user info in the backend and stored in user state
      setEducation(user.education || "");
      setJobStatus(user.jobStatus || "");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      await updateUserProfile(name, photo, { education, jobStatus });
      setSuccess("Profile updated successfully.");
      navigate("/dashboard/userProfile"); // Redirect after success
    } catch (error) {
      setError("Failed to update profile. Please try again.");
      console.error(error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="update-profile-form">
      <h2>Update Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="photo">Profile Photo URL</label>
          <input
            type="text"
            id="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Enter profile photo URL"
          />
        </div>

        <div className="form-group">
          <label htmlFor="education">Education</label>
          <input
            type="text"
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            placeholder="Enter your education"
          />
        </div>

        <div className="form-group">
          <label htmlFor="jobStatus">Job Status</label>
          <input
            type="text"
            id="jobStatus"
            value={jobStatus}
            onChange={(e) => setJobStatus(e.target.value)}
            placeholder="Enter your job status"
          />
        </div>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button type="submit" className="btn-submit">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateUserProfile;
