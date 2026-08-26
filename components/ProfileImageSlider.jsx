"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ImagePlus,
  EllipsisVertical,
  Share2,
  Ban,
  Flag,
} from "lucide-react";

import ProfileCardFooter from "@/components/ProfileCardFooter";

const ProfileDetails = () => {
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

  const getTagClass = (tag) => {
    switch (tag) {
      case "Most Compatible":
        return "tag-most-compatible";

      case "Good Match":
        return "tag-good-match";

      case "Top Profile":
        return "tag-top-profile";

      case "New Profile":
        return "tag-new-profile";

      case "Highly Recommended":
        return "tag-highly-recommended";

      default:
        return "tag-default";
    }
  };

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

          <div className="profile-menu-wrapper" ref={menuRef}>
            {/* <div class="tag tag-most-compatible">Most Compatible</div> */}
            <button
              type="button"
              className="drop-log"
              onClick={() => setShowMenu((prev) => !prev)}
              aria-label="Profile options"
            >
              <EllipsisVertical size={16} />
            </button>

            {showMenu && (
              <div className="profile-action-dropdown">
                <button type="button">
                  <Share2 size={15} />
                  <span>Share</span>
                </button>

                <button type="button">
                  <Ban size={15} />
                  <span>Block / Ignore</span>
                </button>

                <button type="button" className="profile-report-action">
                  <Flag size={15} />
                  <span>Report Profile</span>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="details-overlay">
          <div className="profile-card-top">
            <div className={`tag ${getTagClass(profile.compatible)}`}>
              {profile.compatible}
            </div>
          </div>

          <ProfileCardFooter />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
