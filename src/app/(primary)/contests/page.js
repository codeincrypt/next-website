"use client";
import { useState, useEffect } from "react";
import contest from "../../../json/contest.json";

export default function Contest() {
  const [datalist, setDatalist] = useState([]);
  const fetchData = async () => {
    const response = contest;
    // const data = await response.json();
    setDatalist(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-success card border-0 rounded-0 p-5 text-white text-center">
        <div className="col-lg-12">
          <h1>GFG Weekly Coding Contest</h1>
          <p>Participate every Sunday at 7 PM.</p>
          <button className="btn btn-outline-warning text-white">
            Subscribe
          </button>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            {datalist.map((item, index) => (
              <div className="col-lg-12">
                <div className="row p-3" key={index}>
                  <div className="col-lg-3">
                    <img
                      src={item.image}
                      className="card-img-top card borer-0"
                      alt="Python Backend Development with Django"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="card-body">
                      <p className="mb-1 text-success">{item.date}</p>
                      <h4 className="card-title">{item.name}</h4>
                      <p className="mt-3">3 Question | 100 Marks | 90 Minutes</p>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-3">
                    <button className="btn btn-outline-success px-5">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
