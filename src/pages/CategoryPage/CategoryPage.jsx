import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CategoryPage = () => {
  // Get the category from the URL params
  const { category } = useParams();
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  // Mapping of category values to category names
  const categoryNames = {
    jobAccountingFinance: "Accounting/Finance",
    jobBankNonBank: "Bank/Non-Bank Fin. Institution",
    jobSupplyChain: "Supply Chain/Procurement",
    jobEducationTrainin: "Education/Training",
    jobEngineerArchitect: "Engineer/Architects",
    jobGarmentsTextile: "Garments/Textile",
    jobHrOrgDevelopment: "HR/Org. Development",
    jobGenMgtAdmin: "Gen Mgt/Admin",
    jobDesignCreative: "Design/Creative",
    jobProductionOperation: "Production/Operation",
    jobHospitalityTravelTourism: "Hospitality/Travel/Tourism",
    jobCommercial: "Commercial",
    jobBeautyCareHealthFitness: "Beauty Care/Health & Fitness",
    jobItTelecommunication: "IT & Telecommunication",
    jobMarketingSales: "Marketing/Sales",
    jobCustomerServiceCallCentre: "Customer Service/Call Centre",
    jobMediaAdEventMgt: "Media/Ad./Event Mgt.",
    jobMedicalPharma: "Medical/Pharma",
    jobAgroPlantAnimalFisheries: "Agro (Plant/Animal/Fisheries)",
    jobNgoDevelopment: "NGO/Development",
    jobResearchConsultancy: "Research/Consultancy",
    jobReceptionistPs: "Receptionist/PS",
    jobDataEntryOperatorBPO: "Data Entry/Operator/BPO",
    jobDrivingMotorTechnician: "Driving/Motor Technician",
    jobSecuritySupportService: "Security/Support Service",
    jobLawLegal: "Law/Legal",
    jobCompanySecretaryRegulatoryAffairs:
      "Company Secretary/Regulatory Affairs",
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        if (!category) {
          throw new Error("Category is undefined");
        }
        const response = await axios.get(
          `https://jeebisa.vercel.app/jobs/category/${category}`
        );
        setJobs(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchJobs();
  }, [category]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Retrieve the category name from the mapping
  const categoryName = categoryNames[category] || category; // Fallback to category value if not found

  return (
    <div className="mt-20">
      <h1 className="text-3xl text-center font-bold">
        All Jobs in {categoryName} (Total Jobs: {jobs.length})
      </h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-disc pl-6 text-lg">
        {jobs.map((job) => (
          <li key={job._id}>
            <Link to={`/jobs/${job._id}`}>{job.jobTitle}</Link>
            {/* Link to the job detail page */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
