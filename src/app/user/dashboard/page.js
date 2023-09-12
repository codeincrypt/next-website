"use client";
import { useState, useEffect } from "react";
import users from "../../../json/user.json";

export default function Dashboard() {
  const [profile, setProfile] = useState({});
  const [datalist, setDatalist] = useState([]);
  const fetchData = async () => {
    const profile = users.profile;
    const response = users.enrolledCourse;
    // const data = await response.json();
    setProfile(profile);
    setDatalist(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="col-lg-12">
      <div className="card border-0 p-4">
        <div className="row">
          <div className="col-lg-4 text-center">
            <img
              className="img-fluid"
              width={100}
              src="https://media.geeksforgeeks.org/img-practice/user_web-1598433228.svg"
              alt="codeincrypt"
            />

            <h2 className="mt-3 text-success">{profile.name}</h2>
            <h6 className="">{profile.username}</h6>
            <h3 className="mt-2">
              {profile.rank} <span className="text-muted small">Rank</span>{" "}
            </h3>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
}
