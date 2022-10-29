import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import PersonalPage from "./pages/PersonalPage/PersonalPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AppealPage from "./pages/AppealPage/AppealPage";
import CreateAppealPage from "./pages/CreateAppealPage/CreateAppealPage";
import UKPersonalPage from "./pages/UKPersonalPage/UKPersonalPage";
import UKAppealPage from "./pages/UKAppealPage/UKAppealPage";

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
            <Route path="/Sosedi/appeal/create" element={<CreateAppealPage></CreateAppealPage>}></Route>
            <Route path="/Sosedi/UK/profile" element={<UKPersonalPage></UKPersonalPage>}></Route>
            <Route path="/Sosedi/UK/appeal" element={<UKAppealPage></UKAppealPage>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
