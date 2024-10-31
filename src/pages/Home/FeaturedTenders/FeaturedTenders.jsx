// FeaturedTenders.jsx
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const FeaturedTenders = () => {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchFeaturedTenders = async () => {
      try {
        const response = await axiosPublic.get("/tenders");
        console.log("Fetched Tenders:", response.data);
        // Adjust this line if the data is nested
        const featuredTenders = response.data.filter(
          (tender) =>
            tender.tenderPostPlacement === "homepageFeaturedTenderPlacement"
        );
        console.log("Filtered Featured Tenders:", featuredTenders);

        setTenders(featuredTenders);
      } catch (error) {
        console.error("Error fetching featured tenders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedTenders();
  }, []);

  if (loading) {
    return <p>Loading featured tenders...</p>;
  }

  return (
    <div className="featured-tenders">
      <h2>Featured Tenders</h2>
      {tenders.length > 0 ? (
        <ul className="tender-list">
          {tenders.map((tender) => (
            <li key={tender._id} className="tender-item">
              <img
                src={tender.tenderImage}
                alt={tender.tenderTitle}
                className="tender-image"
              />
              <div className="tender-details">
                <h3 className="tender-title">{tender.tenderTitle}</h3>
                <p className="tender-company">
                  Company: {tender.tenderCompanyName}
                </p>
                <p className="tender-deadline">
                  Deadline:{" "}
                  {new Date(tender.tenderDeadline).toLocaleDateString()}
                </p>

                <Link to={`/tenders/${tender._id}`}>
                  <button>View Detail</button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No featured tenders available.</p>
      )}
    </div>
  );
};

export default FeaturedTenders;
