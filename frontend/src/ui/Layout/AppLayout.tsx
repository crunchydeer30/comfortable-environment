import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-1 container mx-auto p-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
