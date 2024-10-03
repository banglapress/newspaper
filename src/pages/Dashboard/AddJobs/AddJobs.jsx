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

  const onSubmit = async (data) => {
    const image_file = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, image_file, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (res.data.success) {
      const jobItem = {
        jobTitle: data.jobTitle,
        jobCategory: data.jobCategory,
        jobPostPlacement: data.jobPostPlacement,
        // jobDescription: data.jobDescription,
        // jobResponsibility: data.jobResponsibility,
        jobEmpStatus: data.jobEmpStatus,
        jobSalary: data.jobSalary,
        jobWorkPlace: data.jobWorkPlace,
        jobLocation: data.jobLocation,
        jobGenderPreference: data.jobGenderPreference,
        jobEducation: data.jobEducation,
        jobLevel: data.jobLevel,
        jobAgeLimit: data.jobAgeLimit,
        jobExperience: data.jobExperience,
        // jobSkillRequirement: data.jobSkillRequirement,
        // jobSpecialRequirement: data.jobSpecialRequirement,
        jobDescription,
        jobResponsibility,
        jobSkillRequirement,
        jobSpecialRequirement,
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
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
            {/* Company Name */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Company Name</span>
              </div>
              <input
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

          {/* Job Title */}
          <label className="form-control w-full my-6">
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
              <span className="label-text font-bold">Job Responsibility</span>
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
                {...register("jobEmpStatus", { required: true })}
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
                <span className="label-text">Salary Range*</span>
              </div>
              <input
                {...register("jobSalary", { required: true })}
                type="text"
                placeholder="e.g. BDT 20,000-30,000 or Negotiable"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="flex gap-6">
            {/* Workplace */}

            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Workplace*</span>
              </div>
              <select
                defaultValue="default"
                {...register("jobWorkPlace", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select an Option
                </option>
                <option value="online">Work From Home</option>
                <option value="offline">Work at Office</option>
                <option value="mixed">Both Office and Home</option>
              </select>
            </label>

            {/* Job Location */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Job Location</span>
              </div>
              <select
                defaultValue="default"
                {...register("jobLocation", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a Region
                </option>
                <option value="anywhere">Anywhere in Bangladesh</option>
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
          </div>

          <div className="flex gap-6">
            {/* Gender Preference */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Gender Preference</span>
              </div>
              <select
                defaultValue="default"
                {...register("jobGenderPreference", { required: true })}
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

            {/* Education */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Education</span>
              </div>

              <input
                {...register("jobEducation", { required: true })}
                type="text"
                placeholder="e.g. Business Graduate or MA"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="flex gap-6">
            {/* Job Level */}

            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Job Level</span>
              </div>
              <select
                defaultValue="default"
                {...register("jobLevel", { required: true })}
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

            {/* Age Preference */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Age Preference</span>
              </div>
              <select
                defaultValue="default"
                {...register("jobAgeLimit", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select an Option
                </option>
                <option value="noAgeLimit">No Age Limit</option>
                <option value="below20">20 Years or Below</option>
                <option value="below25">25 Years or Below</option>
                <option value="below30">30 Years or Below</option>
                <option value="below35">35 Years or Below</option>
                <option value="below40">40 Years or Below</option>
                <option value="below45">45 Years or Below</option>
                <option value="below50">50 Years or Below</option>
                <option value="below55">55 Years or Below</option>
                <option value="below60">60 Years or Below</option>
              </select>
            </label>

            {/* Experience */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Experience</span>
              </div>
              <select
                defaultValue="default"
                {...register("jobExperience", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select an Option
                </option>
                <option value="noExperience">No Experience Required</option>
                <option value="minOneEx">1-2 Year Experience Required</option>
                <option value="minTwoEx">2-5 Year Experience Required</option>
                <option value="minFiveEx">5-10 Year Experience Required</option>
                <option value="min10Ex">10-15 Year Experience Required</option>
                <option value="min15Ex">15-20 Year Experience Required</option>
                <option value="min20Ex">20-25 Year Experience Required</option>
                <option value="min25Ex">25-30 Year Experience Required</option>
              </select>
            </label>
          </div>

          {/* Skill Requirement */}
          <label className="form-control">
            <div className="label">
              <span className="label-text font-bold">Skill Requirement</span>
            </div>
            {/* <textarea
              {...register("jobSkillRequirement")}
              className="textarea textarea-bordered h-24"
              placeholder="Write Skill Requirement Detail Here"
            ></textarea> */}
            <ReactQuill
              className="h-48"
              value={jobSkillRequirement}
              onChange={handleJobSkillRequirementChange}
              placeholder="Write Skill Requirement Detail Here"
            />
          </label>

          {/* Special Requirement */}
          <label className="form-control my-16">
            <div className="label">
              <span className="label-text font-bold">Special Requirement</span>
            </div>
            {/* <textarea
              {...register("jobSpecialRequirement")}
              className="textarea textarea-bordered h-24"
              placeholder="Write Skill Requirement Detail Here"
            ></textarea> */}
            <ReactQuill
              className="h-48"
              value={jobSpecialRequirement}
              onChange={handleJobSpecialRequirementChange}
              placeholder="Write Special Requirement Detail Here"
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