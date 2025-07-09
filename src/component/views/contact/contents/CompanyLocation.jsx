import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import styled from "styled-components";

import MarkerImage from "assets/images/icon_map_marker.svg";

const CompanyLocation = () => {
  // 대륭포스트타워 6차
  const LOCATION = { lat: 37.4813244, lng: 126.8837789 };

  const [map, setMap] = useState(); // 카카오맵 객체

  useEffect(() => {
    const handleResize = () => {
      // 카카오 맵 중심 이동
      // TODO! map.relayout() 호출 할 것 - 동작안함 이상하네
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledMapContainer>
      <Map
        center={LOCATION}
        style={{ width: "100%", height: "100%" }}
        level={3}
        onCreate={setMap}
      >
        <MapMarker
          position={LOCATION}
          image={{
            src: MarkerImage,
            size: { width: 64, height: 69 },
            options: {
              offset: {
                x: 27,
                y: 69,
              },
            },
          }}
        />
      </Map>
    </StyledMapContainer>
  );
};

export default CompanyLocation;

const StyledMapContainer = styled.div`
  width: 100%;
  height: 600px;
  transition: 0.3s all;
  margin-bottom: ${({ theme }) => theme.toRem(150)};

  @media ${({ theme }) => theme.mobile} {
    height: 500px;
    margin-bottom: ${({ theme }) => theme.toRem(100)};
  }
`;
