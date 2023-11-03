"use client";

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Logo,
  SmallLogo,
  Closes,
  HeaderSearch,
  Flag,
  FlagUS,
  FlagFR,
  FlagES,
  FlagDE,
  FlagID,
  Notification,
  Avatar2,
  Avatar3,
  Avatar6,
  Avatar17,
  Avatar13,
  Avatar,
  Logout,
  LogoWhite,
  Avatar1,
} from "@/assets/imagePath";
import Link from "next/link";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import {
  useParams,
  usePathname,
  useSelectedLayoutSegments,
} from "next/navigation";

const Header = (props) => {
  const [toggle, SetToggle] = useState(false);
  const [currentLang, setCurrentLang] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const urlSegments = useSelectedLayoutSegments();
  const pathname = usePathname();
  const ACTIVE_LANG = useParams()?.locale;

  const handlesidebar = () => {
    document.body.classList.toggle("mini-sidebar");
    SetToggle((current) => !current);
  };
  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };
  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  };
  const sidebarOverlay = () => {
    document.querySelector(".main-wrapper").classList.toggle("slide-nav");
    document.querySelector(".sidebar-overlay").classList.toggle("opened");
    document.querySelector("html").classList.toggle("menu-opened");
  };

  const handleActiveLang = () => {
    if (pathname.includes("/")) {
      setCurrentLang("/");
    }
    if (pathname.slice(0, 3).includes("/en")) {
      setCurrentLang("/en");
    }
  };

  const exclusionArray = [
    "/reactjs/template/dream-pos/index-three",
    "/reactjs/template/dream-pos/index-one",
  ];
  if (exclusionArray.indexOf(window.location.pathname) >= 0) {
    return "";
  }

  useEffect(() => {
    handleActiveLang();

    const handleFullscreenChange = () => {
      setIsFullscreen(
        document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  const toggleFullscreen = (elem) => {
    elem = elem || document.documentElement;
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  };

  return (
    <>
      <div className="header">
        {/* Logo */}
        <div
          className={`header-left ${toggle ? "" : "active"}`}
          onMouseLeave={expandMenu}
          onMouseOver={expandMenuOpen}
        >
          <Link href={`/${ACTIVE_LANG}`} className="logo logo-normal">
            <img src={Logo.src} alt="" />
          </Link>
          <Link href={`/${ACTIVE_LANG}`} className="logo logo-white">
            <img src={LogoWhite.src} alt="" />
          </Link>
          <Link href={`/${ACTIVE_LANG}`} className="logo-small">
            <img src={SmallLogo.src} alt="" />
          </Link>
          <Link
            id="toggle_btn"
            href="#"
            style={{
              display: pathname.includes("tasks")
                ? "none"
                : pathname.includes("compose")
                ? "none"
                : "",
            }}
            onClick={handlesidebar}
          >
            <FeatherIcon icon="chevrons-left" className="feather-16" />
          </Link>
        </div>
        {/* /Logo */}
        <Link
          id="mobile_btn"
          className="mobile_btn"
          href="#"
          onClick={sidebarOverlay}
        >
          <span className="bar-icon">
            <span />
            <span />
            <span />
          </span>
        </Link>
        {/* Header Menu */}
        <ul className="nav user-menu">
          {/* Flag */}
          <li className="nav-item dropdown has-arrow flag-nav nav-item-box">
            <Link
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
            >
              {/* <i data-feather="globe" /> */}
              <FeatherIcon icon="globe" />
            </Link>
            <div className="dropdown-menu dropdown-menu-right">
              <Link
                href={`/id/${urlSegments}`}
                className={`dropdown-item ${currentLang === "/" && "active"}`}
              >
                <img src={FlagID.src} alt="" height={16} /> Indonesia
              </Link>
              <Link
                href={`/en/${urlSegments}`}
                className={`dropdown-item ${currentLang === "/en" && "active"}`}
              >
                <img src={FlagUS.src} alt="" height={16} /> English
              </Link>
            </div>
          </li>
          {/* /Flag */}
          <li className="nav-item nav-item-box">
            <Link
              href={`/en/${urlSegments}`}
              id="btnFullscreen"
              onClick={() => toggleFullscreen()}
              className={isFullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
            >
              {/* <i data-feather="maximize" /> */}
              <FeatherIcon icon="maximize" />
            </Link>
          </li>
          {/* Notifications */}
          <li className="nav-item dropdown nav-item-box">
            <Link
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              {/* <i data-feather="bell" /> */}
              <FeatherIcon icon="bell" />
              <span className="badge rounded-pill">2</span>
            </Link>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <Link href="#" className="clear-noti">
                  {" "}
                  Clear All{" "}
                </Link>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message active">
                    <Link href="/dream-pos/activities">
                      <div className="media d-flex">
                        <span className="avatar flex-shrink-0">
                          <img alt="" src={Avatar2.src} />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">John Doe</span> added
                            new task{" "}
                            <span className="noti-title">
                              Patient appointment booking
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              4 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link href="/dream-pos/activities">
                      <div className="media d-flex">
                        <span className="avatar flex-shrink-0">
                          <img alt="" src={Avatar3.src} />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Tarah Shropshire</span>{" "}
                            changed the task name{" "}
                            <span className="noti-title">
                              Appointment booking with payment gateway
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              6 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link href="/dream-pos/activities">
                      <div className="media d-flex">
                        <span className="avatar flex-shrink-0">
                          <img alt="" src={Avatar6.src} />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Misty Tison</span>{" "}
                            added{" "}
                            <span className="noti-title">Domenic Houston</span>{" "}
                            and <span className="noti-title">Claire Mapes</span>{" "}
                            to project{" "}
                            <span className="noti-title">
                              Doctor available module
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              8 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <Link href="/dream-pos/activities">View all Notifications</Link>
              </div>
            </div>
          </li>
          {/* /Notifications */}
          <li className="nav-item dropdown has-arrow main-drop">
            <Link
              href="#"
              className="dropdown-toggle nav-link userset"
              data-bs-toggle="dropdown"
            >
              <span className="user-info">
                <span className="user-letter">
                  <img src={Avatar1.src} alt="" className="img-fluid" />
                </span>
                <span className="user-detail">
                  <span className="user-name">John Smilga</span>
                  <span className="user-role">Super Admin</span>
                </span>
              </span>
            </Link>
            <div className="dropdown-menu menu-drop-user">
              <div className="profilename">
                <div className="profileset">
                  <span className="user-img">
                    <img src={Avatar1.src} alt="" />
                    <span className="status online" />
                  </span>
                  <div className="profilesets">
                    <h6>John Smilga</h6>
                    <h5>Super Admin</h5>
                  </div>
                </div>
                <hr className="m-0" />
                <Link
                  className="dropdown-item"
                  href="/dream-pos/profile/user-profile"
                >
                  <i className="me-2" data-feather="user" /> My Profile
                </Link>
                <Link
                  className="dropdown-item"
                  href="/dream-pos/settings/generalsettings"
                >
                  <i className="me-2" data-feather="settings" />
                  Settings
                </Link>
                <hr className="m-0" />
                <Link className="dropdown-item logout pb-0" href="/signIn">
                  <img src={Logout.src} className="me-2" alt="img" />
                  Logout
                </Link>
              </div>
            </div>
          </li>
        </ul>
        {/* /Header Menu */}
        {/* Mobile Menu */}
        <div className="dropdown mobile-user-menu">
          <Link
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-ellipsis-v" />
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" href="profile.html">
              My Profile
            </Link>
            <Link className="dropdown-item" href="generalsettings.html">
              Settings
            </Link>
            <Link className="dropdown-item" href="signin.html">
              Logout
            </Link>
          </div>
        </div>
        {/* /Mobile Menu */}
      </div>
    </>
  );
};

export default Header;
