import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

// front
import UserAppContainer from "component/layout/UserAppContainer";
import MainContainer from "component/views/main/MainContainer";
import AboutContainer from "component/views/about/AboutContainer";
import TechContainer from "component/views/tech/TechContainer";
import ProjectContainer from "component/views/project/ProjectContainer";
import ContactContainer from "component/views/contact/ContactContainer";
// 2025년 Renewal 버전
import AIContainer from "component/views/ai/AIContainer";
import BigDataContainer from "component/views/bigdata/BigDataContainer";
import SmartFitContainer from "component/views/smartfit/SmartFitContainer";

import AiPqcSolution from "component/views/product/AiPqcSolution";
import FaiPqcSolution from "component/views/product/FaiPqcSolution";
import BlockChainPlatform from "component/views/product/BlockChainPlatform";
import AiMidasSolution from "component/views/product/AiMidasSolution";

import RecruitContainer from "component/views/recruit/RecruitContainer";
import InquiryContainer from "component/views/inquiry/InquiryContainer";

// admin
import AdminAppContainer from "component/admin/common/AdminAppContainer";
import AdminInquiryContainer from "component/admin/view/inquiry/AdminInquiryContainer";
import AdminWorkContainer from "component/admin/view/work/AdminWorkContainer";
import AdminLoginContainer from "component/admin/view/login/AdminLoginContainer";
import AdminWorkDetailContainer from "component/admin/view/work/AdminWorkDetailContainer";
import AdminWork from "component/admin/view/work/AdminWork";
import AdminInquiry from "component/admin/view/inquiry/AdminInquiry";
import AdminInquiryDetailContainer from "component/admin/view/inquiry/AdminInquiryDetailContainer";
import AdminWorkRegisterContainer from "component/admin/view/work/AdminWorkRegisterContainer";
import AdminWorkModifyContainer from "component/admin/view/work/AdminWorkModifyContainer";
import AdminAccountRegisterContainer from "component/admin/view/account/AdminAccountRegisterContainer";
import AdminAccount from "component/admin/view/account/AdminAccount";

function App() {
  return (
    <HashRouter>
      {/* <BrowserRouter>  */}
      <Routes>
        <Route element={<UserAppContainer />}>
          <Route path="/" element={<MainContainer />} />
          <Route path="/main" element={<MainContainer />} />
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/tech" element={<TechContainer />} />
          <Route path="/projects" element={<ProjectContainer />} />
          <Route path="/contact" element={<ContactContainer />} />
          <Route path="/inquiry" element={<InquiryContainer />} />

          <Route path="/ai" element={<AIContainer />} />
          <Route path="/big-data" element={<BigDataContainer />} />
          <Route path="/smart-fit" element={<SmartFitContainer />} />
          {/* products */}
          <Route path="/product/ai-pqc" element={<AiPqcSolution />} />
          <Route path="/product/fai-pqc" element={<FaiPqcSolution />} />
          <Route path="/product/blockchain" element={<BlockChainPlatform />} />
          <Route path="/product/ai-midas" element={<AiMidasSolution />} />

          <Route path="/recruit" element={<RecruitContainer />} />
        </Route>

        {/* 어드민 Router */}
        <Route path="/admin" element={<AdminLoginContainer />} />
        <Route element={<AdminAppContainer />}>
          {/* work */}
          <Route path="/admin/works" element={<AdminWork />}>
            <Route index element={<AdminWorkContainer />} />
            <Route path="list" element={<AdminWorkContainer />} />
            <Route path=":workId" element={<AdminWorkDetailContainer />} />
            <Route path="register" element={<AdminWorkRegisterContainer />}>
              <Route path=":workId" element={<AdminWorkDetailContainer />} />
            </Route>
            <Route path="modify" element={<AdminWorkModifyContainer />}>
              <Route path=":workId" element={<AdminWorkModifyContainer />} />
            </Route>
          </Route>
          {/* inquiry */}
          <Route path="/admin/inquiry" element={<AdminInquiry />}>
            <Route index element={<AdminInquiryContainer />} />
            <Route path="list" element={<AdminInquiryContainer />} />
            <Route path=":inqId" element={<AdminInquiryDetailContainer />} />
          </Route>
          {/* account */}
          <Route path="/admin/account" element={<AdminAccount />}>
            <Route
              path="register"
              element={<AdminAccountRegisterContainer />}
            />
          </Route>
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </HashRouter>
  );
}

export default App;
