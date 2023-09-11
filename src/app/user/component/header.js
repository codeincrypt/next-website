import Link from "next/link";
import Logo from "../../../../public/assets/gfg-gg-logo.svg";
import Image from "next/image";
import { BiUser } from "react-icons/bi";

export default function Home() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image
            src={Logo}
            alt="W3 School"
            width="45"
            class="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            
          </ul>

          <form class="d-flex" role="search">
            <ul className="navbar-nav me-auto">
              <li className="nav-item mx-2">
                <Link className="nav-link" href="/user/profile">
                  <BiUser />
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" href="/user/courses">
                  My Courses
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" href="/login">
                  Logout
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
