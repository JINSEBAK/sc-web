import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ProjectInfo = (props) => {
  const { t } = useTranslation(["page"]);
  const language = localStorage.getItem("lang");
  const { detailInfo } = props;

  return (
    <StyledProjectInfo>
      <div>
        <label data-cd-id={detailInfo?.workCd}>{detailInfo?.workCdNm}</label>
      </div>
      <h3>{language === "ko" ? detailInfo?.workNm : detailInfo?.workNmEng}</h3>
      <dl>
        <dt>{t("page:projects.label_name")}</dt>
        <dd>
          {language === "ko" ? detailInfo?.workCli : detailInfo?.workCliEng}
        </dd>
      </dl>
      <dl>
        <dt>{t("page:projects.label_project")}</dt>
        <dd
          dangerouslySetInnerHTML={{
            __html:
              language === "ko"
                ? detailInfo?.workCntt.replace(/\n/g, "<br>")
                : detailInfo?.workCnttEng.replace(/\n/g, "<br>"),
          }}
        ></dd>
      </dl>
    </StyledProjectInfo>
  );
};

export default ProjectInfo;

const StyledProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
  label {
    // max-width: 102px;
    background-color: #2b2b2f;
    color: #fff;
    font-weight: 800;
    font-size: 1rem;
    text-align: center;
    padding: 0.5rem;
  }
  h3 {
    font-weight: 700;
    font-size: 32px;
    line-height: 36.32px;
    margin: 1rem 0 2rem;
  }
  dl {
    dt {
      font-weight: 800;
      font-size: 1rem;
      margin-bottom: 0.5rem;
      line-height: 1.5rem;
    }
    dd {
      line-height: 1.5rem;
    }
    &:first-of-type {
      display: flex;
      margin-bottom: 1rem;
      dt {
        margin-right: 30px;
        margin-bottom: 0;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 0 20px;
    label {
      font-size: 12px;
    }
    h3 {
      font-size: 24px;
    }
  }
`;
