import styled from "styled-components";

const StyledObjectTriangle = styled.div`
  position: relative;
  .label {
    display: inline-block;
    position: absolute;
    width: 80%;
    bottom: 12%;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    text-align: center;
    line-height: normal;
  }
`;

/**
 *  삼각형오브젝트
 * @param {*} props
 *
 */
const ObjectTriangle = (props) => {
  const { width, height, color, shadow, label } = props;
  return (
    <StyledObjectTriangle {...props}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="yellow"
        style={{
          filter: shadow ? "drop-shadow(4px 7px 10px rgba(0,0,0,0.26)" : "none",
        }}
      >
        {/* points: 삼각형 각 꼭지점의 좌표 */}
        <polygon
          points={`${width / 2},0 0,${height} ${width},${height}`}
          fill={color}
        />
      </svg>
      {label && (
        <span className="label" dangerouslySetInnerHTML={{ __html: label }} />
      )}
    </StyledObjectTriangle>
  );
};

export default ObjectTriangle;
