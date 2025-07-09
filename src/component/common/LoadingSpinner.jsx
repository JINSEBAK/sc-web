import styled, { keyframes } from "styled-components";

const rotate = keyframes`
 from{
    transform: rotate(0deg);
 }
 to{
    transform: rotate(360deg);
 }
`;

const color = keyframes`
 100%,0%{
    stroke: #4285f4;
 }
 25%{
    stroke: #de3e35;
 }
 50%{
    stroke: #f7c223;
 }

 75%{
    stroke: #1da760;
 }
`;

const dash = keyframes`
 0%{
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
 }

 50%{
    stroke-dasharray: 89,200;
    stroke-dashoffset: -35;
 }

 100%{
    stroke-dasharray: 89,200;
    stroke-dashoffset: -124;
 }
`;

const StyledLoadingSpinner = styled.div`
  width: ${(props) =>
    props.large ? "150px" : props.middle ? "130px" : "100px"};
  height: ${(props) =>
    props.large ? "150px" : props.middle ? "130px" : "100px"};

  svg {
    animation: ${rotate} 1.5s linear infinite;
    circle {
      animation: ${color} 6s ease-in-out infinite,
        ${dash} 1.5s ease-in-out infinite;
      fill: none;
      stroke: black;
      stroke-width: 3;
    }
  }
`;

const LoadingSpinner = (props) => {
  return (
    <StyledLoadingSpinner {...props}>
      <svg viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={props.large ? "20" : props.middle ? "15" : "10"}
        />
      </svg>
    </StyledLoadingSpinner>
  );
};
export default LoadingSpinner;
