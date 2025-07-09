import PageTitle from "../../common/PageTitle";
import PageContainer from "../../layout/PageContainer";
import ScrollWindow from "component/common/ScrollWindow";
import JobApplication from "./contents/JobApplication";
import Benefits from "./contents/Benefits";
import { ScrollGraphicText } from "../about/AboutViewElements";
import { DocumentDownload } from "./RecruitViewElement";

const RecruitContainer = () => {
  //
  return (
    <PageContainer className="recruit">
      <PageTitle pageName="recruit" />

      <div style={{ backgroundColor: "#fff", height: "50px" }} />
      {/* parallax scrolling */}
      <ScrollWindow
        contents={<ScrollGraphicText text={"Together<br> here"} />}
      />
      <Benefits />
      {/* resume */}
      <DocumentDownload />
      <JobApplication />
    </PageContainer>
  );
};

export default RecruitContainer;
