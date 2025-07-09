import { useEffect, useState } from "react";
import styled from "styled-components";

import BreadCrumb from "./BreadCrumb";
import { AdminTitle } from "../datas/constant";

const ContentTitle = (props) => {
  const { name } = props;

  // state
  const [info, setInfo] = useState();

  useEffect(() => {
    setInfo(AdminTitle[name]);
  }, [name]);

  return (
    <StyledContentTitle>
      <h1>{info?.title ?? ""}</h1>
      <p>{info?.sub ?? ""}</p>
      <BreadCrumb paths={info?.breadcrumb ?? []} />
    </StyledContentTitle>
  );
};

export default ContentTitle;

const StyledContentTitle = styled.div`
  margin-bottom: 1rem;
  position: relative;
  h1 {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }
  p {
    border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
    font-size: 0.8rem;
    opacity: 0.7;
    padding: 0.5rem 0;
  }
`;
