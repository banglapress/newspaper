import { FiMic } from "react-icons/fi";
import admissionBG from "../../../assets/images/announcement.jpg";
import { Link } from "react-router-dom";

const NewCourse = () => {
  return (
    <div
      className="py-12 bg-cover bg-center mt-16"
      style={{ backgroundImage: `url(${admissionBG})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg text-center bengali-font">
          <h2 className="text-4xl font-bold text-rose-700 mb-4">
            AI দিয়ে কনটেন্ট বানিয়ে <br /> টাকা আয় করতে চাও?
          </h2>

          <div className="flex justify-center mb-6">
            <FiMic className="text-red-500 w-12 h-12" />
          </div>
          <div className="space-y-4">
            <p className="text-3xl text-gray-800">
              <Link to="/registration">
                <span className="font-semibold">এখনই রেজিস্ট্রেশন করো</span>
              </Link>
            </p>
            <p className="text-2xl text-gray-800">
              <span className="font-semibold">এনরোলমেন্ট শুরু:</span> ০১ অক্টোবর
              ২০২৪
            </p>
            <p className="text-2xl text-gray-700">
              <span className="font-semibold">এনরোলমেন্ট শেষ:</span> ২৫ অক্টোবর
              ২০২৪
            </p>
            <p className="text-2xl text-gray-700">
              <span className="font-semibold">কার্যক্রম শুরু:</span> ৩১ অক্টোবর
              ২০২৪
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCourse;
