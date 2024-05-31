import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { EducationPatientSchema } from "../validations";
import axiosInstance from "../helpers/axios";

const EducationPatientForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axiosInstance.post("/create-education-patients/", values);
      setSubmitted(true);
    } catch (error) {
      if (error.response) {
        console.error("Server responded with status:", error.response.status);
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (event, setFieldValue) => {
    const { name, value } = event.target;
    setFieldValue(name, value);
  };

  return (
    <div className="p-8 rounded border border-gray-200">
      <h1 className="font-medium text-3xl">Create education patient</h1>
      <p className="text-gray-600 mt-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        dolorem vel cupiditate laudantium dicta.
      </p>
      {submitted && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">
            {" "}
            Your Education description has been submitted successfully.
          </span>
        </div>
      )}
      <Formik
        initialValues={{
          user: "",
          patient_data: "",
          description: "",
        }}
        validationSchema={EducationPatientSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="user"
                  className="text-sm text-gray-700 block mb-1 font-medium"
                >
                  Patient ID
                </label>
                <Field
                  type="number"
                  name="user"
                  id="user"
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  placeholder="Enter Patient ID value"
                  onChange={(event) => handleChange(event, setFieldValue)}
                />
                <ErrorMessage
                  name="user"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="patient_data"
                  className="text-sm text-gray-700 block mb-1 font-medium"
                >
                  Diabetes Risk Test ID
                </label>
                <Field
                  type="number"
                  name="patient_data"
                  id="patient_data"
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  placeholder="Enter your patient data ID"
                  onChange={(event) => handleChange(event, setFieldValue)}
                />
                <ErrorMessage
                  name="patient_data"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="text-sm text-gray-700 block mb-1 font-medium"
                >
                  Medical Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  placeholder="Enter your medical description"
                  onChange={(event) => handleChange(event, setFieldValue)}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            <div className="space-x-4 mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
              <button
                type="reset"
                className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EducationPatientForm;
