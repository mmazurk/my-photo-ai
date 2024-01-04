import Link from "next/link";
import { useContext } from "react";
import UserContext from "../../store/user-context";

function Navbar() {
  const { token } = useContext(UserContext);
  const isLoggedin = token ? true : false;

  return (
    <>
      {isLoggedin ? (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid mx-3">
            <Link href="/" className="navbar-brand">
              Home Page
            </Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/library" className="nav-link">
                  My Library
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/photos" className="nav-link">
                  Create Photo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid mx-3">
            <Link href="/" className="navbar-brand">
              Home Page
            </Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  About Page
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
