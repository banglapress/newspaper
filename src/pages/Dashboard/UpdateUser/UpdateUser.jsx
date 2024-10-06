import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateUser = () => {
  const { name, email, photoURL, displayName, education, jobStatus, _id } =
    useLoaderData();

  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    // Initialize userItem with existing values
    const userItem = {
      displayName: data.displayName || displayName,
      education: data.education || education,
      jobStatus: data.jobStatus || jobStatus,
      photoURL: photoURL, // Set to existing URL by default
    };

    // Check if a new image is uploaded
    if (data.image && data.image.length > 0) {
      // image upload to imgbb and then get an url
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        // Set the new image URL if upload is successful
        userItem.photoURL = res.data.data.display_url;
      }
    }

    // Update user info on the server
    const userRes = await axiosSecure.patch(`/users/${_id}`, userItem);
    console.log(userRes.data);
    if (userRes.data.modifiedCount > 0) {
      // Show success popup
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} is updated to the users.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <SectionTitle
        heading="Update Company Profile"
        subHeading="Refresh info"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Company Name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Company Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <img height="150px" width="300px" src={photoURL} alt="" />
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Company Type*</span>
              </label>
              <select
                defaultValue={email}
                {...register("email", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a Type
                </option>
                <option value="salad">
                  Government/Semi-government/Autonomous
                </option>
                <option value="pizza">Company/Private</option>
                <option value="soup">NGO/Development</option>
                <option value="dessert">Research/Education/Training</option>
                <option value="drinks">Others</option>
              </select>
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Job Status*</span>
              </label>
              <input
                type="text"
                defaultValue={jobStatus}
                placeholder="Job Status"
                {...register("jobStatus", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Education*</span>
              </label>
              <input
                type="text"
                defaultValue={education}
                placeholder="Education"
                {...register("education", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Display Name</span>
            </label>
            <textarea
              defaultValue={displayName}
              {...register("displayName")}
              className="input input-bordered w-full"
              placeholder="Display Name"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn">Update User Info</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
