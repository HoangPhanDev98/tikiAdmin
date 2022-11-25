import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import "./app.scss";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
