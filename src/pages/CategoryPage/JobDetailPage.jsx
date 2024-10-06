import { Link, useParams } from "react-router-dom";
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
    return (
      <div className="text-red-500 font-bold text-center mt-10">{error}</div>
    );
  }

  if (!job) {
    return <div className="text-center text-lg mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-16 min-h-screen p-4 bengali-font">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li>
            <Link to="/" className="text-gray-500 hover:text-gray-700 text-sm">
              Home
            </Link>
          </li>
          <li>
            <span className="text-gray-500">/ jobs /</span>
          </li>
          <li>
            <Link
              to={`/jobs/category/${job.jobCategory}`}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              {job.jobCategory || "Category"}
            </Link>
          </li>
          <li>
            <span className="text-gray-500">/</span>
          </li>
          <li>
            <span className="text-sm text-gray-700 font-bold">
              {job.jobCompanyName}
            </span>
          </li>
        </ol>
      </nav>

      {/* Job Title */}
      <h1 className="text-4xl font-extrabold text-ed314f mb-4 text-center">
        {job.jobTitle}
      </h1>

      {/* Company Info */}
      <h2 className="text-2xl font-semibold text-indigo-800 mb-8 text-center">
        {job.jobCompanyName}
      </h2>

      {/* Summary Table */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-10">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Job Summary
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {job.jobVacancyNumber && (
            <div className="bg-white p-4 rounded-md shadow-sm">
              <span className="font-semibold text-gray-600">Vacancy: </span>
              {job.jobVacancyNumber}
            </div>
          )}
          {job.jobAgeLimit && (
            <div className="bg-white p-4 rounded-md shadow-sm">
              <span className="font-semibold text-gray-600">Age Limit: </span>
              {job.jobAgeLimit}
            </div>
          )}
          {job.jobLocation && (
            <div className="bg-white p-4 rounded-md shadow-sm">
              <span className="font-semibold text-gray-600">Location: </span>
              {job.jobLocation}
            </div>
          )}
          {job.jobSalary && (
            <div className="bg-white p-4 rounded-md shadow-sm">
              <span className="font-semibold text-gray-600">Salary: </span>
              {job.jobSalary}
            </div>
          )}
          {job.jobExperience && (
            <div className="bg-white p-4 rounded-md shadow-sm">
              <span className="font-semibold text-gray-600">Experience: </span>
              {job.jobExperience}
            </div>
          )}
          {job.jobLastDate && (
            <div className="bg-white p-4 rounded-md shadow-sm">
              <span className="font-semibold text-gray-600">
                Application Deadline:{" "}
              </span>
              {job.jobLastDate}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side: Job Description */}
        <div>
          {job.jobDescription && (
            <>
              <h3 className="text-xl font-bold text-cyan-800 px-2 mb-2">
                Job Description
              </h3>
              <div className="text-lg text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg shadow-md">
                <div dangerouslySetInnerHTML={{ __html: job.jobDescription }} />
              </div>
            </>
          )}

          {job.jobResponsibility && (
            <>
              <h3 className="text-xl font-bold text-cyan-800 mt-8 mb-2">
                Responsibilities
              </h3>
              <div className="text-lg text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg shadow-md">
                <div
                  dangerouslySetInnerHTML={{ __html: job.jobResponsibility }}
                />
              </div>
            </>
          )}
        </div>

        {/* Right Side: Requirements */}
        <div>
          {job.jobEducation && (
            <>
              <h3 className="text-xl font-bold text-cyan-800 mb-2">
                Education Requirements
              </h3>
              <ul className="list-disc pl-12 text-lg text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg shadow-md">
                <li dangerouslySetInnerHTML={{ __html: job.jobEducation }} />
              </ul>
            </>
          )}

          {job.jobExperience && (
            <>
              <h3 className="text-xl font-bold text-cyan-800 mt-8 mb-2">
                Experience Required
              </h3>
              <ul className="list-disc pl-12 text-lg text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg shadow-md">
                <li dangerouslySetInnerHTML={{ __html: job.jobExperience }} />
              </ul>
            </>
          )}

          {job.jobSkillRequirement && (
            <>
              <h3 className="text-xl font-bold text-cyan-800 mt-8 mb-2">
                Skills Required
              </h3>
              <div className="text-lg text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg shadow-md">
                <div
                  dangerouslySetInnerHTML={{ __html: job.jobSkillRequirement }}
                />
              </div>
            </>
          )}

          {job.jobSpecialRequirement && (
            <>
              <h3 className="text-xl font-bold text-cyan-800 mt-8 mb-2">
                Special Requirements
              </h3>
              <div className="text-lg text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg shadow-md">
                <div
                  dangerouslySetInnerHTML={{
                    __html: job.jobSpecialRequirement,
                  }}
                />
              </div>
            </>
          )}
          {job.jobApplicationProcess && (
            <>
              <h3 className="text-xl font-bold text-cyan-800 mt-8 mb-2">
                Application Process
              </h3>
              <div className="text-lg text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg shadow-md">
                <div
                  dangerouslySetInnerHTML={{
                    __html: job.jobApplicationProcess,
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Job Image */}
      {job.image && (
        <div className="mt-10 flex justify-center">
          <img
            className="rounded-lg shadow-lg max-w-full h-auto"
            src={job.image}
            alt="Job illustration"
          />
        </div>
      )}
    </div>
  );
};

export default JobDetailPage;
