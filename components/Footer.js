import React from "react";

const Footer = () => {
  return (
    <div className="grid mx-auto  grid-cols-1 text-center md:text-left md:grid-cols-4 gap-y-16 px-36 py-10">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold ">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY </h5>
        <p>Accessibility</p>
        <p>This is not a real website</p>
        <p>Its a good and clean clone</p>
        <p>Referrals accepted</p>
        <p>Papafam</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold ">HOST</h5>
        <p>Papa React</p>
        <p>Presents</p>
        <p>Zero to full Stack Hero</p>
        <p>Hundreds of Students</p>
        <p>Join Now</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Say Hi Youtube</p>
        <p>Easter Eggs</p>
        <p>For the win</p>
      </div>
     
    </div>
  );
};

export default Footer;
