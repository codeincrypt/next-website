"use client";
import { useState, useEffect } from "react";
import user from "../../../json/user.json";

export default function Profile() {
  const [profiledata, setProfiledata] = useState(user.profile);
  const fetchData = async () => {
    const response = user.profile;
    console.log(response)
    // const data = await response.json();
    setProfiledata(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="col-lg-12">
      <div className="card border-0 p-4">
        <div className="row justify-content-center py-5">
          <div className="col-lg-2">
            <img
              src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
              className="img-fluid" alt="profile"
            />

            <div className="my-4 text-center">
              <h5>{profiledata.name}</h5>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-3">
                <p>Email</p>
              </div>
              <div className="col-lg-9">
                <h6>{profiledata.email}</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <p>User Id</p>
              </div>
              <div className="col-lg-9">
                <h6>{profiledata.userid}</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <p>UUID</p>
              </div>
              <div className="col-lg-9">
                <h6>{profiledata.uuid}</h6>
              </div>
            </div>
              <div className="border-hr"></div>
            <div className="row">
              <div className="col-lg-4">
                <p className="mb-1 mt-4">Mobile Number</p>
                <h6>{profiledata.phone}</h6>
              </div>
              <div className="col-lg-4">
                <p className="mb-1 mt-4">Date of Birth</p>
                <h6>{profiledata.address.zipcode}</h6>
              </div>
              <div className="col-lg-4">
                <p className="mb-1 mt-4">User Type</p>
                <h6>{profiledata.type}</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <p className="mb-1 mt-4">Address</p>
                <h6>
                  {profiledata.address.street} {profiledata.address.city}
                </h6>
              </div>
              <div className="col-lg-4">
                <p className="mb-1 mt-4">State</p>
                <h6>{profiledata.address.state}</h6>
              </div>
              <div className="col-lg-4">
                <p className="mb-1 mt-4">Country</p>
                <h6>{profiledata.address.country}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}