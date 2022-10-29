import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import PersonalPage from "./pages/PersonalPage/PersonalPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AppealPage from "./pages/AppealPage/AppealPage";

function App() {
  return (
    <Router>
      <div className="content">
        <div className="wrapper">
          <Routes>
            <Route path="/Sosedi" element={<LoginPage></LoginPage>}></Route>
            <Route path="/Sosedi/profile" element={<PersonalPage></PersonalPage>}></Route>
            <Route path="/Sosedi/chat" element={<ChatPage></ChatPage>}></Route>
            <Route path="/Sosedi/appeal" element={<AppealPage></AppealPage>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
