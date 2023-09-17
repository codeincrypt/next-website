"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import language from "../../../json/language.json";

export default function Practice() {

  const [languageData, setLanguageData] = useState([]);
  const fetchData = async () => {
    // const response = getTutorials();
    // const data = await response.json();
    setLanguageData(language);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-4">
        <div className="col-lg-9">
          <h2>Practice</h2>
          <div className="row">
            {languageData.map((item, index) => (
              <div className="col-lg-3 cardslink" key={index}>
                <Link href={`/user/practice/${item.slug}`}>
                  <div className="card mb-3">
                    <img
                      src={item.logo}
                      className="p-4"
                      style={{height:"240px"}}
                      alt="Python Backend Development with Django"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">Learn {item.name} </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}