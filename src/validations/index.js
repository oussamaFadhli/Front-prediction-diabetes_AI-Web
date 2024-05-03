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

export const PatientProfileSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  address: Yup.string().required("Address is required"),
  tel: Yup.string().required("Telephone is required"),
  birthday: Yup.string().required("Birthday is required"),
});

export const MedicineProfileSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  address: Yup.string().required("Address is required"),
  tel: Yup.string().required("Telephone is required"),
  birthday: Yup.string().required("Birthday is required"),
  speciality: Yup.string().required("Choice your speciality"),
});
export const PredictDiabetesSchema = Yup.object().shape({
  pregnancies: Yup.number().required("Pregnancies is required"),
  glucose: Yup.number().required("Glucose is required"),
  blood_pressure: Yup.number().required("Blood Pressure is required"),
  skin_thickness: Yup.number().required("Skin Thickness is required"),
  insulin: Yup.number().required("Insulin is required"),
  bmi: Yup.number().required("BMI is required"),
  diabetes_pedigree_function: Yup.number().required(
    "Diabetes Pedigree Function is required"
  ),
  age: Yup.number().required("Age is required"),
});
