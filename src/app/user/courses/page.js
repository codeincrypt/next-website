"use client";
import { useState, useEffect } from "react";
import users from "../../../json/user";

export default function Courses() {
  const [datalist, setDatalist] = useState([]);
  const fetchData = async () => {
    const response = users.enrolledCourse;
    // const data = await response.json();
    setDatalist(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="col-lg-12">
      <div className="card border-0 p-4">
        <div className="text-center mb-4">
          <button className="btn btn-outline-success mx-1">
            Enrolled Courses
          </button>
          <button className="btn btn-outline-success mx-1">
            Registered Courses
          </button>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="row">
              {datalist.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="card mb-3">
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt="Python Backend Development with Django"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">Beginner to Advance</p>
                      <div className="d-grid mt-3">
                        <button className="btn btn-outline-success text-sm">
                          Continue learning
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
