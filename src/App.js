import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./Redux/appStore";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
    <div className="h-[100vh] bg-black">
      <Header />
      <Body />
    </div>
    </BrowserRouter>
    </Provider>
  );
};

export default App;
