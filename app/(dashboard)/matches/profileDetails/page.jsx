"use client";

import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  MapPin,
  BriefcaseBusiness,
  GraduationCap,
  Heart,
  Users,
  LockKeyhole,
  CalendarDays,
  UserRound,
  Ruler,
  Church,
  Check,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import AcountHeader from "@/components/AcountHeader";
import SideBar from "@/components/SideBar";
import ProfileImageSlider from "@/components/ProfileImageSlider";
import Primium from "@/components/Primium";

function Page() {
  return (
    <>
      <AcountHeader />

      <SideBar>
        <div className="dashboard-page profile-page">
          <Row>
            <Col xl={9} lg={8}>
              <ProfileImageSlider />

              <div className="user-profile-details">
                <section className="user-profile-section">
                  <div className="prof-header">
                    <h1>A Shab Ghosh</h1>
                    <div class="tag-badge-prof-det">
                      Profile managed by <span>Self</span>
                    </div>
                  </div>

                  <div className="user-profile-info-grid">
                    <div className="user-profile-info-item">
                      <div className="user-profile-info-icon">
                        <MapPin size={17} />
                      </div>
                      <div>
                        <small>Location</small>
                        <strong>Durgapur, West Bengal</strong>
                      </div>
                    </div>

                    <div className="user-profile-info-item">
                      <div className="user-profile-info-icon">
                        <Ruler size={17} />
                      </div>
                      <div>
                        <small>Height</small>
                        <strong>5ft 2in</strong>
                      </div>
                    </div>

                    <div className="user-profile-info-item">
                      <div className="user-profile-info-icon">
                        <Church size={17} />
                      </div>
                      <div>
                        <small>Religion</small>
                        <strong>Hindu</strong>
                      </div>
                    </div>

                    <div className="user-profile-info-item">
                      <div className="user-profile-info-icon">
                        <Users size={17} />
                      </div>
                      <div>
                        <small>Community</small>
                        <strong>Bania</strong>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="user-profile-section">
                  <div className="user-profile-section-heading">
                    <h3>About Her</h3>
                    <span>About her personality and lifestyle</span>
                  </div>

                  <p className="user-profile-about">
                    She is a simple, caring and family-oriented person. She
                    believes in maintaining a healthy balance between personal
                    and professional life. She enjoys spending time with family
                    and close friends and values honesty, understanding and
                    mutual respect in a relationship.
                  </p>
                </section>

                <section className="user-profile-section">
                  <div className="user-profile-section-heading">
                    <h3>You & Her</h3>
                    <span>Things you both may have in common</span>
                  </div>

                  <div className="user-profile-tags">
                    <span>Family Values</span>
                    <span>Similar Lifestyle</span>
                    <span>Same Community</span>
                  </div>
                </section>

                <section className="user-profile-section">
                  <div className="user-profile-section-heading">
                    <h3>Education</h3>
                    <span>Academic background</span>
                  </div>

                  <div className="user-profile-detail-row">
                    <div className="user-profile-detail-icon">
                      <GraduationCap size={19} />
                    </div>

                    <div className="user-profile-detail-content">
                      <strong>M.Com - Post Graduation</strong>
                      <span>Commerce</span>
                    </div>

                    <Check size={18} className="user-profile-detail-check" />
                  </div>
                </section>

                <section className="user-profile-section">
                  <div className="user-profile-section-heading">
                    <h3>Contact</h3>
                    <span>Connect with her when you are ready</span>
                  </div>

                  <div className="user-profile-contact-card">
                    <div className="user-profile-contact-icon">
                      <LockKeyhole size={20} />
                    </div>

                    <div className="user-profile-contact-content">
                      <strong>Contact details are private</strong>

                      <p>
                        Send an interest or connect with her to see contact
                        information.
                      </p>

                      <button type="button">
                        Connect Now
                        <MessageCircle size={14} />
                      </button>
                    </div>
                  </div>
                </section>

                <section className="user-profile-section">
                  <div className="user-profile-section-heading">
                    <h3>Career</h3>
                    <span>Professional information</span>
                  </div>

                  <div className="user-profile-detail-row">
                    <div className="user-profile-detail-icon">
                      <BriefcaseBusiness size={18} />
                    </div>

                    <div className="user-profile-detail-content">
                      <strong>Student</strong>
                      <span>Not working currently</span>
                    </div>
                  </div>

                  <div className="user-profile-income">
                    <span>Annual Income</span>
                    <strong>No Income</strong>
                  </div>
                </section>

                <section className="user-profile-section">
                  <div className="user-profile-section-heading">
                    <h3>Family</h3>
                    <span>Family background and values</span>
                  </div>

                  <div className="user-profile-detail-row">
                    <div className="user-profile-detail-icon">
                      <Users size={18} />
                    </div>

                    <div className="user-profile-detail-content">
                      <strong>
                        Father is a Businessman, Mother is a Homemaker
                      </strong>
                      <span>One younger brother</span>
                    </div>
                  </div>

                  <div className="user-profile-family-badge">
                    <ShieldCheck size={14} />
                    Family values are important
                  </div>
                </section>

                <section className="user-profile-section">
                  <div className="user-profile-section-heading">
                    <h3>Horoscope</h3>
                    <span>Astrological information</span>
                  </div>

                  <div className="user-profile-detail-row user-profile-horoscope-row">
                    <div className="user-profile-detail-icon">
                      <CalendarDays size={18} />
                    </div>

                    <div className="user-profile-detail-content">
                      <strong>12 September, 1999</strong>
                      <span>Birth Date</span>
                    </div>

                    <LockKeyhole size={16} />
                  </div>

                  <div className="user-profile-horoscope-private">
                    <LockKeyhole size={14} />
                    Horoscope details are private
                  </div>

                  <div className="user-profile-horoscope-action">
                    <strong>Contact Horoscope</strong>
                    <span>Ask her to share horoscope details with you.</span>
                  </div>
                </section>

                <section className="user-profile-section">
                  <div className="user-profile-section-heading">
                    <h3>Who is she looking for?</h3>
                    <span>Her preferences in a life partner</span>
                  </div>

                  <div className="user-profile-looking-header">
                    <div className="user-profile-looking-person">
                      <div className="user-profile-looking-avatar">
                        <UserRound size={22} />
                      </div>
                      <strong>Her Preferences</strong>
                    </div>

                    <Heart size={20} className="user-profile-heart-icon" />

                    <div className="user-profile-looking-person">
                      <div className="user-profile-looking-avatar">
                        <UserRound size={22} />
                      </div>
                      <strong>Your Profile</strong>
                    </div>
                  </div>

                  <div className="user-profile-match-message">
                    You may be a good match based on her preferences
                  </div>

                  <div className="user-profile-preference-list">
                    <div className="user-profile-preference-row">
                      <div>
                        <small>Age</small>
                        <strong>25 - 30 Years</strong>
                      </div>
                      <Check size={18} />
                    </div>

                    <div className="user-profile-preference-row">
                      <div>
                        <small>Height</small>
                        <strong>5ft 4in and above</strong>
                      </div>
                      <Check size={18} />
                    </div>

                    <div className="user-profile-preference-row">
                      <div>
                        <small>Marital Status</small>
                        <strong>Never Married</strong>
                      </div>
                      <Check size={18} />
                    </div>

                    <div className="user-profile-preference-row">
                      <div>
                        <small>Religion</small>
                        <strong>Hindu</strong>
                      </div>
                      <Check size={18} />
                    </div>

                    <div className="user-profile-preference-row">
                      <div>
                        <small>Mother Tongue</small>
                        <strong>Hindi, Bengali</strong>
                      </div>
                      <Check size={18} />
                    </div>

                    <div className="user-profile-preference-row">
                      <div>
                        <small>Caste</small>
                        <strong>
                          Bania, Brahmin, Kayastha, Agarwal, Maheshwari
                        </strong>
                      </div>
                      <Check size={18} />
                    </div>

                    <div className="user-profile-preference-row">
                      <div>
                        <small>City</small>
                        <strong>Kolkata, Durgapur, Asansol, Bengaluru</strong>
                      </div>
                      <Check size={18} />
                    </div>

                    <div className="user-profile-preference-row">
                      <div>
                        <small>Country</small>
                        <strong>India</strong>
                      </div>
                      <Check size={18} />
                    </div>
                  </div>
                </section>
              </div>
            </Col>

            <Col xl={3} lg={4}>
              <Primium />
            </Col>
          </Row>
        </div>
      </SideBar>
    </>
  );
}

export default Page;
