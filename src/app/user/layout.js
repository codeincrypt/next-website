import Footer from "./component/footer";
import Header from "./component/header";
import Sidebar from "./component/sidebar";

import "./../../css/sidebar.css";

export default function UserLayout({ children }) {
  return (
    <>
      <Header />
      <section className="container-fluid userbody">
        <div className="row ">
          <div className="col-lg-2">
            <Sidebar />
          </div>
          <div className="col-lg-10">{children}</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
