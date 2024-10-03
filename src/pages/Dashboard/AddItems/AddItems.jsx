import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const image_file = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, image_file, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      reset();
      if (menuRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} added to the menu!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <SectionTitle heading="Add An Item" subHeading="What's New" />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Job Title*</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Job Title"
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex gap-6">
            {/* category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Company Name*</span>
              </div>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a Company
                </option>
                {/* TODO: Map from registered company list. */}
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Desert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>
            {/* price */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Salary*</span>
              </div>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Salary"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Requirement</span>
              </div>
              <textarea
                {...register("recipe")}
                className="textarea textarea-bordered h-24"
                placeholder="Requirement Detail"
              ></textarea>
            </label>
          </div>
          <div className="form-control w-full my-6 font-bold text-red-700">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full"
            />
          </div>

          <button className="btn btn-neutral">Add Job </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
