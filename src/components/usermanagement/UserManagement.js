import React from "react";
import "./usermanagement.css";

const notiData = [
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "read as mark",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "read as mark",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "read as mark",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "read as mark",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "read as mark",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "read as mark",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "read as mark",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "read as mark",
  },
];

function UserManagement() {
  return (
    <div>
      <div
        className="row noti-body"
        style={{ margin: "0 0 2rem 0", padding: "0", overflow: "hidden" }}
      >
        <div className="col-12" style={{ padding: "0", height: "3rem" }}>
          <form action="submit">
            <input
              type="password"
              placeholder="New user email Address"
              style={{
                marginLeft: "1rem",
                height: "3rem",
                width: "60%",
                border: "none",
              }}
            />
            <button
              className="btn btn-primary float-md-right"
              style={{
                marginLeft: "auto",
                height: "3rem",
                backgroundColor: "#00028C",
              }}
            >
              Add user
            </button>
          </form>
        </div>
      </div>
      <div className=" noti-body" style={{ backgroundColor: "white" }}>
        <div className="row justify-content-between">
          <div className="col-md-12">
            <ul className="noti-ul">
              <li style={{ display: "inline-block" }}>All</li>
              <li style={{ display: "inline-block" }}>Active User</li>
              <li style={{ display: "inline-block" }}>Blocked user</li>
              <li style={{ display: "inline-block" }}>Removed user</li>
            </ul>
            <hr style={{ marginTop: 0, marginBottom: 0 }} />
          </div>
        </div>
        <div className="row justify-content-between">
          {notiData.map((el) => {
            return (
              <div
                className="col-md-5 "
                style={{
                  margin: "2rem",
                  marginLeft: "3rem",
                }}
              >
                <img src="/images/Ellipse 10.svg" alt="" />
                <div
                  style={{
                    display: "inline-block",
                    position: "relative",
                    top: "1rem",
                    left: "1rem",
                  }}
                >
                  <span
                    style={{
                      color: "#01676B",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    jhon doe
                  </span>
                  <span style={{ display: "block", color: "#21AA93" }}>
                    username@.asd
                  </span>
                </div>
                <button
                  className="btn btn-danger user-btn"
                  style={{
                    color: "#EB5757",
                    backgroundColor: "#f9eaea",
                    borderColor: "white",
                  }}
                >
                  remove
                </button>
                <button
                  className="btn btn-warning user-btn2"
                  style={{
                    color: "#F2994A",
                    backgroundColor: "#f7edde",
                    borderColor: "white",
                  }}
                >
                  block
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
