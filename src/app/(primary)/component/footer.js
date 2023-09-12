"use client";
import { useState, useEffect } from "react";
import language from "../../../json/language.json";
import dsa from "../../../json/dsaconcept.json";
import webdev from "../../../json/webdevelopment.json";
export default function Footer() {
  const [languageData, setLanguageData] = useState([]);
  const [dsaData, setDsaData] = useState([]);
  const [webdevData, setWebdevData] = useState([]);
  const fetchData = async () => {
    const response = language;
    // const data = await response.json();
    setLanguageData(response);
    setDsaData(dsa);
    setWebdevData(webdev);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="col-lg-12">
      <footer className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3 mb-3">
              <img
                src="https://media.geeksforgeeks.org/auth-dashboard-uploads/gfgFooterLogoDark.png"
                width={200}
                alt="gfg logo"
              />

              <p className="mt-3 small text-muted">Created a dummy geeksforgeeks website can be a valuable exercise for learning web development, UI/UX design, and Next Js front-end technologies. However, always be mindful of legal and ethical considerations when imitating established brands like geeksforgeeks.</p>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Company</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Legal
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Careers
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    In Media
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Language</h5>
              {languageData.slice(0,5).map((item, index) => (
                <ul className="nav flex-column" key={index}>
                  <li className="nav-item mb-2">
                    <a
                      href={`languages/${item.slug}`}
                      className="nav-link p-0 text-muted"
                    >
                      {item.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>DSA Concept</h5>
              {dsaData.slice(0,5).map((item, index) => (
                <ul className="nav flex-column" key={index}>
                  <li className="nav-item mb-2">
                    <a
                      href={`/${item.slug}`}
                      className="nav-link p-0 text-muted"
                    >
                      {item.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Web Development</h5>
              {webdevData.slice(0,5).map((item, index) => (
                <ul className="nav flex-column" key={index}>
                  <li className="nav-item mb-2">
                    <a
                      href={`languages/${item.slug}`}
                      className="nav-link p-0 text-muted"
                    >
                      {item.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
            <p className="text-center">Design by codeincrypt.</p>
            <p className="text-right">Exploring & learning Next.js</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <svg className="bi" width="24" height="24">
                    {/* <use xlink:href="#twitter"></use> */}
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <svg className="bi" width="24" height="24">
                    {/* <use xlink:href="#instagram"></use> */}
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <svg className="bi" width="24" height="24">
                    {/* <use xlink:href="#facebook"></use> */}
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
