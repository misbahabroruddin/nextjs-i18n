"use client";

import React from "react";
import "@/assets/js/bootstrap.bundle.min.js";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

function HomeLayout({ children }) {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Sidebar />
        <main className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col">{children}</div>
            </div>
          </div>
        </main>
      </div>
      <div className="sidebar-overlay"></div>
    </>
  );
}

export default HomeLayout;
