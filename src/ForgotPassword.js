import { useState } from "react";
import { auth } from "./firebase";
import { sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword({ onGoLogin, onSuccess, onError }) {
  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      onSuccess({
        title: "Email đã được gửi!",
        message: `Chúng tôi đã gửi link đặt lại mật khẩu tới ${email}. Vui lòng kiểm tra hộp thư.`,
      });
    } catch (error) {
      onError(error);
    }
  };

  return (
    <div className="auth-card">
      <div className="auth-icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"/>
        </svg>
      </div>
      <h2>Quên mật khẩu</h2>
      <p className="subtitle">Nhập email để nhận link đặt lại mật khẩu</p>

      <form onSubmit={handleReset}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email đã đăng ký"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="auth-btn">
          Gửi link đặt lại
        </button>
      </form>

      <div className="auth-footer">
        <a onClick={onGoLogin}>← Quay lại đăng nhập</a>
      </div>
    </div>
  );
}

export default ForgotPassword;
