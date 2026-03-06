import { useState } from "react";
import Login from "./login";
import Register from "./register";
import Notification from "./Notification";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");
  const [error, setError] = useState(null);

  const navigate = (newPage) => {
    setError(null);
    setPage(newPage);
  };

  return (
    <div className="app-wrapper">
      <Notification error={error} onClose={() => setError(null)} />
      <div className="auth-viewport">
        <div className={`auth-slider${page === "register" ? " shifted" : ""}`}>
          <div className="auth-slide">
            <Login
              onGoRegister={() => navigate("register")}
              onError={setError}
            />
          </div>
          <div className="auth-slide">
            <Register
              onGoLogin={() => navigate("login")}
              onError={setError}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;