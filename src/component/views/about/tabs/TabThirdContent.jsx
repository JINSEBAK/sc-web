import { ContentBox } from "component/common/atoms/Containers";
import styles from "../About.module.css";
import PageTitle from "component/common/atoms/PageTitle";
import { useTranslation } from "react-i18next";
import { HistoryItem } from "../Items";

const TabFirstContent = () => {
  const { t } = useTranslation("history");

  const histories = t(`history`, { returnObjects: true });

  return (
    <div className={styles.container}>
      <ContentBox>
        <PageTitle title="연혁" emphasize={"스마트코어의 시작과 성장"} />
      </ContentBox>
      <ContentBox>
        <div className={styles.history}>
          {histories.map((history, index) => (
            <HistoryItem
              key={`history-${index}`}
              title={history.year}
              lists={history.list}
            />
          ))}
        </div>
      </ContentBox>
    </div>
  );
};

export default TabFirstContent;
