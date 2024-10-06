import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BrowseCategory = () => {
  const [jobCounts, setJobCounts] = useState({}); // State to hold job counts from the database

  // Categories with their values
  const [categories] = useState([
    {
      id: 1,
      name: "Accounting/Finance",
      value: "jobAccountingFinance",
    },
    {
      id: 2,
      name: "Bank/Non-Bank Fin. Institution",
      value: "jobBankNonBank",
    },
    {
      id: 3,
      name: "Supply Chain/Procurement",
      value: "jobSupplyChain",
    },
    {
      id: 4,
      name: "Education/Training",
      value: "jobEducationTrainin",
    },
    {
      id: 5,
      name: "Engineer/Architects",
      value: "jobEngineerArchitect",
    },
    {
      id: 6,
      name: "Garments/Textile",
      value: "jobGarmentsTextile",
    },
    {
      id: 7,
      name: "HR/Org. Development",
      value: "jobHrOrgDevelopment",
    },
    { id: 8, name: "Gen Mgt/Admin", value: "jobGenMgtAdmin" },
    {
      id: 9,
      name: "Design/Creative",
      value: "jobDesignCreative",
    },
    {
      id: 10,
      name: "Production/Operation",
      value: "jobProductionOperation",
    },
    {
      id: 11,
      name: "Hospitality/Travel/Tourism",
      value: "jobHospitalityTravelTourism",
    },
    { id: 12, name: "Commercial", value: "jobCommercial" },
    {
      id: 13,
      name: "Beauty Care/Health & Fitness",
      value: "jobBeautyCareHealthFitness",
    },
    {
      id: 14,
      name: "IT & Telecommunication",
      value: "jobItTelecommunication",
    },
    {
      id: 15,
      name: "Marketing/Sales",
      value: "jobMarketingSales",
    },
    {
      id: 16,
      name: "Customer Service/Call Centre",
      value: "jobCustomerServiceCallCentre",
    },
    {
      id: 17,
      name: "Media/Ad./Event Mgt.",
      value: "jobMediaAdEventMgt",
    },
    {
      id: 18,
      name: "Medical/Pharma",
      value: "jobMedicalPharma",
    },
    {
      id: 19,
      name: "Agro (Plant/Animal/Fisheries)",
      value: "jobAgroPlantAnimalFisheries",
    },
    {
      id: 20,
      name: "NGO/Development",
      value: "jobNgoDevelopment",
    },
    {
      id: 21,
      name: "Research/Consultancy",
      value: "jobResearchConsultancy",
    },
    {
      id: 22,
      name: "Receptionist/PS",
      value: "jobReceptionistPs",
    },
    {
      id: 23,
      name: "Data Entry/Operator/BPO",
      value: "jobDataEntryOperatorBPO",
    },
    {
      id: 24,
      name: "Driving/Motor Technician",
      value: "jobDrivingMotorTechnician",
    },
    {
      id: 25,
      name: "Security/Support Service",
      value: "jobSecuritySupportService",
    },
    { id: 26, name: "Law/Legal", value: "jobLawLegal" },
    {
      id: 27,
      name: "Company Secretary/Regulatory Affairs",
      value: "jobCompanySecretaryRegulatoryAffairs",
    },
  ]);

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleCategoryClick = (categoryValue) => {
    navigate(`/jobs/category/${categoryValue}`); // Navigate to the category page
  };

  // Fetch job counts from the backend when the component mounts
  useEffect(() => {
    const fetchJobCounts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/jobs/countByCategory"
        );
        setJobCounts(response.data); // Set job counts for each category
      } catch (error) {
        console.error("Error fetching job counts:", error);
      }
    };
    fetchJobCounts();
  }, []);

  return (
    <div className="bg-white rounded-lg p-6 shadow-md mt-20">
      <h2 className="text-2xl font-bold mb-4">Browse Categories</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-disc pl-6 text-lg">
        {categories.map((category) => (
          <li key={category.id} className="mb-2">
            <button
              onClick={() => handleCategoryClick(category.value)}
              className="text-cyan-700 hover:underline text-sm md:text-lg"
            >
              {category.name} ({jobCounts[category.value] || 0})
              {/* Display job count */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseCategory;
