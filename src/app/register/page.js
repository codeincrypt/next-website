"use client";
import Link from "next/link";
import "./../import.css";
import Head from "next/head";

export default function Register() {
  return (
    <div className="container">
      <Head>
        <title>Geeks - Register</title>
        <meta name="description" content="Geeks - Register" key="title" />
      </Head>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-12 text-center ">
          <div className="login-card">
            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/login_modal_new_logo.png" alt="geeksforgeeks" className="login-logo" />
            <h2 className="my-3">Sign Up </h2>
            <span>
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="Name"
              />
              <input
                className="form-control mt-2"
                type="text"
                name="username"
                placeholder="Email ID"
              />
              <input
                type="text"
                className="form-control mt-2"
                name="password"
                placeholder="Password"
              />
              <div className="d-grid mt-3">
                <button className="btn btn-success btn-block">Sign Up</button>
              </div>
              <p className="mt-3">
                Already have an account?{" "}
                <Link href="/login">Sign in here</Link>{" "}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
