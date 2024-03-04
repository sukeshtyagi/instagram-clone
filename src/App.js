import style from "./style/App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Reels from "./components/Reels";
import Messages from "./components/Messages";
import Create from "./components/Create";
import Profile from "./components/Profile";
import React from "react";
import Error from "./components/Error";

function App() {
  return (
    <>
      <div className={style.appContainer}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/create" element={<Create />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
