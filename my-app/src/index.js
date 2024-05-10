import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Gallery from "./components/twoPicture";
import Tabtable from "./components/tatable";
import Counter from "./components/stateExample";
import AlertDismissable from "./components/myAlert";
import Counting from "./components/counter";
import InputField from "./components/controllInput";
import Visible from "./components/toggleVisibility";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Tabtable />
    <Gallery />
    <Counter />
    <Counting />
    <InputField />
    <Visible />
    <AlertDismissable />
  </div>
);
