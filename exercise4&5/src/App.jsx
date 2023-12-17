import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import PageNotFound from "./pages/PageNotFound";
import AboutPage from "./pages/AboutPage";
import Homepage from "./pages/HomePage";
import { DashboardMessages } from "./pages/DashboardPage";
import { DashboardTasks } from "./pages/DashboardPage";
import NavBar from "./components/NavBar";
import { UserProvider } from "./context/UserContext";
import "../index.css";

function App(props) {
  return (
    <Router>
      <NavBar />
      <UserProvider>
        <Routes>
          <Route index element={<Homepage {...props} />} />
          <Route path="dash" element={<DashboardPage {...props} />}>
            <Route path="messages" element={<DashboardMessages />} />
            <Route path="tasks" element={<DashboardTasks />} />
          </Route>
          <Route path="/about" element={<AboutPage {...props} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
