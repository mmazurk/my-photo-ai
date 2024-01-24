import { useContext, useEffect } from "react";
import UserContext from "../../store/user-context";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/router";

function Logout() {
  const { token } = useAuth();
  const { setUser, setToken } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/auth");
    }
  }, []);

  function logout() {
    localStorage.removeItem("myAItoken");
    setUser({});
    setToken(null);
    router.push("/");
  }

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "50vh" }}
    >
      <div className="text-center">
        <h2>Are you sure you want to log out?</h2>
        <button className="btn btn-primary" onClick={logout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Logout;
