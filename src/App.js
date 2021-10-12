import React from "react";
// import GlobalSwitch from "./routes/GlobalSwitch";
import Header from "./components/Header";
import UserSwitch from "./routes/UserSwitch";
import GlobalSwitch from "./routes/GlobalSwitch";

function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      {!token ? (
        <GlobalSwitch />
      ) : (
        <>
          <Header />
          <UserSwitch />
        </>
      )}
    </>
  );
}

export default App;
