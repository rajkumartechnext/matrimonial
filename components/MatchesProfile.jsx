"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ImagePlus } from "lucide-react";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";

import ProfileCardFooter from "@/components/ProfileCardFooter";

function MatchesProfile() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      animated: true,
      showClass: "f-fadeIn",
      hideClass: "f-fadeOut",
      dragToClose: true,
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
      },
      Thumbs: {
        type: "classic",
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  const profiles = [
    {
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
      nearby: "Nearby",
      images: [
        "/images/matches/no-1.jpg",
        "/images/matches/no-2.jpg",
        "/images/matches/no-3.jpg",
        "/images/matches/no-4.jpg",
      ],
    },
    {
      id: 2,
      name: "Debasmita Saha",
      age: 24,
      location: "Durgapur",
      caste: "Kayastha",
      height: "5ft 3in",
      work: "Not planning to work",
      income: "No Income",
      education: "B.Sc",
      managedBy: "Self",
      active: "Active Today",
      compatible: "Most Compatible",
      nearby: "Nearby",
      images: [
        "/images/matches/no-2.jpg",
        "/images/matches/no-3.jpg",
        "/images/matches/no-4.jpg",
        "/images/matches/no-5.jpg",
      ],
    },
    {
      id: 3,
      name: "Ananya",
      age: 25,
      location: "Kolkata",
      caste: "Brahmin",
      height: "5ft 4in",
      work: "Software Professional",
      income: "₹5 Lakh",
      education: "B.Tech",
      managedBy: "Self",
      active: "Active Today",
      compatible: "Good Match",
      nearby: "Nearby",
      images: [
        "/images/matches/no-3.jpg",
        "/images/matches/no-4.jpg",
        "/images/matches/no-5.jpg",
        "/images/matches/no-1.jpg",
      ],
    },
    {
      id: 4,
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
      compatible: "Top Profile",
      nearby: "Nearby",
      images: [
        "/images/matches/no-4.jpg",
        "/images/matches/no-2.jpg",
        "/images/matches/no-3.jpg",
        "/images/matches/no-4.jpg",
      ],
    },
    {
      id: 5,
      name: "Debasmita Saha",
      age: 24,
      location: "Durgapur",
      caste: "Kayastha",
      height: "5ft 3in",
      work: "Not planning to work",
      income: "No Income",
      education: "B.Sc",
      managedBy: "Self",
      active: "Active Today",
      compatible: "Most Compatible",
      nearby: "Nearby",
      images: [
        "/images/matches/no-5.jpg",
        "/images/matches/no-3.jpg",
        "/images/matches/no-4.jpg",
        "/images/matches/no-5.jpg",
      ],
    },
  ];

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

  const handleCardClick = (profileId) => {
    router.push(`/matches/${profileId}`);
  };

  const renderProfile = (profile) => (
    <div
      className="mateches-profile"
      onClick={() => handleCardClick(profile.id)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleCardClick(profile.id);
        }
      }}
    >
      <img
        className="profile-card-image"
        src={profile.images[0]}
        alt={profile.name}
      />

      <div className="details-overlay">
        <div className="profile-card-top">
          <div className={`tag ${getTagClass(profile.compatible)}`}>
            {profile.compatible}
          </div>

          <div className="profile-card-top-right">
            <div
              className="more-images"
              data-fancybox={`profile-${profile.id}`}
              data-src={profile.images[0]}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <ImagePlus size={14} />
              <span>{profile.images.length}</span>
            </div>
          </div>
        </div>

        <div className="profile-card-content">
          <div className="activity">{profile.active}</div>

          <div className="name">
            {profile.name}, <span>{profile.age}</span>
          </div>

          <div className="profile-details">
            <span>
              {profile.height} • {profile.location} • {profile.caste}
            </span>

            <span>
              {profile.work} • {profile.income}
            </span>

            <span>{profile.education}</span>
          </div>

          <div className="tag-badge">
            Profile managed by <span>{profile.managedBy}</span>
          </div>
        </div>

        <ProfileCardFooter profile={profile} />
      </div>

      <div className="fancybox-hidden-gallery">
        {profile.images.slice(1).map((image, index) => (
          <a
            key={index}
            href={image}
            data-fancybox={`profile-${profile.id}`}
            data-caption={`${profile.name} - ${index + 2}`}
          >
            <img src={image} alt={`${profile.name} ${index + 2}`} />
          </a>
        ))}
      </div>
    </div>
  );

  if (!isMobile) {
    return (
      <div className="matches-desktop-list">
        <div className="matches-profile-row">
          {profiles.map((profile) => (
            <div className="matches-desktop-col" key={profile.id}>
              {renderProfile(profile)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="matches-mobile-reel">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        speed={550}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: false,
          sensitivity: 0.8,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        modules={[Mousewheel, Keyboard]}
        className="matches-mobile-swiper"
        resistance={true}
        resistanceRatio={0.65}
        threshold={10}
        grabCursor={true}
      >
        {profiles.map((profile) => (
          <SwiperSlide key={profile.id} className="matches-mobile-slide">
            {renderProfile(profile)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MatchesProfile;
