import style from "./style/App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Search from "./components/Search";
import Explore from "./components/Explore";
import Reels from "./components/Reels";
import Messages from "./components/Messages";
import Notification from "./components/Notification";
import Create from "./components/Create";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className={style.appContainer}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/create" element={<Create />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
