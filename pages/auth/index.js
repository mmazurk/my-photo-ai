import { login, logout } from "../../helpers/auth/authentication";
import LoginForm from "../../components/auth/LoginForm";

function LoginPage() {
  return (
    <div>
      <LoginForm login={login} />
    </div>
  );
}

export default LoginPage;
