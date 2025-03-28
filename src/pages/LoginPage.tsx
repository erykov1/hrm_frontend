import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="img-container">
        <img
          src="	https://img.freepik.com/free-photo/handshake-close-up-executives_1098-1384.jpg"
          alt="hr image"
        />
      </div>
      <div className="login-form-container">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
