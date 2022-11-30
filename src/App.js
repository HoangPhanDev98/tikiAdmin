import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import "./app.scss";
import HomePage from "./features/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./features/UserList";
import UserDetail from "./features/UserList/UserDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <div className="container">
          <SideBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user-list" element={<UserList />} />
            <Route path="/user-detail/:id" element={<UserDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
