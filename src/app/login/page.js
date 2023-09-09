"use client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";

import "./../import.css";

export default function Login() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className="container">
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-12 text-center ">
          <div className="login-card">
            <img
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/login_modal_new_logo.png"
              alt="geeksforgeeks"
              className="login-logo"
            />
            <h2 className="my-3">Sign In </h2>
            <span>
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="Username"
              />
              <input
                type="text"
                className="form-control mt-2"
                name="password"
                placeholder="Password"
              />
              <div className="d-grid mt-3">
                <button
                  className="btn btn-success btn-block"
                  onClick={handleClick}
                >
                  Sign In
                </button>
              </div>
              <p className="mt-3">
                New Geeks? <Link href="/register">Create an account</Link>{" "}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
