import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function RootLayout() {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/register", "/student"].includes(
    location.pathname
  );
  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Outlet />
      {!hideHeaderFooter && <Footer />}
    </>
  );
}
