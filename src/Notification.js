const errorMessages = {
  "auth/invalid-credential": {
    title: "Sai thông tin đăng nhập",
    message: "Email hoặc mật khẩu không chính xác. Vui lòng kiểm tra lại.",
  },
  "auth/user-not-found": {
    title: "Tài khoản không tồn tại",
    message: "Không tìm thấy tài khoản nào với email này.",
  },
  "auth/wrong-password": {
    title: "Mật khẩu sai",
    message: "Mật khẩu bạn nhập không đúng. Vui lòng thử lại.",
  },
  "auth/invalid-email": {
    title: "Email không hợp lệ",
    message: "Địa chỉ email bạn nhập không đúng định dạng.",
  },
  "auth/email-already-in-use": {
    title: "Email đã được đăng ký",
    message: "Email này đã có tài khoản. Vui lòng đăng nhập thay thế.",
  },
  "auth/weak-password": {
    title: "Mật khẩu quá yếu",
    message: "Mật khẩu cần có ít nhất 6 ký tự.",
  },
  "auth/too-many-requests": {
    title: "Quá nhiều lần thử",
    message: "Tài khoản tạm khóa do nhập sai nhiều lần. Vui lòng thử lại sau.",
  },
  "auth/network-request-failed": {
    title: "Lỗi kết nối",
    message: "Không thể kết nối mạng. Vui lòng kiểm tra internet và thử lại.",
  },
  "auth/popup-blocked": {
    title: "Popup bị chặn",
    message: "Trình duyệt đã chặn cửa sổ đăng nhập Google. Vui lòng cho phép popup và thử lại.",
  },
  "auth/operation-not-allowed": {
    title: "Chưa kích hoạt đăng nhập Google",
    message: "Phương thức đăng nhập Google chưa được bật trong Firebase Console.",
  },
  "auth/unauthorized-domain": {
    title: "Domain không được phép",
    message: "Domain này chưa được thêm vào danh sách cho phép trong Firebase Console.",
  },
};

function Notification({ error, onClose }) {
  if (!error) return null;

  const info = errorMessages[error.code] || {
    title: "Đã xảy ra lỗi",
    message: "Vui lòng thử lại.",
  };

  return (
    <div className="notif-overlay" onClick={onClose}>
      <div className="notif-box" onClick={(e) => e.stopPropagation()}>
        <div className="notif-icon-wrap">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        </div>
        <p className="notif-title">{info.title}</p>
        <p className="notif-msg">{info.message}</p>
        <button className="notif-btn" onClick={onClose}>
          Đã hiểu
        </button>
      </div>
    </div>
  );
}

export default Notification;
