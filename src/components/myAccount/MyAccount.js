import React from "react";
import "./myAccount.css";

const notiData = [
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "move to archive",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "move to archive",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "move to archive",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "move to archive",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "move to archive",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "move to archive",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "move to archive",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "move to archive",
  },
];
function MyAccount() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6 align-items-center">
          <img src="/images/accountPic.svg" />
          <div
            style={{
              display: "inline-block",
              position: "relative",
              top: "1rem",
              left: "1rem",
              textAlign: "center",
            }}
          >
            <h4 className="profile-title">John Doe</h4>
            <span className="date">Last updated 02/06/2021</span>
          </div>
          <div
            style={{
              display: "inline-block",
              display: "inline-block",
              position: "relative",
              top: "1rem",
              left: "4rem",
              textAlign: "center",
            }}
          >
            <button className="btn btn-primary acc-btn">
              upload profile picture
            </button>
            <button className="btn btn-primary acc-btn2">Edit name</button>
          </div>
        </div>
      </div>
      <div className="row noti-body" style={{ margin: "2rem 0 2rem 0" }}>
        <div className="col-12" style={{ padding: "0", height: "3rem" }}>
          <form action="submit">
            <input
              type="password"
              style={{
                marginLeft: "1rem",
                height: "3rem",
                width: "70%",
                border: "none",
              }}
            />
            <button
              className="btn btn-primary"
              style={{
                marginLeft: "auto",
                float: "right",
                height: "3rem",
                backgroundColor: "#00028C",
              }}
            >
              update passward
            </button>
          </form>
        </div>
      </div>
      <div className=" noti-body" style={{ backgroundColor: "white" }}>
        <div className="row ">
          <div className="col-12 ml-4 mt-4">
            <h4 className="acc-title">Activity Log</h4>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-12">
            <ul className="noti-ul">
              <li style={{ display: "inline-block", width: "5rem" }}>All</li>
              <li style={{ display: "inline-block", width: "5rem" }}>
                Archive
              </li>
              <li
                style={{
                  display: "inline-block",
                  float: "right",
                  marginRight: "1.5rem",
                }}
              >
                Move all to Archive
              </li>
            </ul>
            <hr style={{ marginTop: 0, marginBottom: 0 }} />
          </div>
        </div>
        {notiData.map((el) => {
          return (
            <div className="row justify-content-between mt-4">
              <div className="col-md-5" style={{ marginLeft: "3rem" }}>
                <p className="noti-data">{el.data}</p>
              </div>
              <div className="col-md-4" style={{ textAlign: "right" }}>
                {" "}
                <button
                  className="btn btn-primary d-inline-block"
                  style={{
                    marginRight: "3rem",
                    backgroundColor: "#f5f8fa",
                    color: "#00028C",
                    border: "none",
                    borderRadius: "1rem",
                    borderColor: "white",
                  }}
                >
                  {el.btnData}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyAccount;
