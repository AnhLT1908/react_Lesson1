import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";

export function Profile() {
    return (
        <img src={img1} width={100} height={100}/>
    );
};

export function Profile2() {
    return (
        <img src={img2} width={200} height={200}/>
    );
};

const Gallery = () => {
  return (
    <div>
        <Profile/>
        <Profile2/>
    </div>
  )
};

export default Gallery;