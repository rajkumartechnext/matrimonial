"use client";

import React from "react";
import { Row, Col } from "react-bootstrap";

import AcountHeader from "@/components/AcountHeader";
import SideBar from "@/components/SideBar";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function Page() {
  return (
    <>
      <AcountHeader />

      <SideBar>
        <div className="dashboard-page">
          <Row>
            <Col xl={12}>
              <div className="matches-search-wrapper"></div>
            </Col>
          </Row>
        </div>
      </SideBar>
    </>
  );
}

export default Page;
