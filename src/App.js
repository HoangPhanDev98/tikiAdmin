import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import "./app.scss";
import HomePage from "./features/HomePage/HomePage";

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
