import styled from "styled-components";
import Icon from "../../../common/Icon";

// images
import BgCubeSolution from "../../../../assets/images/bg_cube_sol.svg";
import BgCubeSi from "../../../../assets/images/bg_cube_si.svg";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

const WorkDivision = () => {
  const { t } = useTranslation(["page"]);
  const works = t("page:about.info.work", { returnObjects: true });

  return (
    <StyledWorkDivision>
      {works.map((work, index) => {
        return (
          <div
            className={classNames("work-type", `work-type__${work.type}`)}
            key={`work-${index}`}
          >
            <dl>
              <dt>{work.title}</dt>
              <dd dangerouslySetInnerHTML={{ __html: work.description }} />
            </dl>
            <Icon name="plus-w" />
          </div>
        );
      })}
    </StyledWorkDivision>
  );
};

export default WorkDivision;

const StyledWorkDivision = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  gap: 20px;
  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .work-type {
    flex: 0 1 530px;
    margin-top: -7rem;
    min-height: 468px;
    padding: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.toRem(50)};
    @media ${({ theme }) => theme.tablet} {
      flex: 0 1 442px;
      padding: 92px 1rem;
    }
    @media ${({ theme }) => theme.mobile} {
      flex: none;
      width: calc(100% - 40px);
      &:last-of-type {
        margin-top: 0;
      }
    }
    &__solution {
      background: rgba(2, 67, 193, 0.96) url(${BgCubeSolution}) right center
        no-repeat;
    }
    &__si {
      background: rgba(24, 40, 124, 0.96) url(${BgCubeSi}) right center
        no-repeat;
    }
    .icon {
      width: ${({ theme }) => theme.toRem(40)};
      height: ${({ theme }) => theme.toRem(40)};
    }
  }
  dl {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    dt {
      font-size: ${({ theme }) => theme.toRem(40)};
      margin-bottom: ${({ theme }) => theme.toRem(24)};
    }
    dd {
      text-align: center;
      font-size: ${({ theme }) => theme.toRem(20)};
      line-height: ${({ theme }) => theme.toRem(32)};
    }
  }
`;
