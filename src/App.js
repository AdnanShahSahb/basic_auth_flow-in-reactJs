import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginComponent";
import WelcomePage from "./pages/WelcomePage"
import Page404 from "./pages/Page404";

function App() {
  return (
    <>
      <header className="App-header">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="*" element={<Page404/> } />
        </Routes>
      </header>

</>
  );
}

export default App;
