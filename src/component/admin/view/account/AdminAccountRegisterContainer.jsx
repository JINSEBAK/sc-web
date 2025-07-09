import MainContainer from "component/admin/common/AdminMainContainer";
import { Loader, ButtonGroup, Button } from "component/admin/common/Items";
import AccountForm from "./contents/AccountForm";
import { useState } from "react";
import { postAdminUserSignup } from "lib/adminApi";
import { RESULT } from "lib/common";
import { modalAlert, modalConfirm } from "util/common";
import { useEffect } from "react";
import AccountRegisterGuide from "./contents/AccountRegisterGuide";

const AdminAccountRegisterContainer = () => {
  //
  const [loader, setLoader] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [adminInfo, setAdminInfo] = useState({
    adminId: "",
    adminPw: "",
  });

  useEffect(() => {
    if (adminInfo.adminId.length > 0 && adminInfo.adminPw.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [adminInfo.adminId, adminInfo.adminPw]);

  const onChangeItem = (e) => {
    setAdminInfo({ ...adminInfo, [e.target.name]: [e.target.value] });
  };

  const onClickVisible = () => {
    setIsVisible((prev) => !prev);
  };

  const onClickCancel = () => {
    setAdminInfo({ adminId: "", adminPw: "" });
  };

  const onClickRegister = () => {
    modalConfirm({
      title: "",
      message: "관리자를 추가 등록하시겠습니까?",
      onConfirm: () => {
        setLoader(true);
        const frm = new FormData();
        frm.append("adminId", adminInfo.adminId);
        frm.append("adminPw", adminInfo.adminPw);

        postAdminUserSignup(frm).then((data) => {
          setLoader(false);
          if (data.resultCode === RESULT.SUCCESS) {
            modalAlert({
              message: "등록되었습니다.",
              onConfirm: () => {
                setAdminInfo({ adminId: "", adminPw: "" });
              },
            });
          } else {
            modalAlert({
              message: "잠시 후 다시 시도해주세요.",
            });
          }
        });
      },
    });
  };
  return (
    <MainContainer name="account">
      {loader && <Loader />}
      <AccountForm
        adminInfo={adminInfo}
        isVisible={isVisible}
        onChangeItem={onChangeItem}
        onClickVisible={onClickVisible}
      />
      <ButtonGroup right>
        <Button name="취소" onClick={onClickCancel} />
        <Button
          name="등록"
          primary
          disabled={disabled}
          onClick={onClickRegister}
        />
      </ButtonGroup>

      <AccountRegisterGuide />
    </MainContainer>
  );
};

export default AdminAccountRegisterContainer;
