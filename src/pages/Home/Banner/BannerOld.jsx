import { Link } from "react-router-dom";
import searchBG from "/images/search-bg.jpg";
import { useState } from "react";

const Banner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://jeebisa.vercel.app/first-regi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className="p-6"
      style={{
        backgroundImage: `url(${searchBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="m-2 text-3xl p-4 [text-shadow:_0_1px_0_rgb(0_0_4_/_100%)] text-white font-bold text-center bengali-font">
        কেবল কর্ম অনুসন্ধান বা প্রশিক্ষণ নয়,
        <br />
        আমাদের অঙ্গিকার নিশ্চিত জীবিকা
      </h1>
      <h1 className="m-2 text-5xl p-4 [text-shadow:_0_1px_0_rgb(0_0_4_/100%)] text-red-800 font-bold text-center bengali-font">
        নিশ্চিত কর্মসংস্থান কর্মসূচিতে
        <br />
        এখনই যুক্ত হোন
      </h1>
      <p className="m-2 text-2xl p-4 [text-shadow:_0_1px_0_rgb(0_0_4_/40%)] text-indigo-950 font-bold text-center bengali-font">
        জীবিকার লিখিত গ্যারান্টি!
        <br /> কর্মসংস্থান না হলে শতভাগ ফি ফেরৎ।
        <br /> যে কোনো জেলা থেকে অংশ নিতে পারবেন।
        <br />
        <span className="m-2 text-3xl p-4 [text-shadow:_0_1px_0_rgb(0_0_4_/40%)] text-indigo-950 font-bold text-center bengali-font">
          আসনসংখ্যা সীমিত।
        </span>
      </p>

      <Link to="/program-detail">
        <h1 className="m-2 text-2xl py-4 [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)] hover:pl-4 hover:underline transition-all text-[#8BFAEC] font-bold text-center bengali-font">
          বিস্তারিত কার্যক্রম
          <br />
        </h1>
      </Link>
      <h2 className="text-2xl bengali-font font-bold mb-6 text-center [text-shadow:_0_1px_0_rgb(0_0_4_/_100%)] text-white">
        এখনই রেজিস্ট্রেশন করুন
      </h2>
      <form
        className="flex flex-col items-center justify-center mt-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="w-2/3 flex flex-col sm:flex-row sm:space-x-2">
          <input
            type="text"
            id="name"
            name="name"
            className="flex-1 w-full px-3 py-2 mb-2 sm:mb-0 border rounded-lg"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            className="flex-1 w-full px-3 py-2 mb-2 sm:mb-0 border rounded-lg"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            className="flex-1 w-full px-3 py-2 mb-2 sm:mb-0 border rounded-lg"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="submit"
          value="submit"
          className="btn btn-block w-auto bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
        />
      </form>
    </div>
  );
};

export default Banner;
