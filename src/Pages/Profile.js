import React from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        <RiArrowLeftLine size={30} />
      </button>
      <div className="flex flex-col items-center justify-center m-11">
        {/* Header */}
        <h1 className="font-medium text-3xl">Profile</h1>
        {/* Profile Photo */}
        <></>
        {/* User Email & Name */}
        <></>
        {/* Subscription Plan */}
        <></>
        {/* Courses covered */}
      </div>
    </>
  );
};

export default Profile;
