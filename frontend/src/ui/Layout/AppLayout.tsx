import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
