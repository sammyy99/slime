import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./Redux/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
    <div>
      <Header />
      <Body />
    </div>
    </Provider>
  );
};

export default App;
