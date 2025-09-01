import styles from "./Product.module.css";

import { useCallback, useRef } from "react";
import { CareOnService, CareOnSwiper, InquiryItem } from "./Items";
import { ContentBox, ContentInner } from "component/common/atoms/Containers";
import PageVisualization from "component/common/molecules/PageVisualization";
import MiddleTitle from "component/common/atoms/MiddleTitle";
import FlexContainer from "component/common/atoms/FlexContainer";

//  swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CareOnSolution = () => {
  //
  const swiperRef = useRef(null);

  const onChangeImage = useCallback((swiper) => {
    if (swiper.activeIndex % 2 === 0) {
      swiperRef.current?.slideNext();
    }
  }, []);

  return (
    <>
      <PageVisualization
        category="통합형 모바일 보안 솔루션"
        title="CareOn Solution"
        description="철저한 디지털 보안과 실시간 안심케어<br>통합형 보안 솔루션"
        visual="care-on"
      />
      <ContentBox>
        <FlexContainer align={"space-between"}>
          <div className={styles.care}>
            <MiddleTitle
              content="CareOn Solution"
              description="디지털과 물리적 위협을 동시에 관리하는<br>스마트하고 신뢰할 수 있는 올인원 모바일 보호 솔루션"
              size="small"
              align="left"
            />
            <div>
              <Swiper
                direction={"vertical"}
                className={styles["v-swiper"]}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
              >
                <SwiperSlide className={styles["v-slide"]}>
                  <div className={styles.ctx}>
                    스마트폰 바이러스, 악성코드 등<br />
                    디지털 위협으로부터 기기를 보호하는
                    <br />
                    <strong>보안케어 기능</strong>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles["v-slide"]}>
                  <div className={styles.ctx}>
                    응급상황 발생시 등록된 보호자에게 알림 및 위치 전송으로 빠른
                    대응이 가능한
                    <br />
                    <strong>안심케어 기능</strong>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles["v-slide"]}>
                  <div className={styles.ctx}>
                    스마트하고 신뢰할 수 있는
                    <br />
                    <strong>통합형 모바일 보안 솔루션</strong>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className={styles.visual}>
            <CareOnSwiper onChangeImage={onChangeImage} />
          </div>
        </FlexContainer>
      </ContentBox>
      <ContentBox>
        <ContentInner gap={{ top: "0px", bottom: "100px" }}>
          <CareOnService />
        </ContentInner>
      </ContentBox>
      <ContentBox isFull={true}>
        <InquiryItem />
      </ContentBox>
    </>
  );
};

export default CareOnSolution;
