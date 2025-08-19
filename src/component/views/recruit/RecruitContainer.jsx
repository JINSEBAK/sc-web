import styles from "./Recruit.module.css";
// components
import PageVisualization from "component/common/molecules/PageVisualization";
import MiddleTitle from "component/common/atoms/MiddleTitle";
import FlexContainer from "component/common/atoms/FlexContainer";
import ImageItem from "component/common/atoms/ImageItem";
import HighLighter from "component/common/atoms/HighLighter";
import { ContentBox, ContentInner } from "component/common/atoms/Containers";
import { ItemBox, RecruitChannel, SkillItems } from "./Items";
//
import React from "react";
import { useTranslation } from "react-i18next";

const RecruitContainer = () => {
  const { t } = useTranslation("recruit");

  const talents = t(`talents`, { returnObjects: true });
  const welpares = t(`welpares`, { returnObjects: true });
  const skills = t(`jobs`, { returnObjects: true });

  return (
    <>
      <PageVisualization
        category="채용정보"
        title="Recruitment"
        description="당신의 가능성이, 우리의 미래가 됩니다."
        visual="recruit"
      />
      <div className={styles.container}>
        <ContentBox>
          <div className={styles.slogan}>
            우리는 오늘보다 <HighLighter text="나은 내일" type="emphasize" />
            을 위해
            <br />
            <HighLighter text="도전" type="emphasize" />과{" "}
            <HighLighter text="성장" type="emphasize" />을 멈추지 않습니다.
          </div>
          <div style={{ textAlign: "center" }}>
            <ImageItem imgFile={"img_titleimg02.svg"} />
          </div>
        </ContentBox>
        <ContentBox>
          <MiddleTitle
            content="인재상"
            description="같은 방향을 바라보며, 함께 만들어갈 인재를 찾고 있습니다."
            size="small"
          />
          <FlexContainer gap={24}>
            {talents.map((talent, index) => (
              <ItemBox type="talent" key={`talent-${index}`}>
                <div className={styles.grp}>
                  <ImageItem imgFile={`icon_talent${index + 1}.svg`} />
                </div>
                <div
                  className={styles.hd}
                  dangerouslySetInnerHTML={{ __html: talent.head }}
                />
                <div
                  className={styles.des}
                  dangerouslySetInnerHTML={{ __html: talent.body }}
                />
              </ItemBox>
            ))}
          </FlexContainer>
        </ContentBox>
        <ContentBox>
          <ContentInner gap={{ bottom: "100px" }}>
            <MiddleTitle
              content="복지제도"
              description="구성원의 건강과 행복을 위해<br>활기찬 근무환경을 만들어 가겠습니다."
              size="small"
            />
            <FlexContainer gap={24} wrappable={true}>
              {welpares.map((welpare, index) => (
                <ItemBox type="welpare" key={`welpare-${index}`}>
                  <div className={styles.hd}>{welpare.title}</div>
                  <div
                    className={styles.des}
                    dangerouslySetInnerHTML={{ __html: welpare.sub }}
                  />
                  <div className={styles.grp2}>
                    <ImageItem imgFile={`icon_welfare${index + 1}.svg`} />
                  </div>
                </ItemBox>
              ))}
            </FlexContainer>
          </ContentInner>
        </ContentBox>
        <ContentBox isFull={true}>
          <RecruitChannel>
            <MiddleTitle
              content="채용안내"
              description="채용 포털 사이트를 통해 채용공고를 게시합니다."
              size="small"
              color="reverse"
            />
            <div className={styles.site}>
              <a
                href="https://www.saramin.co.kr/zf_user/company-info/view?csn=T21zcXlGVFVxSWNYZnNFOTdtWklkZz09"
                target="_blank"
              >
                <ImageItem
                  imgFile={"logo_saramin.png"}
                  alt="사람인으로 이동하기"
                />
                <ImageItem imgFile={"icon_site.svg"} />
              </a>
              <a
                href="https://www.jobkorea.co.kr/Recruit/Co_Read/C/117031?Oem_Code=C1"
                target="_balnk"
              >
                <ImageItem
                  imgFile={"logo_jobkorea.png"}
                  alt="잡코리아로 이동하기"
                />
                <ImageItem imgFile={"icon_site.svg"} />
              </a>
            </div>
          </RecruitChannel>
        </ContentBox>
        <ContentBox>
          <ContentInner gap={{ top: "100px" }}>
            <SkillItems>
              {skills.map((skill, index) => (
                <ItemBox type="skill" key={`skill-${index}`}>
                  <h4 className={styles["skill-tit"]}>{skill.title}</h4>
                  <dl>
                    <dt>담당업무</dt>
                    <dd
                      dangerouslySetInnerHTML={{ __html: skill.details.role }}
                    />
                    <dt>역량</dt>
                    <dd
                      dangerouslySetInnerHTML={{
                        __html: skill.details.ability
                      }}
                    />
                    {skill.details.scope?.map((scope, idx) => (
                      <React.Fragment key={`scope-${idx}`}>
                        <dt className={styles.chips}>{scope.part}</dt>
                        <dd
                          dangerouslySetInnerHTML={{ __html: scope.contents }}
                        />
                      </React.Fragment>
                    ))}
                  </dl>
                </ItemBox>
              ))}
            </SkillItems>
          </ContentInner>
        </ContentBox>
      </div>
    </>
  );
};

export default RecruitContainer;
