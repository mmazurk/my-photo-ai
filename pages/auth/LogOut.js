import { useNavigate } from "react-router-dom";

function Logout({ logout }) {
    const navigate = useNavigate();

    function logoutReturn() {
        logout();
        navigate("/");
    }

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "50vh" }}
    >
      <div className="text-center">
        <h2>Are you sure you want to log out?</h2>
        <button className="btn btn-primary" onClick={logoutReturn}>Log Out</button>
      </div>
    </div>
  );
}

export default Logout;
