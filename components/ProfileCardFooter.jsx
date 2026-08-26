"use client";

import React from "react";
import Link from "next/link";
import { MailPlus, Star, X, MessageCircleMore } from "lucide-react";

function ProfileCardFooter({ profile }) {
  const stopCardClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className="overlay-footer"
      onClick={stopCardClick}
      onPointerDown={stopCardClick}
      onTouchStart={stopCardClick}
    >
      <button type="button" className="overlay-item" onClick={stopCardClick}>
        <MailPlus size={17} />
        <span>Interest</span>
      </button>

      <button type="button" className="overlay-item" onClick={stopCardClick}>
        <Star size={17} />
        <span>Shortlist</span>
      </button>

      <button type="button" className="overlay-item" onClick={stopCardClick}>
        <X size={17} />
        <span>Ignore</span>
      </button>

      <Link href="/messages" className="overlay-item" onClick={stopCardClick}>
        <MessageCircleMore size={17} />
        <span>Chat</span>
      </Link>
    </div>
  );
}

export default ProfileCardFooter;
