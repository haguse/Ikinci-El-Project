import React from "react";
// import GlobalSwitch from "./routes/GlobalSwitch";
import Header from "./components/Header";
import UserSwitch from "./routes/UserSwitch";

function App() {
  return (
    <>
      <Header />
      {/* <GlobalSwitch /> */}
      <UserSwitch />
    </>
  );
}

export default App;
