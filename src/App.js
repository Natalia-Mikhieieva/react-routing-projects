import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar"; // <== IMPORT
import HomePage from "./pages/HomePage"; // <== IMPORT
import AboutPage from "./pages/AboutPage"; // <== IMPORT
import ProjectsPage from "./pages/ProjectsPage"; // <== IMPORT
import ErrorPage from "./pages/ErrorPage"; // <== IMPORT
import HomePageWithNavigate from "./pages/HomePageWithNavigate";
import projectsData from "./projects-data.json";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import QueryStringExample from "./pages/QueryStringExample";

import { Routes, Route } from "react-router-dom"; // <== IMPORT

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/*  <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<HomePageWithNavigate />} /> {/* <== ADD */}
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/projects"
          element={<ProjectsPage projects={projectsData} />}
        />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/example" element={<QueryStringExample />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
