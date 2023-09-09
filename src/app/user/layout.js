import Footer from "./component/footer";
import Header from "./component/header";

export default function UserLayout({ children }) {
  return (
    <>
      <Header />
      <section>{children}</section>
      <Footer />
    </>
  );
}
