import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      {/* createBrowserRouter의 children으로 설정한 컴포넌트들이 Outlet에 출력되게 된다! */}
      <Outlet />
    </div>
  );
};

export default Root;
