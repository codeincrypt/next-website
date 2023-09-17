"use client";
import { useState, useEffect } from "react";
import courses from "../../../json/courses.json";

export default function Courses() {
  const [datalist, setDatalist] = useState([]);
  const fetchData = async () => {
    const response = courses;
    // const data = await response.json();
    setDatalist(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="col-lg-12 text-center py-5">
        <h2>Hello, What Do You Want To Learn?</h2>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="my-2">
              <input className="input-elevated" type="text" placeholder="Search" />
            </div>
          </div>
        </div>
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
