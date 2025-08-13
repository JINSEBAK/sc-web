//
import styles from "./Main.module.css";
import ImageItem from "component/common/atoms/ImageItem";

import classNames from "classnames";

import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { getListWork } from "lib/api";
import { useEffect, useState } from "react";

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
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        {aiSolutions.map((slide, index) => (
          <SwiperSlide key={`aiso-${index}`} virtualIndex={index}>
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

const samples = [];

export const SmartProjects = () => {
  const [items, setItems] = useState([]);
  const getDatas = async () => {
    const params = {
      searchSorting: "workDts",
      searchOrder: "desc",
      page: 1,
      pageSize: 5
    };
    const response = await getListWork(params);
    if (response.resultCode === "SUCCESS") {
      setItems(response.resultData.list);
    }
  };
  useEffect(() => {
    getDatas();
  }, []);
  return (
    <div className={classNames(styles.smp)}>
      <Swiper
        className={styles.projects}
        spaceBetween={16}
        slidesPerView={"auto"}
      >
        {items.map((item, index) => (
          <SwiperSlide className={styles.project} key={`sp-slide-${index}`}>
            <ImageItem fileNm="" />
            <div className={styles.title}>{item.workCli}</div>
            <div className={styles.desc}>{item.workCntt}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const SloganBanner = () => {
  const { t } = useTranslation("main");
  const slogan = t("slogan");
  return (
    <div className={styles.slogan}>
      <div className={styles.msg}>
        <p dangerouslySetInnerHTML={{ __html: slogan }} />
      </div>
    </div>
  );
};

export const Clients = () => {
  const { t } = useTranslation("about");
  const clients = t(`clients`, { returnObjects: true });
  return (
    <div className={styles["clients-container"]}>
      <Swiper
        className={styles.clients}
        spaceBetween={24}
        slidesPerView={"auto"}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={`client-${index}`} className={styles.client}>
              <ImageItem
                imgFile={`clients/${client.img}`}
                alt={client.name}
                className={styles["client-img"]}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export const LinkItems = () => {
  return (
    <div className={styles.links}>
      <div className={styles.link}>
        <strong>프로젝트 문의</strong>
        <p>
          문의를 남겨주시면
          <br />
          빠른 시일 내 답변드리겠습니다.
        </p>
      </div>
      <div className={styles.link}>
        <strong>인재채용</strong>
        <p>
          스마트코어와 함께
          <br />
          성장할 인재를 기다립니다.
        </p>
      </div>
    </div>
  );
};
