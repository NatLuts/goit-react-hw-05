import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import { Suspense } from "react";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Suspense>
        <section>
          <Outlet />
        </section>
      </Suspense>
    </div>
  );
};

export default Layout;
