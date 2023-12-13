import React from "react";
import "./profilePicture.scss";

export const ProfilePicture = () => {
    return <img className="profile-picture" src={process.env.PUBLIC_URL + "/profile.jpeg"} />;
}