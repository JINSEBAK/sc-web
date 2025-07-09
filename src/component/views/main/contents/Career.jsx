import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Button from "component/common/Button";
import { HeadingItem } from "../MainViewElement";

import CareerImage from "assets/images/img_career.png";

const Career = () => {
  //
  const { t } = useTranslation(["page"]);

  return (
    <StyledCareer className="sec05">
      <div className="cont">
        <HeadingItem
          title={t("page:main.section4.career.title")}
          description={t(`page:main.section4.career.description`)}
        />
        {/* pc용 */}
        <Button className="btn-circle">
          <a
            download
            href="/files/smartcore_applicationform.docx"
            dangerouslySetInnerHTML={{
              __html: t(`page:recruit.document.button`),
            }}
          />
        </Button>
        {/* mobile용 */}
        <Button className="btn-download">
          <a
            download
            href="/files/smartcore_applicationform.docx"
            dangerouslySetInnerHTML={{
              __html: t(`page:recruit.document.button`),
            }}
          />
        </Button>
      </div>
    </StyledCareer>
  );
};

export default Career;

const StyledCareer = styled.section`
  height: 573px;
  background: #fff url(${CareerImage}) right 25px center no-repeat;
  padding: ${({ theme }) => theme.toRem(100)} ${({ theme }) => theme.toRem(200)};
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.tablet} {
    height: 450px;
    padding: ${({ theme }) => theme.toRem(100)}
      ${({ theme }) => theme.toRem(60)};
    background-color: #f2f6fd;
    background-position: right -200px center;
    background-size: auto 392px;
  }
  @media ${({ theme }) => theme.mobile} {
    height: 350px;
    background-image: none;
    padding: ${({ theme }) => theme.toMRem(70)}
      ${({ theme }) => theme.toMRem(30)};
  }
  .cont {
    flex: 1;
    position: relative;
    .btn-download {
      display: none;
      @media ${({ theme }) => theme.tablet} {
        display: block;
        margin-top: 2rem;
        min-width: 234px;
        border: 1px solid #2b2b2f;
        font-size: ${({ theme }) => theme.toRem(18)};
        a,
        a:hover,
        a:focus,
        a:active {
          color: #000;
        }
      }
    }
    .btn-circle {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: ${({ theme }) => theme.toRem(130)};
      color: #fff;
      background-color: rgba(19, 101, 215, 0.6);
      border: none;
      width: ${({ theme }) => theme.toRem(240)};
      height: ${({ theme }) => theme.toRem(240)};
      border-radius: 50%;
      padding: 0;
      min-width: 0;
      a,
      a:hover,
      a:focus,
      a:active {
        color: #fff;
      }
      @media ${({ theme }) => theme.tablet} {
        display: none;
      }
    }
  }
`;
