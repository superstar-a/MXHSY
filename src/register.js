import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register({ onGoLogin, onError }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Đăng ký thành công!");
      onGoLogin();
    } catch (error) {
      onError(error);
    }
  };

  return (
    <div className="auth-card">
      <div className="auth-icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 12c2.7 0 4.8-2.1 4.8-4.8S17.7 2.4 15 2.4s-4.8 2.1-4.8 4.8S12.3 12 15 12zm-9 2.4v1.6h-2v2.4H1.2v-2.4C1.2 13.6 5.4 12 7.8 12c.4 0 .9.05 1.4.13A7.6 7.6 0 0 0 6 19.2v.8H0v-2.4c0-2.56 3.73-4.8 6-5.2zM15 14.4c3.2 0 9.6 1.6 9.6 4.8v2.4H5.4v-2.4c0-3.2 6.4-4.8 9.6-4.8z"/>
        </svg>
      </div>
      <h2>Đăng ký</h2>
      <p className="subtitle">Tạo tài khoản mới ngay hôm nay</p>

      <form onSubmit={handleRegister}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="auth-btn">
          Tạo tài khoản
        </button>
      </form>

      <div className="auth-footer">
        Đã có tài khoản?{" "}
        <a onClick={onGoLogin}>Đăng nhập</a>
      </div>
    </div>
  );
}

export default Register;