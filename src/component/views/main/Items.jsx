//
import styles from "./Main.module.css";

import classNames from "classnames";
import ImageItem from "component/common/atoms/ImageItem";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const CenterContent = ({ children }) => {
  return <div className={styles["cnt-cont"]}>{children}</div>;
};

export const MainVisual = ({ children }) => {
  return <div className={classNames(styles["main-visual"])}>{children}</div>;
};

export const AiSolutionSwiper = () => {
  const { t } = useTranslation("main");
  const aiSolutions = t(`aiSolutions`, { returnObjects: true });
  return (
    <div className={classNames(styles.swiper, styles.dark)}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        {aiSolutions.map((slide, index) => (
          <SwiperSlide key={slide} virtualIndex={index}>
            <div className={classNames(styles.sw, styles.sld)}>
              <div
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: slide.title }}
              />
              <div
                className={styles.desc}
                dangerouslySetInnerHTML={{ __html: slide.description }}
              />
              <div className={styles.badges}>
                {slide.items.map((item, idx) => (
                  <>
                    <span key={`badge-${idx}`} className={styles.badge}>
                      {item}
                    </span>
                    {idx === 4 && <span className={styles.break} />}
                  </>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const Bigdata = () => {
  const { t } = useTranslation("main");
  const bigdatas = t(`bigdata`, { returnObjects: true });
  return (
    <div className={classNames(styles.swiper, styles.dark)}>
      <Swiper slidesPerView={"auto"} spaceBetween={16}>
        {bigdatas.map((item, index) => (
          <SwiperSlide
            key={item}
            virtualIndex={index}
            style={{ width: "480px" }}
          >
            <div className={styles.bgd}>
              <div className={styles.title}>
                <ImageItem
                  imgFile={`icon_bigdata_0${index + 1}.svg`}
                  alt={item.title}
                />
                <p dangerouslySetInnerHTML={{ __html: item.title }} />
              </div>
              <div
                className={styles.desc}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
