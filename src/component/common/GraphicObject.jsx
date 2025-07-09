import styled, { css } from "styled-components";

const StyledGraphicObject = styled.div`
  ${(props) => {
    if (props.triangle) {
      return css`
        width: 0px;
        height: 0px;
        border-bottom: ${props.height}px solid ${props.color};
        border-left: ${props.width / 2}px solid transparent;
        border-right: ${props.width / 2}px solid transparent;
      `;
    }
    if (props.shadow) {
      return css`
        filter: drop-shadow(4px 7px 15px rgba(0, 0, 0, 0.26); 
      `;
    }
  }}
`;

const GraphicObject = (props) => {
  return <StyledGraphicObject {...props} className="obj" />;
};

export default GraphicObject;
