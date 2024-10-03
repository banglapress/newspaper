import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const JobDetailPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(
          `https://jeebisa.vercel.app/jobs/${jobId}`
        );
        setJob(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-16">
      <h1>{job.jobTitle}</h1>
      {/* Use dangerouslySetInnerHTML to render HTML content */}
      <div dangerouslySetInnerHTML={{ __html: job.jobDescription }} />
      <h3>Responsibilities:</h3>
      <div dangerouslySetInnerHTML={{ __html: job.jobResponsibility }} />
      <h3>Skills Required:</h3>
      <div dangerouslySetInnerHTML={{ __html: job.jobSkillRequirement }} />
      <h3>Special Requirements:</h3>
      <div dangerouslySetInnerHTML={{ __html: job.jobSpecialRequirement }} />
      <div>
        <img src={job.image} alt="image" />
      </div>
      {/* Add any additional job details as needed */}
    </div>
  );
};

export default JobDetailPage;
