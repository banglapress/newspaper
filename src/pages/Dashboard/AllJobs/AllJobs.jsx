import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaList, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const AllJobs = () => {
  const axiosSecure = useAxiosSecure();
  const { data: jobs = [], refetch } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axiosSecure.get("/jobs");
      return res.data;
    },
  });

  const handleMakeAdmin = (job) => {
    ///
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure.patch(`/jobs/admin/${job._id}`).then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              refetch();
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });

    ////
  };

  const handleDeletejob = (job) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/jobs/${job._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              confirmButtonColor: "#3085d6",
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h1 className="text-3xl">All jobs</h1>
        <h1 className="text-3xl">Total jobs: {jobs.length}</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.jobTitle}</td>
                <td>{job.jobCategory}</td>
                <td>
                  {job.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(job)}
                      className="btn btn-lg bg-orange-500"
                    >
                      <FaList className="text-white text-2xl" />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeletejob(job)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJobs;
