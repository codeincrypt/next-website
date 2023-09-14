import Link from "next/link";
import Logo from "../../../../public/assets/gfg-gg-logo.svg";
import Image from "next/image";
import { BiUser, BiBookmarkAltMinus } from "react-icons/bi";
import { PiSignOutBold } from "react-icons/pi";

export default function Home() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image
            src={Logo}
            alt="W3 School"
            width="45"
            className="d-inline-block align-text-top"
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
          <ul className="navbar-nav me-auto"></ul>

          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto">
              <li className="nav-item mx-2">
                <Link className="nav-link text-lg" title="Profile" href="/user/profile">
                  <BiUser />
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link text-lg" title="My Courses" href="/user/courses">
                  <BiBookmarkAltMinus />
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link text-lg" title="Logout" href="/login">
                  <PiSignOutBold />
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
