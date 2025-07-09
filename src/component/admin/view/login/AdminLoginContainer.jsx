import { useState } from "react";
import { RESULT } from "lib/common";
import { useNavigate } from "react-router-dom";
import LoginContainer from "./contents/LoginContainer";
import { postLoginAdmin } from "lib/adminApi";
import { modalAlert } from "util/common";

const AdminLoginContainer = () => {
  //
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({ adminId: "", adminPw: "" });

  const onChangeInput = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  // enter key 입력 시 로그인
  const onKeyPress = (e) => {
    if (e.code === "Enter") {
      onClickLogin();
    }
  };
  // input clear
  const onClear = (name) => {
    setAdmin({ ...admin, [name]: "" });
  };

  const onClickLogin = () => {
    //
    const frm = new FormData();
    frm.append("adminId", admin.adminId);
    frm.append("adminPw", admin.adminPw);

    postLoginAdmin(frm).then((data) => {
      if (data.resultCode === RESULT.SUCCESS) {
        sessionStorage.setItem("code", "Y");
        sessionStorage.setItem("nick", admin.adminId);
        // 메인 화면으로 이동
        setTimeout(() => {
          navigate("/admin/works/list");
        }, 1000);
      } else {
        modalAlert({ title: "", message: data.resultMsg });
      }
    });
  };

  return (
    <LoginContainer
      title={"<em>S</em>mart<em>C</em>ore<br>Administrator"}
      info={admin}
      onClear={onClear}
      onChangeInput={onChangeInput}
      onClickLogin={onClickLogin}
      onKeyPress={onKeyPress}
    />
  );
};

export default AdminLoginContainer;
