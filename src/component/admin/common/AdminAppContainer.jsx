import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "./AdminHeader";
import Navigation from "./AdminNavigation";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { modalAlert } from "util/common";

const AdminAppContainer = ({ children }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);

  const scrollRef = useRef(null);
  const location = useLocation();

  useLayoutEffect(() => {
    const adminId = sessionStorage.getItem("nick");
    if (!adminId) {
      modalAlert({
        title: "",
        message: "로그인 후 이용해주세요.",
        onConfirm: () => {
          navigate("/admin");
        },
      });
    }
  }, []);

  useLayoutEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const id = sessionStorage.getItem("code");
    if (id) {
      setLogin(true);
    } else {
      // 유효하지 않은 경우 로그인 화면으로 튕김
      navigate("/admin");
    }
  }, []);

  return (
    <>
      {login && (
        <div className="container" ref={scrollRef}>
          <Header />
          <Navigation />
          <Outlet />
          {children}
        </div>
      )}
    </>
  );
};

export default AdminAppContainer;
