import { useState } from "react";
import linkedinLogo from "/images/linkedin.png";
import googleLogo from "/images/google.jpg";
import abobeLogo from "/images/adobepng.png";
import appleLogo from "/images/apple.png";

const FeaturedJobs = () => {
  const [showAllJobs, setShowAllJobs] = useState(false);

  // Dummy data for featured jobs
  const [featuredJobs, setFeaturedJobs] = useState([
    {
      id: 1,
      companyName: "Microsoft",
      position: "Software Developer",
      companyLogo: linkedinLogo,
      positionLink: "https://www.microsoft.com",
    },
    {
      id: 2,
      companyName: "Google",
      position: "Web Developer",
      companyLogo: linkedinLogo,
      positionLink: "https://www.google.com",
    },
    {
      id: 3,
      companyName: "Apple",
      position: "iOS Developer",
      companyLogo: linkedinLogo,
      positionLink: "https://www.apple.com",
    },
    {
      id: 4,
      companyName: "Amazon",
      position: "Software Engineer",
      companyLogo: linkedinLogo,
      positionLink: "https://www.amazon.com",
    },
    {
      id: 5,
      companyName: "Facebook",
      position: "Frontend Developer",
      companyLogo: googleLogo,
      positionLink: "https://www.facebook.com",
    },
    {
      id: 6,
      companyName: "Tesla",
      position: "Embedded Systems Engineer",
      companyLogo: googleLogo,
      positionLink: "https://www.tesla.com",
    },
    {
      id: 7,
      companyName: "Netflix",
      position: "Full Stack Developer",
      companyLogo: googleLogo,
      positionLink: "https://www.netflix.com",
    },
    {
      id: 8,
      companyName: "Adobe",
      position: "UX/UI Designer",
      companyLogo: googleLogo,
      positionLink: "https://www.adobe.com",
    },
    {
      id: 9,
      companyName: "Intel",
      position: "Hardware Engineer",
      companyLogo: googleLogo,
      positionLink: "https://www.intel.com",
    },
    {
      id: 10,
      companyName: "IBM",
      position: "Data Scientist",
      companyLogo: abobeLogo,
      positionLink: "https://www.ibm.com",
    },
    {
      id: 11,
      companyName: "Twitter",
      position: "Social Media Manager",
      companyLogo: abobeLogo,
      positionLink: "https://www.twitter.com",
    },
    {
      id: 12,
      companyName: "LinkedIn",
      position: "HR Specialist",
      companyLogo: abobeLogo,
      positionLink: "https://www.linkedin.com",
    },
    {
      id: 13,
      companyName: "Uber",
      position: "Driver Operations Manager",
      companyLogo: abobeLogo,
      positionLink: "https://www.uber.com",
    },
    {
      id: 14,
      companyName: "Airbnb",
      position: "Hospitality Coordinator",
      companyLogo: abobeLogo,
      positionLink: "https://www.airbnb.com",
    },
    {
      id: 15,
      companyName: "Samsung",
      position: "Mobile App Developer",
      companyLogo: appleLogo,
      positionLink: "https://www.samsung.com",
    },
    {
      id: 16,
      companyName: "HP",
      position: "Printer Technician",
      companyLogo: abobeLogo,
      positionLink: "https://www.hp.com",
    },
    {
      id: 17,
      companyName: "Dell",
      position: "IT Support Specialist",
      companyLogo: "dell.jpg",
      positionLink: "https://www.dell.com",
    },
    {
      id: 18,
      companyName: "Cisco",
      position: "Network Engineer",
      companyLogo: "cisco.jpg",
      positionLink: "https://www.cisco.com",
    },
    {
      id: 19,
      companyName: "Oracle",
      position: "Database Administrator",
      companyLogo: "oracle.jpg",
      positionLink: "https://www.oracle.com",
    },
    {
      id: 20,
      companyName: "Sony",
      position: "Game Developer",
      companyLogo: "sony.jpg",
      positionLink: "https://www.sony.com",
    },
    {
      id: 21,
      companyName: "NVIDIA",
      position: "Graphics Software Engineer",
      companyLogo: "nvidia.jpg",
      positionLink: "https://www.nvidia.com",
    },
    {
      id: 22,
      companyName: "EA Sports",
      position: "Game Tester",
      companyLogo: "ea.jpg",
      positionLink: "https://www.ea.com",
    },
    {
      id: 23,
      companyName: "Pfizer",
      position: "Pharmaceutical Researcher",
      companyLogo: "pfizer.jpg",
      positionLink: "https://www.pfizer.com",
    },
    {
      id: 24,
      companyName: "Mercedes-Benz",
      position: "Automotive Engineer",
      companyLogo: "mercedes.jpg",
      positionLink: "https://www.mercedes-benz.com",
    },
    {
      id: 25,
      companyName: "Boeing",
      position: "Aerospace Technician",
      companyLogo: "boeing.jpg",
      positionLink: "https://www.boeing.com",
    },
    {
      id: 26,
      companyName: "Coca-Cola",
      position: "Marketing Specialist",
      companyLogo: "cocacola.jpg",
      positionLink: "https://www.coca-cola.com",
    },
    {
      id: 27,
      companyName: "McDonald's",
      position: "Restaurant Manager",
      companyLogo: "mcdonalds.jpg",
      positionLink: "https://www.mcdonalds.com",
    },
    {
      id: 28,
      companyName: "Nike",
      position: "Athlete Relations Coordinator",
      companyLogo: "nike.jpg",
      positionLink: "https://www.nike.com",
    },
    {
      id: 29,
      companyName: "Procter & Gamble",
      position: "Product Development Scientist",
      companyLogo: "p&g.jpg",
      positionLink: "https://www.pg.com",
    },
    {
      id: 30,
      companyName: "Toyota",
      position: "Automotive Designer",
      companyLogo: "toyota.jpg",
      positionLink: "https://www.toyota.com",
    },
    {
      id: 31,
      companyName: "General Electric",
      position: "Electrical Engineer",
      companyLogo: "ge.jpg",
      positionLink: "https://www.ge.com",
    },
    {
      id: 32,
      companyName: "Siemens",
      position: "Industrial Automation Specialist",
      companyLogo: "siemens.jpg",
      positionLink: "https://www.siemens.com",
    },
    {
      id: 33,
      companyName: "General Motors",
      position: "Automotive Mechanic",
      companyLogo: "gm.jpg",
      positionLink: "https://www.gm.com",
    },
    {
      id: 34,
      companyName: "Lockheed Martin",
      position: "Aerospace Engineer",
      companyLogo: "lockheed.jpg",
      positionLink: "https://www.lockheedmartin.com",
    },
    {
      id: 35,
      companyName: "Hewlett Packard Enterprise",
      position: "IT Project Manager",
      companyLogo: "hpe.jpg",
      positionLink: "https://www.hpe.com",
    },
    {
      id: 36,
      companyName: "ExxonMobil",
      position: "Chemical Engineer",
      companyLogo: "exxonmobil.jpg",
      positionLink: "https://www.exxonmobil.com",
    },
    {
      id: 37,
      companyName: "Verizon",
      position: "Telecommunications Specialist",
      companyLogo: "verizon.jpg",
      positionLink: "https://www.verizon.com",
    },
    {
      id: 38,
      companyName: "Walmart",
      position: "Supply Chain Analyst",
      companyLogo: "walmart.jpg",
      positionLink: "https://www.walmart.com",
    },
    {
      id: 39,
      companyName: "Chevron",
      position: "Petroleum Engineer",
      companyLogo: "chevron.jpg",
      positionLink: "https://www.chevron.com",
    },
    {
      id: 40,
      companyName: "AT&T",
      position: "Network Security Specialist",
      companyLogo: "att.jpg",
      positionLink: "https://www.att.com",
    },
  ]);

  const visibleJobs = showAllJobs ? featuredJobs : featuredJobs.slice(0, 12);

  return (
    <div className="bg-white rounded-lg p-6 shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Featured Jobs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div> */}
        {visibleJobs.map((job) => (
          <div key={job.id} className="card card-side bg-base-100 shadow-xl">
            <figure className="pl-6">
              <img
                src={job.companyLogo}
                alt={job.companyName}
                className="w-10 h-10 mr-2"
              />
            </figure>
            <div className="card-body">
              <span className="text-orange-700 font-bold">
                {job.companyName}
              </span>

              <ul className="list-disc">
                <li>
                  <a
                    href={job.positionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black-500 hover:underline block"
                  >
                    {job.position}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      {!showAllJobs && (
        <div className="mt-4 text-center md:hidden">
          <button
            onClick={() => setShowAllJobs(true)}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedJobs;
