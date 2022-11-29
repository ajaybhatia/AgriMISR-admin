import * as Yup from "yup";

import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

import Logo from "../../assets/images/logo.png";
import { Navigate } from "react-router-dom";
import React from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useLogin } from "../../api/auth-api-hooks";
import useUserStore from "../../store/useUserStore";

const Login = () => {
  const { setUser, token, setToken } = useUserStore();

  const { mutate, isLoading } = useLogin({
    onSuccess: (data) => {
      if (data.message) {
        toast.error(data.message);
      } else {
        setUser(data);
        setToken(data.token);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .trim()
          .email("Invalid email address")
          .required("Email is required"),
        password: Yup.string().trim().required("Password is required"),
      }),
      onSubmit: ({ email, password }) => {
        mutate({ email, password });
      },
    });

  if (token) {
    return <Navigate replace to="/dashboard" />;
  }

  return (
    <Row className="vh-100 bg-login">
      <Col
        md={12}
        lg={6}
        xl={4}
        xxl={4}
        className="d-flex flex-column justify-content-center vh-100 ms-auto p-5 bg-white"
      >
        <div>
          <h1 className="text-center mb-5">
            <img src={Logo} alt="logo" />
          </h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={!!touched.email && !!errors.email}
              />
              <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={!!touched.password && !!errors.password}
              />
              <FormFeedback>{errors.password}</FormFeedback>
            </FormGroup>
            <Button disabled={isLoading} type="submit" block color="primary">
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
