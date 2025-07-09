import { Fragment } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { useContext } from "react";
import { LanguageContext } from "store/LangaugeStore";
import { NoResult } from "component/admin/common/Items";
import { useTranslation } from "react-i18next";

const StyledWorkList = styled.div`
  display: grid;
  gap: 4rem 2rem;
  //grid-template-columns: repeat(auto-fill, minmax(25%, 360px));
  grid-template-columns: repeat(3, 1fr);
  @media ${({ theme }) => theme.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(40%, auto));
  }
  @media ${({ theme }) => theme.mobile} {
    gap: ${({ theme }) => theme.toRem(20)};
  }
  @media ${({ theme }) => theme.min} {
    grid-template-columns: repeat(auto-fill, minmax(60%, auto));
    gap: ${({ theme }) => theme.toRem(32)};
  }
`;
export const WorkList = ({ datas, onClickCard }) => {
  const { t } = useTranslation(["page"]);
  return (
    <>
      {datas.length > 0 ? (
        <StyledWorkList>
          {datas.map((data, index) => {
            return (
              <Fragment key={`project-card-${index}`}>
                {data.useYn === "Y" && (
                  <ProjectCard data={data} onClickCard={onClickCard} />
                )}
              </Fragment>
            );
          })}
        </StyledWorkList>
      ) : (
        <NoResult text={t(`page:common.noresult`)} />
      )}
    </>
  );
};

const StyledProjectCard = styled.div`
  text-align: center;
  position: relative;
  cursor: pointer;
  .img-wrap {
    width: 100%;
    height: 250px;
    overflow: hidden;
    background-color: #f2f3f6;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  dl {
    text-align: left;
    margin-top: 1rem;
    padding-left: 4px;
    dt {
      font-weight: 800;
      font-size: ${({ theme }) => theme.toRem(14)};
      line-height: ${({ theme }) => theme.toRem(15.89)};
    }
    dd {
      margin-top: 8px;
      font-size: ${({ theme }) => theme.toRem(18)};
      line-height: ${({ theme }) => theme.toRem(20)};
    }
  }
`;
export const ProjectCard = ({ data, onClickCard }) => {
  const { language } = useContext(LanguageContext);
  return (
    <StyledProjectCard onClick={() => onClickCard(data.workId)}>
      <div className="img-wrap">
        <img
          src={`${process.env.REACT_APP_IMG_URL}${
            language === "ko" ? data.workImgPath : data.workImgPathEng
          }`}
          alt={language === "ko" ? data.workImgNm : data.workImgNmEng}
        />
      </div>
      <dl>
        <dt>{language === "ko" ? data.workCli : data.workCliEng}</dt>
        <dd>{language === "ko" ? data.workNm : data.workNmEng}</dd>
      </dl>
    </StyledProjectCard>
  );
};

const StyledWorkTabs = styled.div`
  padding-bottom: 24px;
  display: flex;
  ul {
    display: flex;
    flex: 0 0 860px;
    flex-wrap: no-wrap;
    margin-left: auto;
    li {
      flex: 1 0 130px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      span {
        display: block;
        text-align: center;
        padding: 10px 0;
        color: ${({ theme }) => theme.colors.darkGrayColor};
        font-weight: 700;
        font-size: ${({ theme }) => theme.toRem(18)};
        line-height: ${({ theme }) => theme.toRem(24)};
      }
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: -100%;
        transition: 0.3s left;
        background: ${({ theme }) => theme.colors.darkGrayColor};
      }
      &.active {
        &::after {
          left: 0;
        }
      }
    }
  }
  @media ${({ theme }) => theme.tablet} {
    ul {
      flex: 1;
      overflow-x: scroll;
    }
  }
`;

export const WorkTabs = (props) => {
  const { menus, activeTab, onChangeTab } = props;
  return (
    <StyledWorkTabs>
      <ul>
        <li
          onClick={() => onChangeTab(null)}
          className={classNames(activeTab === null && "active")}
        >
          <span>All</span>
        </li>
        {menus.map((menu, index) => {
          return (
            <Fragment key={`tab-menu-${index}`}>
              {menu.useYn === "Y" && (
                <li
                  onClick={() => onChangeTab(menu.commcdId)}
                  className={classNames(
                    activeTab === menu.commcdId && "active"
                  )}
                >
                  <span>{menu.commcdNm}</span>
                </li>
              )}
            </Fragment>
          );
        })}
      </ul>
    </StyledWorkTabs>
  );
};

// export const ProjectDetailInfo = ({ data }) => {
//   return (
//     <div style={{ padding: "80px 40px" }}>
//       <h2 style={{ fontSize: "3rem", fontWeight: "800" }}>
//         상세 디자인 나온 후 반영
//       </h2>
//       <dl>
//         <dt>기간</dt>
//         <dd>{data?.workDts}</dd>
//       </dl>
//     </div>
//   );
// };
