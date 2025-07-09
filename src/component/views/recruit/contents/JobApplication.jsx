import { PeopleCard } from "../RecruitViewElement";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import PageSection from "component/layout/PageSection";

const JobApplication = () => {
  const { t } = useTranslation(["page"]);
  const jobs = t(`page:recruit.jobs`, { returnObjects: true });

  return (
    <PageSection>
      <StyledJobApplication>
        {jobs.map((job, index) => (
          <PeopleCard data={job} key={`job-${index}`} />
        ))}
      </StyledJobApplication>
    </PageSection>
  );
};

export default JobApplication;

const StyledJobApplication = styled.ul`
  ${({ theme }) => theme.common.flexVertical};
  gap: ${({ theme }) => theme.toRem(24)};
  padding: ${({ theme }) => theme.toRem(60)};

  @media ${({ theme }) => theme.mobile} {
    padding: ${({ theme }) => theme.toMRem(40)}
      ${({ theme }) => theme.toMRem(20)} ${({ theme }) => theme.toMRem(100)};
  }
`;
