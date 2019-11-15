import React from "react";

import "./App.css";

import Header from "./Components/Header/header";
// import Test from "./Components/TabView/test";
import Banner from "./Components/Banner/banner";
import Intro from "./Components/Intro/intro";
import { Provider } from "react-redux";
import store from "./Store/store";

function App() {
  return (
    <Provider store={store}>
      <div class="home-bg" style={{ overflowX: "hidden" }}>
        <Header />
      </div>
    </Provider>
  );
}

export default App;
