import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NewPost from "./pages/newPost/NewPost";
import Register from "./pages/register/Register";
import Inboxs from "./pages/inboxs/Inboxs";
import Stories from "./pages/stories/Stories";
// import Notice from "./pages/notice/Notice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setting from "./pages/settings/Setting";
import Feed from "./components/feed/Feed";

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />}>
          <Route path="/" element={<Feed />} />
          <Route path="/inboxs" element={<Inboxs />} />
          <Route path="/newPost" element={<NewPost />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/settings" element={<Setting />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
