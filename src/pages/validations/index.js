import * as Yup from "yup";

export const AuthSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one capital letter and one digit"
      ),
  });
  