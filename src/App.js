import style from "./style/App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <div className={style.appContainer}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
  
export default App;
