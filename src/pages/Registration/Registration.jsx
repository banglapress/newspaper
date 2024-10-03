import { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    education: "",
    dob: "",
    gender: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.fullName) errors.fullName = "Full Name is required";
    if (!formData.username) errors.username = "Username is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number is invalid";
    }
    if (!formData.education)
      errors.education = "Educational qualification is required";
    if (!formData.dob) errors.dob = "Date of birth is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(
          "https://balanced-reprieve-production.up.railway.app/registration",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const result = await response.json();

        if (response.ok) {
          console.log("User registered successfully");
          // Optionally, redirect or clear the form
        } else {
          setErrors(result);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="mt-20 mb-5">
      <div
        className="registration-container bengali-font"
        style={styles.container}
      >
        <h1 style={styles.header} className="text-3xl font-bold text-rose-700">
          রেজিস্ট্রেশন
        </h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label} className="pr-3">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.fullName && <p style={styles.error}>{errors.fullName}</p>}
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} className="pr-3">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.username && <p style={styles.error}>{errors.username}</p>}
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} className="pr-3">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.email && <p style={styles.error}>{errors.email}</p>}
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.phone && <p style={styles.error}>{errors.phone}</p>}
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Educational Qualification</label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.education && <p style={styles.error}>{errors.education}</p>}
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.dob && <p style={styles.error}>{errors.dob}</p>}
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p style={styles.error}>{errors.gender}</p>}
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.password && <p style={styles.error}>{errors.password}</p>}
          </div>
          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "450px",
    margin: "5px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
};

export default Registration;
