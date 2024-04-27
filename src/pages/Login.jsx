import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AuthSchema } from "../validations";
import axiosInstance from "../helpers/axios";

const Login = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axiosInstance.post("auth/login/", values);
      const { access, refresh } = response.data;
      
      // Store the tokens in local storage
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);
  
      setSuccessMessage("Login successful!");
      setErrorMessage("");
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("Login failed. Please try again.");
    }
    setSubmitting(false);
  };

  const handleChange = (event, setFieldValue) => {
    const { name, value } = event.target;
    setFieldValue(name, value);
  };

  return (
    <>
      <Navbar />
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={AuthSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                {successMessage && (
                  <div className="text-green-500">{successMessage}</div>
                )}
                {errorMessage && (
                  <div className="text-red-500">{errorMessage}</div>
                )}

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    onChange={(event) => handleChange(event, setFieldValue)}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    Don't have an account?
                    <Link className="underline text-blue-600" to="/register">
                      Sign up
                    </Link>
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white"
                  >
                    {isSubmitting ? "Signing up..." : "Sign up"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt=""
            src="src\assets\img\about.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default Login;
