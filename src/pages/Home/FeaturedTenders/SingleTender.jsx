import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleTender = () => {
  const { tenderId } = useParams();
  const [tender, setTender] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTenderDetails = async () => {
      try {
        const response = await axios.get(
          `https://jeebisa.vercel.app/tenders/${tenderId}`
        );
        setTender(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTenderDetails();
  }, [tenderId]);

  if (error) {
    return (
      <div className="text-red-500 font-bold text-center mt-10">{error}</div>
    );
  }

  if (!tender) {
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
            <span className="text-gray-500">/ tenders /</span>
          </li>

          <li>
            <span className="text-gray-500">/</span>
          </li>
          <li>
            <span className="text-sm text-gray-700 font-bold">
              {tender.tenderCompanyName}
            </span>
          </li>
        </ol>
      </nav>

      {/* Tender Title */}
      <h1 className="text-4xl font-extrabold text-ed314f mb-4 text-center">
        {tender.tenderTitle}
      </h1>

      {/* Company Info */}
      <h2 className="text-2xl font-semibold text-indigo-800 mb-8 text-center">
        {tender.tenderCompanyName}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {tender.tenderDescription && (
          <>
            <h3 className="text-xl font-bold text-cyan-800 mt-8 mb-2">
              tenderDescription
            </h3>
            <div className="text-lg text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg shadow-md">
              dangerouslySetInnerHTML={{ __html: tender.tenderDescription }}
            </div>
          </>
        )}
      </div>

      {tender.tenderImage && (
        <div className="mt-10 flex justify-center">
          <img
            className="rounded-lg shadow-lg max-w-full h-auto"
            src={tender.tenderImage}
            alt="tender illustration"
          />
        </div>
      )}
    </div>
  );
};

export default SingleTender;
