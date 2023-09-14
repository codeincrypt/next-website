"use client";
import { useState, useEffect } from "react";
import tutorials from "../../json/tutorials.json";
import Link from "next/link";
import language from "../../json/language.json";
import courses from "../../json/courses.json";

export default function Home() {

  const [tutorialData, setTutorialData] = useState([]);
  const [languageData, setLanguageData] = useState([]);
  const [coursesData, setCoursesData] = useState([]);
  const fetchData = async () => {
    // const response = getTutorials();
    // const data = await response.json();
    setTutorialData(tutorials);
    setLanguageData(language);
    setCoursesData(courses);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="row justify-content-center mt-4">
        <div className="col-lg-9">
          <h1>Language</h1>
          <div className="row">
            {languageData.slice(0, 4).map((item, index) => (
              <div className="col-lg-3 cardslink" key={index}>
                <Link href={`/language/${item.slug}`}>
                  <div className="card mb-3">
                    <img
                      src={item.logo}
                      className="p-4"
                      style={{height:"200px"}}
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

      <div className="row justify-content-center mt-4">
        <div className="col-lg-9">
          <h1>Tutorials</h1>
          <div className="row">
            {tutorialData.slice(0, 3).map((item, index) => (
              <div className="col-lg-4 cardslink" key={index}>
                <Link href={`/tutorials/${item.slug}`}>
                  <div className="card mb-3">
                    <img
                      src={item.image}
                      className="card-img-top"
                      style={{height:"160px"}}
                      alt={item.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">Learn new</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-4 mb-4">
        <div className="col-lg-9">
          <h1>Courses</h1>
          <div className="row">
            {coursesData.slice(0, 3).map((item, index) => (
              <div className="col-lg-4 cardslink" key={index}>
                <Link href={`/courses/${item.slug}`}>
                  <div className="card mb-3">
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">Beginner to Advance</p>
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