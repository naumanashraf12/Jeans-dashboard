import React, { useState, useEffect, Component } from "react";
import { withRouter, Link } from "react-router-dom";
import history from "../../helpers/history";
import DashboardIcon from "../../assets/images/dashboard.js";
import AppointmentIcon from "../../assets/images/appointment";
import BookIcon from "../../assets/images/bookIcon";
import Prescription from "../../assets/images/prescription";
import Triage from "../../assets/images/triage";
import "./Sidebar.css";
// doctor component
function SideBar({ active, setHandleActive, location }) {
  // side bar items
  const itemsData = [
    {
      component: DashboardIcon,
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Notifications",
      component: AppointmentIcon,
      link: "/dashboard/notification",
    },
    {
      name: "Myaccount",
      component: BookIcon,
      link: "/dashboard/account",
    },
    {
      name: "User Management",
      component: Triage,
      link: "/dashboard/usermanagement",
    },
    {
      name: "Group Management",
      component: Prescription,
      link: "/dashboard/groupmanagement",
    },
  ];

  const [activeItem, setActiveItem] = useState(itemsData[0]);
  // make svg compoennt
  const makeSvgComponent = (Component, isActive) => {
    const activeColorOne = "#01676B";
    const activeColorTwo = "#FFF";
    const disableColorOne = "#FFFFFF";
    const disableColorTwo = "#01676b";
    return (
      <Component
        colorOne={isActive ? activeColorOne : disableColorOne}
        colorTwo={isActive ? activeColorTwo : disableColorTwo}
      />
    );
  };

  // getting active path
  const path = location.pathname;
  // setting current active tab
  useEffect(() => {
    const currnetItem = itemsData.find((el) => path === el.link);
    if (currnetItem) setActiveItem(currnetItem);
    return () => {
      setActiveItem(itemsData[0]);
    };
  }, [path]);

  // main return

  return (
    <>
      <div className="sideBar sideBarDiv d-none d-md-block">
        <div className="centerDiv">
          <img
            onClick={() => history.push("/")}
            src="/images/jeanss.svg"
            className="logo"
          ></img>
        </div>

        <div className="itemsFlex">
          <div className="w-100">
            {itemsData.map((item, index) => {
              const isActive = activeItem.link === item.link;
              return (
                <Link to={item.link}>
                  <div
                    onClick={() => setActiveItem(item)}
                    key={index}
                    className={
                      isActive
                        ? "DashboardSideBarItem sideBarItemActive"
                        : "DashboardSideBarItem"
                    }
                  >
                    <div style={{ width: "40px" }}>
                      {item.component &&
                        makeSvgComponent(item.component, isActive)}
                    </div>
                    <div className="title" style={{ color: "#01676b" }}>
                      {item.name}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* mobile Side Bar */}
      <div className="d-block d-md-none">
        <div
          onClick={() => setHandleActive(false)}
          className={
            active ? "sideBarModal sideBarModalActive" : "sideBarModal"
          }
        ></div>
        <div
          className={
            active
              ? "sideBarM sideBarDiv sideBarMActive"
              : "sideBarM sideBarDiv"
          }
        >
          <div className="centerDiv" style={{ marginBottom: "20rem" }}>
            <img
              onClick={() => history.push("/")}
              src="/images/logo.svg"
              className="logo"
            ></img>
          </div>

          <div className="itemsFlex" style={{ marginTop: "20rem" }}>
            <div className="w-100">
              {itemsData.map((item, index) => {
                const isActive = activeItem.link === item.link;
                return (
                  <Link to={item.link}>
                    <div
                      onClick={() => {
                        setActiveItem(item);
                        setHandleActive(false);
                      }}
                      key={index}
                      className={
                        isActive
                          ? "DashboardSideBarItem sideBarItemActive"
                          : "DashboardSideBarItem"
                      }
                    >
                      <div style={{ width: "40px" }}>
                        {item.component &&
                          makeSvgComponent(item.component, isActive)}
                      </div>
                      <div className="title">{item.name}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default withRouter(SideBar);
