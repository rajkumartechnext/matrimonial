"use client";

import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, BookImage } from "lucide-react";

const ProfileSlider = () => {
  const profile = {
    id: 1,
    name: "A Shab",
    age: 26,
    location: "Durgapur",
    caste: "Bania",
    height: "5ft 2in",
    work: "Student",
    income: "No Income",
    education: "M.Com",
    managedBy: "Self",
    active: "Active Today",
    compatible: "Most Compatible",
    images: [
      "/images/matches/no-1.jpg",
      "/images/matches/no-2.jpg",
      "/images/matches/no-3.jpg",
      "/images/matches/no-4.jpg",
    ],
  };

  const [currentImage, setCurrentImage] = useState(0);

  const menuRef = useRef(null);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === profile.images.length - 1 ? 0 : prev + 1,
    );
  };

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? profile.images.length - 1 : prev - 1,
    );
  };

  return (
    <div className="profile-details-wrapper">
      <div className="mateches-profile">
        <div className="profile-image-slider">
          <img
            src={profile.images[currentImage]}
            alt={`${profile.name} ${currentImage + 1}`}
            className="profile-card-image"
          />

          {profile.images.length > 1 && (
            <button
              type="button"
              className="profile-slider-arrow profile-slider-prev"
              onClick={previousImage}
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {profile.images.length > 1 && (
            <button
              type="button"
              className="profile-slider-arrow profile-slider-next"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>

        <div className="details-overlay">
          <div className="profile-card-top">
            <div className="tag-premium">Go with premium</div>
          </div>
          <div className="text-center">
            <button className="add-button" type="button">
              <BookImage size={17} /> Add More Photos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSlider;
