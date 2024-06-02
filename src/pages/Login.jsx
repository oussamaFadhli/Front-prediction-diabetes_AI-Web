import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { Navbar, PageTitle } from "../components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AuthSchema } from "../validations";
import axiosInstance from "../helpers/axios";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Login = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const navigate = useNavigate(); // Access navigate function from React Router

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axiosInstance.post("auth/login/", values);
      const { access, refresh } = response.data;

      // Store the tokens in local storage
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);

      setSuccessMessage("Login successful!");
      setErrorMessage("");

      if (response.status === 200) {
        // Navigate to the dashboard page
        navigate("/dashboard");
      }
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
      <PageTitle title="Login" />

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

                <div className="relative">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <Field
                    type={showPassword ? "text" : "password"} // Toggle between text and password
                    name="password"
                    placeholder="Enter password"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    onChange={(event) => handleChange(event, setFieldValue)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-4 flex items-center"
                    onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
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
            src="src/assets/img/about.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default Login;
