import React, { Component } from "react";
import AOS from "aos";
import "./metaverse.css";

class Metaverse extends Component {
  state = {};
  componentDidMount() {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
    });
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ overflow: "hidden" }}>
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-2" />
            <div
              class="col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-8"
              style={{ padding: "0% 6% 0% 6%" }}
            >
              <span
                class="mt-4 mb-5 btn metaverseSpan"
                data-aos="zoom-in"
                data-aos-offset="200"
                // data-aos-delay="50"
                data-aos-duration="1000"
              >
                Metaverse
              </span>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-2" />
          </div>
          <div class="row" style={{ textAlign: "center" }}>
            <div
              class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-4 firstFrame"
              data-aos="flip-right"
              data-aos-offset="200"
              // data-aos-delay="50"
              data-aos-duration="1000"
            >
              <img
                class="metaverseIcons"
                src={require("../../Assets/Logo/blockchain.PNG")}
              />
              <div>
                <span class="metaverseIconText">
                  Public blockchain with a high <br />
                  grade of decentralization
                </span>
              </div>
            </div>
            <div
              class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-4 secondFrame"
              data-aos="flip-right"
              data-aos-offset="200"
              // data-aos-delay="50"
              data-aos-duration="1000"
            >
              <img
                class="metaverseIcons"
                src={require("../../Assets/Logo/dollar.png")}
              />
              <div>
                <span class="metaverseIconText">
                  Experts on asset tokenization
                </span>
              </div>
            </div>
            <div
              class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-4 thirdFrame"
              data-aos="flip-left"
              data-aos-offset="200"
              // data-aos-delay="50"
              data-aos-duration="1000"
            >
              <img
                class="metaverseIcons"
                src={require("../../Assets/Logo/Services.png")}
              />
              <div>
                <span class="metaverseIconText">
                  Blockchain as a service <br /> solution
                </span>
              </div>
            </div>

            <div
              class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-4 fourthFrame"
              data-aos="flip-left"
              data-aos-offset="200"
              // data-aos-delay="50"
              data-aos-duration="1000"
            >
              <img
                class="metaverseIcons"
                src={require("../../Assets/Logo/earth.png")}
              />
              <div>
                <span class="metaverseIconText">
                  Open Source development <br /> community
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Metaverse;
