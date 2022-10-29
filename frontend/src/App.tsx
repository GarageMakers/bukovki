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
import PaymentsPage from "./pages/PaymentsPage/PaymentsPage";

function App() {
  return (
    <Router>
      <div className="content">
        <div className="wrapper">
          <Routes>
            <Route path="/bukovki/sosedi" element={<LoginPage></LoginPage>}></Route>
            <Route path="/bukovki/sosedi/profile" element={<PersonalPage></PersonalPage>}></Route>
            <Route path="/bukovki/sosedi/chat" element={<ChatPage></ChatPage>}></Route>
            <Route path="/bukovki/sosedi/appeal" element={<AppealPage></AppealPage>}></Route>
            <Route path="/bukovki/sosedi/appeal/create" element={<CreateAppealPage></CreateAppealPage>}></Route>
            <Route path="/bukovki/sosedi/uk/profile" element={<UKPersonalPage></UKPersonalPage>}></Route>
            <Route path="/bukovki/sosedi/uk/appeal" element={<UKAppealPage></UKAppealPage>}></Route>
            <Route path="/bukovki/sosedi/payments" element={<PaymentsPage></PaymentsPage>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
