import styled from "styled-components";

const StyledOrderedList = styled.ol`
`;

const OrderedList = ({ children }) => {
  return <StyledOrderedList>{children}</StyledOrderedList>;
};

export default OrderedList;
