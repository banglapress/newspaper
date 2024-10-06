import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto my-8 p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>

      <div className="flex items-center mb-4">
        <img
          src={user.photoURL || "https://via.placeholder.com/150"}
          alt="User Avatar"
          className="h-16 w-16 rounded-full mr-4 object-cover"
        />
        <h2 className="text-2xl">{user.displayName}</h2>
      </div>

      <div className="space-y-2">
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Education:</strong> {user.education || "Not provided"}
        </p>
        <p>
          <strong>Job Status:</strong> {user.jobStatus || "Not provided"}
        </p>
      </div>

      <Link
        to="/dashboard/updateUserProfile"
        className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Update Information
      </Link>
    </div>
  );
};

export default UserProfile;
