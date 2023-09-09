import Link from "next/link";
import Logo from "../../../../public/assets/gfg-gg-logo.svg";
import Image from "next/image";

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
            <li className="nav-item mx-2">
              <Link className="nav-link" href="/tutorials">
                Tutorials
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" href="/courses">
                Courses
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" href="/contests">
                Contests
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" href="/practice">
                Practice
              </Link>
            </li>
          </ul>

          <form class="d-flex" role="search">
            <ul className="navbar-nav me-auto">
              <li className="nav-item mx-2">
                <Link className="nav-link" href="/login">
                  Sign in
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" href="/register">
                  Sign up
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
