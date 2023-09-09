"use client";
import { useState, useEffect } from "react";
import tutorialsdata from "../../../json/tutorials.json";
import Link from "next/link";

export const metadata = {
  title: "Tutorials",
  description: "Tutorials",
};

export default function Tutorials() {
  const [datalist, setDatalist] = useState([]);
  const fetchData = async () => {
    const response = tutorialsdata;
    // const data = await response.json();
    setDatalist(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="col-lg-12 text-center py-5">
        <h2>Hello, Get our best tutorials here...</h2>
        <div className="my-3">
          <input class="input-elevated" type="text" placeholder="Search" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="row">
            {datalist.map((item, index) => (
              <div className="col-lg-4" key={index}>
                <Link href={`/tutorials/${item.slug}`}>
                  <div class="card mb-3">
                    <img
                      src={item.image}
                      class="card-img-top"
                      style={{height:"160px"}}
                      alt="Python Backend Development with Django"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{item.name}</h5>
                      <p class="card-text">Beginner to Advance</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
