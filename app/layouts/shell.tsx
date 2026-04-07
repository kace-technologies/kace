import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export default function Shell() {
  const { pathname } = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: "64px" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
