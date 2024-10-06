import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddJobs = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const [jobDescription, setJobDescription] = useState("");
  const [jobResponsibility, setJobResponsibility] = useState("");
  const [jobSkillRequirement, setJobSkillRequirement] = useState("");
  const [jobSpecialRequirement, setJobSpecialRequirement] = useState("");
  const [jobApplicationProcess, setJobApplicationProcess] = useState("");
  const [jobOtherBenefits, setJobOtherBenefits] = useState("");

  const handleJobDescriptionChange = (value) => {
    setJobDescription(value);
  };

  const handleJobResponsibilityChange = (value) => {
    setJobResponsibility(value);
  };

  const handleJobSkillRequirementChange = (value) => {
    setJobSkillRequirement(value);
  };

  const handleJobSpecialRequirementChange = (value) => {
    setJobSpecialRequirement(value);
  };

  const handleJobApplicationProcessChange = (value) => {
    setJobApplicationProcess(value);
  };
  const handleJobOtherBenefitsChange = (value) => {
    setJobOtherBenefits(value);
  };

  const onSubmit = async (data) => {
    const image_file = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, image_file, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (res.data.success) {
      const jobItem = {
        jobCompanyName: data.jobCompanyName,
        jobTitle: data.jobTitle,
        jobCategory: data.jobCategory,
        jobPostPlacement: data.jobPostPlacement,
        jobEmpStatus: data.jobEmpStatus,
        jobSalary: data.jobSalary,
        jobLastDate: data.jobLastDate,
        jobVacancyNumber: data.jobVacancyNumber,
        jobWorkPlace: data.jobWorkPlace,
        jobLocation: data.jobLocation,
        jobGenderPreference: data.jobGenderPreference,
        jobEducation: data.jobEducation,
        jobLevel: data.jobLevel,
        jobAgeLimit: data.jobAgeLimit,
        jobExperience: data.jobExperience,
        jobDescription,
        jobResponsibility,
        jobSkillRequirement,
        jobSpecialRequirement,
        jobOtherBenefits,
        jobApplicationProcess,
        jobSourceLink: data.jobSourceLink,
        image: res.data.data.display_url,
      };
      console.log(jobItem);
      const jobRes = await axiosSecure.post("/jobs", jobItem);
      reset();
      if (jobRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.jobTitle} added to the jobs!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div className="bg-white p-8">
      <SectionTitle heading="Add A New Job" subHeading="What's New" />
      <img src={user?.photoURL} alt="" />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
            {/* Company Name */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Company Name*</span>
              </div>
              <input
                {...register("jobCompanyName", { required: true })}
                type="text"
                placeholder={user?.displayName}
                value={user?.displayName}
                className="input input-bordered w-full max-w-xs font-bold"
              />
            </label>

            {/* Job Category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Job Category*</span>
              </div>
              <select
                defaultValue="default"
                {...register("jobCategory", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a Category
                </option>

                <option value="jobAccountingFinance">Accounts/Finance</option>
                <option value="jobBankNonBank">Bank/Non.Bank Fin. Org.</option>
                <option value="jobSupplyChain">Supply Chain/Procurement</option>
                <option value="jobEducationTrainin">Education/Training</option>
                <option value="jobEngineerArchitect">Engineer/Architect</option>
                <option value="jobGarmentsTextile">Garments/Textile</option>
                <option value="jobHrOrgDevelopment">HR/Org. Development</option>
                <option value="jobGenMgtAdmin">Gen Mgt/Admin</option>
                <option value="jobDesignCreative">Design/Creative</option>
                <option value="jobProductionOperation">
                  Production/Operation
                </option>
                <option value="jobHospitalityTravelTourism">
                  Hospitality/Travel/Tourism
                </option>
                <option value="jobCommercial">Commercial</option>
                <option value="jobBeautyCareHealthFitness">
                  Beauty Care/Health & Fitness
                </option>
                <option value="jobItTelecommunication">
                  IT & Telecommunication
                </option>
                <option value="jobMarketingSales">Marketing/Sales</option>
                <option value="jobCustomerServiceCallCentre">
                  Customer Service/Call Centre
                </option>
                <option value="jobMediaAdEventMgt">Media/Ad./Event Mgt</option>
                <option value="jobMedicalPharma">Medical/Pharma</option>
                <option value="jobAgroPlantAnimalFisheries">
                  Agro (Plant/Animal/Fisheries)
                </option>
                <option value="jobNgoDevelopment">NGO/Development</option>
                <option value="jobResearchConsultancy">
                  Research/Consultancy
                </option>
                <option value="jobReceptionistPs">Receptionist/PS</option>
                <option value="jobDataEntryOperatorBPO">
                  Data Entry/Operator/BPO
                </option>
                <option value="jobDrivingMotorTechnician">
                  Driving/Motor Technician
                </option>
                <option value="jobSecuritySupportService">
                  Security/Support Service
                </option>
                <option value="jobLawLegal">Law/Legal</option>
                <option value="jobCompanySecretaryRegulatoryAffairs">
                  Company Secretary/Regulatory Affairs
                </option>
              </select>
            </label>

            {/* Job Placement */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Post Placement*</span>
              </div>
              <select
                defaultValue="default"
                {...register("jobPostPlacement", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select Placement Type
                </option>
                <option value="homepageFeaturedJobPlacement">
                  Homepage Featured Job Post
                </option>
                <option value="categoryPageFeaturedJobPlacement">
                  Category Page Featured Job Post
                </option>
                <option value="categoryPageJobPlacement">
                  Category Page Normal Post
                </option>
                <option value="otherJobPlacement">Other Page Post</option>
              </select>
            </label>
          </div>
          {/* --------------------------------------------------------------- */}
          {/* Job Title */}
          <label className="form-control w-2/3 my-6">
            <div className="label">
              <span className="label-text">Job Title*</span>
            </div>
            <input
              {...register("jobTitle", { required: true })}
              type="text"
              placeholder="Job Title"
              className="input input-bordered w-full"
            />
          </label>

          {/* --------------------------------------------------------------- */}
          <div className="flex gap-6">
            {/* Application Last Date */}

            <label className="form-control w-1/3 my-6">
              <div className="label">
                <span className="label-text">Last Date of Application*</span>
              </div>
              <input
                {...register("jobLastDate", { required: true })}
                type="date" // Changed to 'date' to show the calendar
                placeholder="Last Date"
                className="input input-bordered w-full"
              />
            </label>

            {/* Job Level */}
            <label className="form-control w-1/3 my-6">
              <div className="label">
                <span className="label-text">Job Level</span>
              </div>
              <select
                defaultValue="default"
                {...register("jobLevel")}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select an Option
                </option>
                <option value="jobEntryLevel">Entry Level</option>
                <option value="jobMidLevel">Mid Level</option>
                <option value="jobSeniorLevel">Senior Level</option>
                <option value="jobNALevel">Not Applicable</option>
              </select>
            </label>

            <label className="form-control w-1/3 my-6">
              <div className="label">
                <span className="label-text">Vacancy*</span>
              </div>
              <input
                {...register("jobVacancyNumber", { required: true })}
                type="number"
                placeholder="Please write a number."
                defaultValue="0"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* ---------------------------------------------------------------------- */}
          {/* Job Description */}
          <label className="form-control my-6">
            <div className="label">
              <span className="label-text font-bold">Job Description</span>
            </div>
            {/* <textarea
              {...register("jobDescription")}
              className="textarea textarea-bordered h-24"
              placeholder="Write Job Responsibility Detail Here"
            ></textarea> */}
            <ReactQuill
              className="h-48"
              value={jobDescription}
              onChange={handleJobDescriptionChange}
              placeholder="Write Job Description Detail Here"
            />
          </label>

          {/* Job Responsibility */}
          <label className="form-control my-16">
            <div className="label">
              <span className="label-text font-bold">
                Job Duties and Responsibility
              </span>
            </div>
            {/* <textarea
              {...register("jobResponsibility")}
              className="textarea textarea-bordered h-24"
              placeholder="Write Job Responsibility Detail Here"
            ></textarea> */}
            <ReactQuill
              className="h-48"
              value={jobResponsibility}
              onChange={handleJobResponsibilityChange}
              placeholder="Write Job Responsibility Detail Here"
            />
          </label>

          <div className="flex gap-6">
            {/* Employment Status */}

            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Employment Status</span>
              </div>
              <select
                defaultValue="default"
                {...register("jobEmpStatus")}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select an Option
                </option>
                <option value="fullTime">Full Time</option>
                <option value="partTime">Part Time</option>
                <option value="contractual">Contractual</option>
                <option value="other">Other</option>
              </select>
            </label>

            {/* Salary Range */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Salary Range</span>
              </div>
              <input
                {...register("jobSalary")}
                type="text"
                placeholder="e.g. BDT 20,000-30,000 or Negotiable"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="flex gap-6">
            {/* Job Location */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Job Location</span>
              </div>
              <select
                defaultValue="default"
                {...register("jobLocation")}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a Region
                </option>
                <option value="anywhere">Anywhere in Bangladesh</option>
                <option value="workFromHome">Work From Home</option>
                <option value="barisal">Barisal</option>
                <option value="bogura">Bogura</option>
                <option value="chattagram">Chattagram</option>
                <option value="hilltracts">Chittagong Hill Tracts</option>
                <option value="coxsbazar">Coxs Bazar</option>
                <option value="cumilla">Cumilla</option>
                <option value="dhaka">Dhaka</option>
                <option value="dinajpur">Dinajpur</option>
                <option value="faridpur">Faridpur</option>
                <option value="jessore">Jessore</option>
                <option value="khulna">Khulna</option>
                <option value="kushtia">Kushtia</option>
                <option value="mymensingh">Mymensingh</option>
                <option value="noakhali">Noakhali</option>
                <option value="pabna">Pabna</option>
                <option value="patuakhali">Patuakhali</option>
                <option value="rajshahi">Rajshahi</option>
                <option value="rangpur">Rangpur</option>
                <option value="sylhet">Sylhet</option>
                <option value="tangail">Tangail</option>
              </select>
            </label>
            {/* Education */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Education</span>
              </div>

              <input
                {...register("jobEducation")}
                type="text"
                placeholder="e.g. Business Graduate or MA"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="flex gap-6">
            {/* Gender Preference */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Gender Preference</span>
              </div>
              <select
                defaultValue="default"
                {...register("jobGenderPreference")}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select an Option
                </option>
                <option value="jobAnybody">Anybody Can Apply</option>
                <option value="maleFemaleThird">
                  Male, Female and Third Gender Can Apply
                </option>
                <option value="bothMaleFemale">
                  Male and Female Can Apply
                </option>
                <option value="onlyFemale">Only Female Can Apply</option>
                <option value="onlyMale">Only Male Can Apply</option>
              </select>
            </label>
          </div>

          <div className="flex gap-6">
            {/* Job Level */}

            {/* Age Preference */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Age Preference</span>
              </div>

              <input
                {...register("jobAgeLimit")}
                type="text"
                placeholder="e.g. Not more than 35 years old"
                className="input input-bordered w-full"
              />
            </label>

            {/* Experience */}
            {/* Age Preference */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Experience</span>
              </div>

              <input
                {...register("jobExperience")}
                type="text"
                placeholder="e.g. 1-2 Year Experience Required"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* Skill Requirement */}
          <label className="form-control">
            <div className="label">
              <span className="label-text font-bold">
                Specific Skill & Experience Requirement (যোগ্যতা ও অভিজ্ঞতা)*
              </span>
            </div>
            <ReactQuill
              className="h-48"
              value={jobSkillRequirement}
              required
              onChange={handleJobSkillRequirementChange}
              placeholder="Write Skill Requirement Detail Here"
            />
          </label>

          {/* Special Requirement */}
          <label className="form-control my-16">
            <div className="label">
              <span className="label-text font-bold">
                Special Requirement (অন্যান্য শর্তাবলি)
              </span>
            </div>
            <ReactQuill
              className="h-48"
              value={jobSpecialRequirement}
              onChange={handleJobSpecialRequirementChange}
              placeholder="Write Special Requirement Detail Here"
            />
          </label>

          {/* Compensation & Other Benefits */}
          <label className="form-control my-16">
            <div className="label">
              <span className="label-text font-bold">
                Compensation & Other Benefits
              </span>
            </div>
            <ReactQuill
              className="h-48"
              value={jobOtherBenefits}
              onChange={handleJobOtherBenefitsChange}
              placeholder="Write Special Requirement Detail Here"
            />
          </label>

          {/* Special Requirement */}
          <label className="form-control my-16">
            <div className="label">
              <span className="label-text font-bold">
                Application Process (আবেদন প্রক্রিয়া)
              </span>
            </div>
            <ReactQuill
              className="h-48"
              value={jobApplicationProcess}
              onChange={handleJobApplicationProcessChange}
              placeholder="Write Application Process Detail Here"
            />
          </label>

          {/* Education */}
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Job Source Link</span>
            </div>

            <input
              {...register("jobSourceLink", { required: true })}
              type="text"
              placeholder="e.g. Daily Star or google.com"
              className="input input-bordered w-full"
            />
          </label>

          <div className="form-control w-full my-6 font-bold text-red-700">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full"
            />
          </div>

          <button className="btn btn-neutral">Add New Job </button>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
