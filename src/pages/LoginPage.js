import * as React from "react";
import { Formik } from "formik";
import { LoginPage as TablerLoginPage } from "tabler-react";
import ApiCalls from "../api";

class LoginPage extends React.Component {
  state = {
    error: "",
  };

  onSubmitHandler = (values) => {
      alert(JSON.stringify(values));
    ApiCalls.post("/auth/sign_in.json", values).then((res) => {
      if (res.ok) {
        const response = res.data;
        console.log(response);
      } else {
        console.log("Login error");
      }
    });
  };

  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          // same as above, but feel free to move this into a class method now.
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={this.onSubmitHandler}
        render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <TablerLoginPage
            onSubmit={handleSubmit}
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
          />
        )}
      />
    );
  }
}

export default LoginPage;
