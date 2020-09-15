import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useCustomState } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useCustomState();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
            <p>{user.displayName}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
