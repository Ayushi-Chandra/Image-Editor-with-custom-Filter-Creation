import React from 'react'

import Swal from "sweetalert2";


import { useNavigate } from "react-router-dom";
import { Formik } from 'formik';

const Login = () => {
  const navigate = useNavigate();

  const userSubmit = async (formdata) => {
    console.log(formdata);

    const res = await fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You are now logged in",
      });
      res.json().then((data) => {
        console.log(data);
        sessionStorage.setItem("user", JSON.stringify(data));
        navigate("/imageeditor");
      });
    } else if (res.status === 400) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid username or password",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Something went wrong",
      });
    }
  };
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      
        
  <div className="container  h-100  mt-100  pt-100px">
  <div className="card text-black" style={{ borderRadius: 25 ,paddingTop:100}}>
  <h1 className="text-center fw-bold mx-3 mb-0 text-muted">Login Page</h1>
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid"
          alt="Phone image"
        />
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
       
        <Formik 
        initialValues={{ email: "", password: "" }}
                onSubmit={userSubmit}>
                  {({ values, handleChange, handleSubmit }) => (

        
        <form onSubmit={handleSubmit}>
          {/* Email input */}
          <div className="form-outline mb-4 p-100">
          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
           
            <label className="form-label" htmlfor="email">
              Email address
            </label>
            <input
            value={values.email}
            onChange={handleChange}
              type="email"
              id="email"
              className="form-control form-control-lg"
            />
          </div>
          {/* Password input */}
          <div className="form-outline mb-4">
          <i className="fas fa-lock fa-lg me-3 fa-fw" />
            
            
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
            value={values.password}
            onChange={handleChange}
              type="password"
              id="password"
              className="form-control form-control-lg"
            />
          </div>
          
          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Sign in
          </button>
          
        </form>
        )}
        </Formik>
      </div>
      </div>
      
    </div>
  </div>
</section>

    </div>
  );
};

export default Login