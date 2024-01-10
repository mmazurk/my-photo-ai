import { useRouter } from "next/navigation";
import { useContext } from "react";
import UserContext from "../../store/user-context";

function Logout() {
  const navigate = useRouter();
  const { setUser, setToken } = useContext(UserContext);

  function logout() {
    localStorage.removeItem("myAItoken");
    setUser({});
    setToken(null);
    navigate.push("/");
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
