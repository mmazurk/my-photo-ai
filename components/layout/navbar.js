import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid mx-3">
          <Link href="/" className="navbar-brand">
            My Home Page
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
    </>
  );
}

export default Navbar;
