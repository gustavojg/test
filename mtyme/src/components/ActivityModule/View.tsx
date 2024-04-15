import React from "react";
import styles from "@/styles/ActivityView.module.css";
export type ActivityViewProps = {
  type: string;
  currenTime: string;
  periodTime: string;
  periodText: string;
  bgColor: string;
  icon: string;
};

export const ActivityView: React.FC<ActivityViewProps> = (props) => {
  const { type, currenTime, periodTime, periodText, icon, bgColor } = props;
  return (
    <div className={styles.mainContainer}>
      <div
        className={styles.header}
        style={{
          backgroundColor: bgColor,
        }}
      >
        <img className={styles.icon} src={icon} alt={type} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.headerInfo}>
          <div className={styles.typetext}>{type}</div>
          <div className={styles.dotMenu}>
            <img src="/images/icon-ellipsis.svg" alt="menu" />
          </div>
        </div>
        <div className={styles.hoursText}>{currenTime}hrs</div>
        <div className={styles.periodText}>
          {periodText} - {periodTime}hrs
        </div>
      </div>
    </div>
  );
};
