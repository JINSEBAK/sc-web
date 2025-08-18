import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

import MarkerImage from "assets/imgs/icon_map_marker.svg";

const CompanyLocation = () => {
  // 대륭포스트타워 6차
  const LOCATION = { lat: 37.4813244, lng: 126.8837789 };

  const [map, setMap] = useState();

  useEffect(() => {
    const handleResize = () => {};
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Map
        center={LOCATION}
        level={3}
        onCreate={setMap}
        style={{ width: "100%", height: "100%" }}
      >
        <MapMarker
          position={LOCATION}
          image={{
            src: MarkerImage,
            size: { width: 64, height: 69 },
            options: {
              offset: {
                x: 28,
                y: 69
              }
            }
          }}
        />
      </Map>
    </div>
  );
};

export default CompanyLocation;
