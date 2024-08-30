import React from "react";
import CardContainer from "./components/CardContainer";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import { data } from "./helpers/data";

const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <CardContainer data={data} />
      <MyFooter />
    </div>
  );
};

export default App;
