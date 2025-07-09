import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import TechnicalOutput from "component/views/main/contents/TechnicalOutput";
import SkillsWeHave from "./contents/SkillsWeHave";
import MainVisual from "./contents/MainVisual";
import OurClientPartner from "./contents/OurClientPartner";
import Footer from "component/common/Footer";

import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper";
import Career from "./contents/Career";

const MainContainer = () => {
  //

  const { setScrolled } = useOutletContext();
  const [swiper, setSwiper] = useState(null);

  // 첫번째 슬라이드에서만 Header gnb 노출
  const onSlideChange = () => {
    if (swiper?.activeIndex > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <StyledMain>
      <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        freeMode={true}
        pagination={{ clickable: true }}
        speed={700}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
        onSwiper={(swiper) => setSwiper(swiper)}
        onSlideChange={onSlideChange}
      >
        <SwiperSlide>
          <MainVisual />
        </SwiperSlide>
        <SwiperSlide>
          <SkillsWeHave />
        </SwiperSlide>
        <SwiperSlide>
          <TechnicalOutput />
        </SwiperSlide>
        <SwiperSlide className="auto">
          <OurClientPartner />
        </SwiperSlide>
        <SwiperSlide className="auto">
          <Career />
        </SwiperSlide>
        <SwiperSlide className="auto last-footer">
          <Footer />
        </SwiperSlide>
      </Swiper>
    </StyledMain>
  );
};

export default MainContainer;

const StyledMain = styled.div`
  width: 100%;
  height: 100vh;
  .swiper {
    height: 100%;
    overflow: hidden;
  }
  .swiper .swiper-slide.auto {
    height: auto !important;
  }
  .swiper .swiper-slide.auto:last-of-type {
    padding-top: 100px;
  }
  .swiper-pagination .swiper-pagination-bullet:last-of-type {
    display: none;
  }
`;
