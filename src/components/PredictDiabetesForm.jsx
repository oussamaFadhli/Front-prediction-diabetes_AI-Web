import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { PredictDiabetesSchema } from "../validations";
import axiosInstance from "../helpers/axios";

const PredictDiabetesForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axiosInstance.post("predict-diabetes/", values);
      console.log("API response:", response.data);
      setSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
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
      <h1 className="font-medium text-3xl">Prediction Diabetes Risk</h1>
      <p className="text-gray-600 mt-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        dolorem vel cupiditate laudantium dicta.
      </p>
      {submitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Your form has been submitted successfully.</span>
        </div>
      )}
      <Formik
        initialValues={{
          pregnancies: "",
          glucose: "",
          blood_pressure: "",
          skin_thickness: "",
          insulin: "",
          bmi: "",
          diabetes_pedigree_function: "",
          age: "",
        }}
        validationSchema={PredictDiabetesSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="pregnancies"
                  className="text-sm text-gray-700 block mb-1 font-medium"
                >
                  Pregnancies
                </label>
                <Field
                  type="number"
                  name="pregnancies"
                  id="pregnancies"
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  placeholder="Enter your pregnancies value"
                  onChange={(event) => handleChange(event, setFieldValue)}
                />
                <ErrorMessage
                  name="pregnancies"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="glucose"
                  className="text-sm text-gray-700 block mb-1 font-medium"
                >
                  Glucose
                </label>
                <Field
                  type="number"
                  name="glucose"
                  id="glucose"
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  placeholder="Enter your glucose value"
                  onChange={(event) => handleChange(event, setFieldValue)}
                />
                <ErrorMessage
                  name="glucose"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="blood_pressure"
                  className="text-sm text-gray-700 block mb-1 font-medium"
                >
                  Blood Pressure
                </label>
                <Field
                  type="number"
                  name="blood_pressure"
                  id="blood_pressure"
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  placeholder="Enter your blood pressure value"
                  onChange={(event) => handleChange(event, setFieldValue)}
                />
                <ErrorMessage
                  name="blood_pressure"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="skin_thickness"
                  className="text-sm text-gray-700 block mb-1 font-medium"
                >
                  Skin Thickness
                </label>
                <Field
                  type="number"
                  name="skin_thickness"
                  id="skin_thickness"
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  placeholder="Enter your skin thickness value"
                  onChange={(event) => handleChange(event, setFieldValue)}
                />
                <ErrorMessage
                  name="skin_thickness"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="insulin"
                  className="text-sm text-gray-700 block mb-1 font-medium"
                >
                  Insulin
                </label>
                <Field
                  type="number"
                  name="insulin"
                  id="insulin"
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  placeholder="Enter your insulin value"
                  onChange={(event) => handleChange(event, setFieldValue)}
                />
                <ErrorMessage
                  name="insulin"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="bmi"
                  className="text-sm text-gray-700 block mb-1 font-medium"
                >
                  BMI
                </label>
                <Field
                  type="number"
                  name="bmi"
                  id="bmi"
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  placeholder="Enter your bmi"
                  onChange={(event) => handleChange(event, setFieldValue)}
                />
                <ErrorMessage
                  name="bmi"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="diabetes_pedigree_function"
                  className="text-sm text-gray-700 block mb-1 font-medium"
                >
                  Diabetes Pedigree Function
                </label>
                <Field
                  type="number"
                  name="diabetes_pedigree_function"
                  id="diabetes_pedigree_function"
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  placeholder="Enter your diabetes pedigree function value"
                  onChange={(event) => handleChange(event, setFieldValue)}
                />
                <ErrorMessage
                  name="diabetes_pedigree_function"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="text-sm text-gray-700 block mb-1 font-medium"
                >
                  Age
                </label>
                <Field
                  type="number"
                  name="age"
                  id="age"
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  placeholder="Enter your age"
                  onChange={(event) => handleChange(event, setFieldValue)}
                />
                <ErrorMessage
                  name="age"
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

export default PredictDiabetesForm;
