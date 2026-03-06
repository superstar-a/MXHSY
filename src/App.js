import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "./login";
import Register from "./register";
import Notification from "./Notification";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const navigate = (newPage) => {
    setError(null);
    setPage(newPage);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  if (loading) return null;

  if (user) {
    return (
      <div className="app-wrapper">
        <div className="auth-card" style={{ textAlign: "center" }}>
          <div className="auth-icon">
            {user.photoURL ? (
              <img src={user.photoURL} alt="avatar" style={{ width: 56, height: 56, borderRadius: "50%" }} />
            ) : (
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            )}
          </div>
          <h2>Xin chào!</h2>
          <p className="subtitle">{user.displayName || user.email}</p>
          <button className="auth-btn" onClick={handleLogout} style={{ marginTop: 16 }}>
            Đăng xuất
          </button>
        </div>
      </div>
    );
  }

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