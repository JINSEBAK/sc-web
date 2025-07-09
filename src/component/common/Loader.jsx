import styled, { keyframes } from "styled-components";

const Loader = () => {
  return <StyledLoader></StyledLoader>;
};

export default Loader;

const loading = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;

const StyledLoader = styled.div`
  width: 64px;
  height: 64px;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid #e4103b;
    border-top-color: #eee;
    opacity: 0.5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    animation: ${loading} 1.2s linear infinite;
  }
`;
