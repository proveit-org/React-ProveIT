import React, { Component } from "react";
import CreateTab from "./createTab";
import VerifyTab from "./verifyTab";
import "./Tabs.css";

class Tabs extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.currentTab === 0 ? (
          <div>
            <ul
              class="nav nav-tabs"
              id="myTab"
              role="tablist"
              style={{
                backgroundColor: "#F9F7F7",
                padding: "10px 0px 0px 30px"
              }}
            >
              <li class="nav-item">
                <a
                  class="nav-link active "
                  id="Create-tab"
                  data-toggle="tab"
                  href="#Create"
                  role="tab"
                  aria-controls="Create"
                  aria-selected="true"
                  // style={{
                  //   fontSize: "28px",
                  //   fontFamily: "Proxima Nova",
                  //   color: "#818281"
                  // }}
                >
                  Create
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="Verify-tab"
                  data-toggle="tab"
                  href="#Verify"
                  role="tab"
                  aria-controls="Verify"
                  aria-selected="false"
                  // style={{
                  //   fontSize: "28px",
                  //   fontFamily: "Proxima Nova",
                  //   color: "#818281"
                  // }}
                >
                  Verify
                </a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="Create"
                role="tabpanel"
                aria-labelledby="Create-tab"
                style={{ marginTop: "6%", textAlign: "center" }}
              >
                <CreateTab />
              </div>
              <div
                class="tab-pane fade"
                id="Verify"
                role="tabpanel"
                aria-labelledby="Verify-tab"
                style={{ marginTop: "6%", textAlign: "center" }}
              >
                <VerifyTab />
              </div>
            </div>{" "}
          </div>
        ) : (
          <div>
            <ul
              class="nav nav-tabs"
              id="myTab"
              role="tablist"
              style={{
                backgroundColor: "#F9F7F7",
                padding: "10px 0px 0px 30px"
              }}
            >
              <li class="nav-item">
                <a
                  class="nav-link "
                  id="Create-tab"
                  data-toggle="tab"
                  href="#Create"
                  role="tab"
                  aria-controls="Create"
                  aria-selected="true"
                  style={{
                    fontSize: "28px",
                    fontFamily: "Proxima Nova",
                    color: "#818281"
                  }}
                >
                  Create
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="Verify-tab"
                  data-toggle="tab"
                  href="#Verify"
                  role="tab"
                  aria-controls="Verify"
                  aria-selected="false"
                  style={{
                    fontSize: "28px",
                    fontFamily: "Proxima Nova",
                    color: "#818281"
                  }}
                >
                  Verify
                </a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade "
                id="Create"
                role="tabpanel"
                aria-labelledby="Create-tab"
                style={{ marginTop: "6%", textAlign: "center" }}
              >
                <CreateTab />
              </div>
              <div
                class="tab-pane fade show active"
                id="Verify"
                role="tabpanel"
                aria-labelledby="Verify-tab"
                style={{ marginTop: "6%", textAlign: "center" }}
              >
                <VerifyTab />
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Tabs;
