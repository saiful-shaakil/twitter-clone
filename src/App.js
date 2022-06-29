import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import LoginPage from "./Components/LoginPage";
import RequireAuth from "./Components/RequireAuth";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <MainPage />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
