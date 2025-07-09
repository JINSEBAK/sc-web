import styled from "styled-components";

const StyledCapsuleCheckboxList = styled.div`
  display: flex;
`;

const CapsuleCheckboxList = ({ children }) => {
  return <StyledCapsuleCheckboxList>{children}</StyledCapsuleCheckboxList>;
};

export default CapsuleCheckboxList;
