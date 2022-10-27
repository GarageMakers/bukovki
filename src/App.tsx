import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Profile from "./components/Profile/Profile";

import LoginPage from "./pages/LoginPage/LoginPage";
import ChatPage from "./pages/ChatPage/ChatPage";

function App() {
  return (
    <Router>
      <div className="content">
        <div className="wrapper">
          <Profile></Profile>
          <Routes>
            <Route path="/Sosedi" element={<LoginPage></LoginPage>}></Route>
            <Route path="/Sosedi/chat" element={<ChatPage></ChatPage>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
