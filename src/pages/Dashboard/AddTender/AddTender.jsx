import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./AddTender.css";

// TODO: COMPANY AS A CATEGORY, SO THAT ONE ADMIN CAN POST ON BEHALF OF ALL COMPANY

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddTender = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const [tenderDescription, setTenderDescription] = useState("");

  const handleTenderDescriptionChange = (value) => {
    setTenderDescription(value);
  };

  const onSubmit = async (data) => {
    const image_file = { image: data.tenderImage[0] };
    const res = await axiosPublic.post(image_hosting_api, image_file, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (res.data.success) {
      const tenderItem = {
        tenderCompanyName: data.tenderCompanyName,
        tenderTitle: data.tenderTitle,
        tenderCategory: data.tenderCategory,
        tenderPostPlacement: data.tenderPostPlacement,
        tenderDeadline: data.tenderDeadline,
        tenderSchedulePurchaseDeadline: data.tenderSchedulePurchaseDeadline,
        tenderOpeningDate: data.tenderOpeningDate,
        tenderPreBidMeetingDate: data.tenderPreBidMeetingDate,
        tenderWorkPlace: data.tenderWorkPlace,
        tenderLocation: data.tenderLocation,
        tenderDescription,
        tenderSourceLink: data.tenderSourceLink,
        tenderImage: res.data.data.display_url,
      };
      console.log(tenderItem);
      const tenderRes = await axiosSecure.post("/tenders", tenderItem);
      reset();
      if (tenderRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.tenderTitle} added to the tenders!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div className="bg-white p-8">
      <SectionTitle heading="Add New Tender/EOI" subHeading="What's New" />
      <img src={user?.photoURL} alt="" />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
            {/* Company Name */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Company/Organization Name*</span>
              </div>
              <input
                {...register("tenderCompanyName", { required: true })}
                type="text"
                placeholder={user?.displayName}
                value={user?.displayName}
                className="input input-bordered w-full max-w-xs font-bold"
              />
            </label>

            {/* Tender Category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text text-red-700 font-semibold">
                  Tender Category*
                </span>
              </div>
              <select
                defaultValue="default"
                {...register("tenderCategory", { required: true })}
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

            {/* Tender Post Placement */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Tender Post Placement</span>
              </div>
              <select
                defaultValue="default"
                {...register("tenderPostPlacement")}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select Placement Type
                </option>
                <option value="homepageFeaturedTenderPlacement">
                  Homepage Featured Tender Post
                </option>
                <option value="categoryPageTenderPlacement">
                  Category Page Normal Tender Post
                </option>
              </select>
            </label>
          </div>

          {/*------------------------Tender Title---------------------------------*/}
          <label className="form-control w-2/3 my-6">
            <div className="label">
              <span className="label-text text-red-700 font-semibold">
                Tender Title*
              </span>
            </div>
            <input
              {...register("tenderTitle", { required: true })}
              type="text"
              placeholder="Tender Title"
              className="input input-bordered w-full"
            />
          </label>

          {/* --------------------------------------------------------------- */}
          <div className="flex gap-6">
            {/*---------- Schedule Purchase Last Date ---------*/}
            <label className="form-control w-1/3 my-6">
              <div className="label">
                <span className="label-text">
                  Last Date of Schedule Purchase
                </span>
              </div>
              <input
                {...register("tenderSchedulePurchaseDeadline")}
                type="date"
                placeholder="Last Date"
                className="input input-bordered w-full"
              />
            </label>

            {/* Submission Last Date */}
            <label className="form-control w-1/3 my-6">
              <div className="label">
                <span className="label-text text-red-700 font-semibold">
                  Last Date of Submission*
                </span>
              </div>
              <input
                {...register("tenderDeadline", { required: true })}
                type="date"
                placeholder="Last Date"
                className="input input-bordered w-full"
              />
            </label>

            {/* Tender Opening Date */}

            <label className="form-control w-1/3 my-6">
              <div className="label">
                <span className="label-text">Tender Opening Date</span>
              </div>
              <input
                {...register("tenderOpeningDate")}
                type="date"
                placeholder="Last Date"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* ------------------------------Tender Description------------------------------- */}

          <label className="form-control my-6">
            <div className="label">
              <span className="label-text font-bold">Tender Description</span>
            </div>
            <ReactQuill
              className="h-48"
              value={tenderDescription}
              onChange={handleTenderDescriptionChange}
              placeholder="Write Tender Description Detail Here"
            />
          </label>

          <div className="flex gap-6">
            {/* Tender Location */}
            <label className="form-control w-1/2 my-6">
              <div className="label">
                <span className="label-text">Tender Location</span>
              </div>
              <select
                defaultValue="default"
                {...register("tenderLocation")}
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

            {/*---------- Pre-bid Meeting Date ---------*/}
            <label className="form-control w-1/2 my-6">
              <div className="label">
                <span className="label-text">Pre-bid Meeting Date</span>
              </div>
              <input
                {...register("tenderPreBidMeetingDate")}
                type="date"
                placeholder="Last Date"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* Tender Source */}
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text text-red-700 font-semibold">
                Tender Source/Link*
              </span>
            </div>

            <input
              {...register("tenderSourceLink", { required: true })}
              type="text"
              placeholder="e.g. Daily Star or google.com"
              className="input input-bordered w-full"
            />
          </label>

          <div className="form-control w-full my-6 font-bold text-red-700">
            <input
              {...register("tenderImage", { required: true })}
              type="file"
              className="file-input w-full"
            />
          </div>

          <button className="btn btn-neutral">Add New Tender / EOI </button>
        </form>
      </div>
    </div>
  );
};

export default AddTender;
