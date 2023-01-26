import { useFormik } from "formik";
import * as Yup from "yup";

import "./form.css";

function Form() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please provide a vaild email address")
        .required("Please provide a vaild email address"),
    }),
    onSubmit: (value) => {
      alert("You will be notified soon! Keep an eye on " + value.email + ". Thank You.");
    },
  });

  const checkError = formik.touched.email && formik.errors.email;
  return (
    <>
      <form onSubmit={formik.handleSubmit} noValidate>
        <input
          className={checkError ? "email highlight-error" : "email"}
          onChange={formik.handleChange}
          value={formik.values.email}
          type="email"
          name="email"
          placeholder="Your email address..."
          autoComplete="off"
        />
        {checkError && <p className="error">{formik.errors.email}</p>}
        <button className="btn" type="submit">
          Notify Me
        </button>
      </form>
    </>
  );
}

export default Form;
