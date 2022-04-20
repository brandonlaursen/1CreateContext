import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import horoscope context
import { HoroscopeContext } from "./context/HoroscopeContext";


//Wrap our app in our context provider
//Pass a value to the provider
const Root = () => {
  return (
    <HoroscopeContext.Provider value={{ sign: "Leo" }}>
      <App />
    </HoroscopeContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
