import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../helpers/axios";
import { PatientProfileSchema } from "../validations";

const CreatePatientProfileForm = () => {
  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    tel: "",
    birthday: "",
  });
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await PatientProfileSchema.validate(profileData, { abortEarly: false });
      await axiosInstance.post("patient/", profileData);
      setSuccessMessage("Patient profile created successfully");
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/dashboard");
      }, 3000);
      setProfileData({
        first_name: "",
        last_name: "",
        address: "",
        tel: "",
        birthday: "",
      });
    } catch (error) {
      if (error.inner) {
        const newErrors = {};
        error.inner.forEach((e) => {
          newErrors[e.path] = e.message;
        });
        setErrors(newErrors);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
    // Clear the error message when the user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <div className="p-8 rounded border border-gray-200">
      <h1 className="font-medium text-3xl">Profile</h1>
      <p className="text-gray-600 mt-6">
      Créer votre profil personnalisé et bénéficier de nos services de suivi médical.
      </p>

      <form onSubmit={handleSubmit}>
        {successMessage && (
          <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            {successMessage}
          </div>
        )}
        <div className="mt-8 grid lg:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="first_name"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Enter your first name"
              value={profileData.first_name}
              onChange={handleChange}
            />
            {errors.first_name && (
              <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Enter your last name"
              value={profileData.last_name}
              onChange={handleChange}
            />
            {errors.last_name && (
              <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="address"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Enter your first name"
              value={profileData.address}
              onChange={handleChange}
            />
            {errors.address && (
              <p className="text-red-500 text-xs mt-1">{errors.address}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="tel"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Phone
            </label>
            <input
              type="phone"
              name="tel"
              id="tel"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Enter your first name"
              value={profileData.tel}
              onChange={handleChange}
            />
            {errors.tel && (
              <p className="text-red-500 text-xs mt-1">{errors.tel}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="birthday"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Birthday
            </label>
            <input
              type="date"
              name="birthday"
              id="birthday"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Enter your first name"
              value={profileData.birthday}
              onChange={handleChange}
            />
            {errors.birthday && (
              <p className="text-red-500 text-xs mt-1">{errors.birthday}</p>
            )}
          </div>
        </div>

        <div className="space-x-4 mt-8">
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePatientProfileForm;
