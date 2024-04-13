import { User } from "@/model/userModel";
import React from "react";
import styles from "@/styles/UserInfo.module.css";
import { DAILY, MONTHLY, WEEKLY } from "@/constants";
import Image from "next/image";

type UserViewProps = {
  user: User | null;
  periodType: string;
  onPeriodSelect: (p: string) => void;
};

export const UserView: React.FC<UserViewProps> = ({
  user,
  onPeriodSelect,
  periodType,
}) => {
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Image
          className={styles.userImage}
          src={user.image}
          alt={user.name}
          width={100}
          height={100}
          priority
        />
        <div className={styles.title}>Report for</div>
        <div className={styles.userName}>{user.name}</div>
        <div className={styles.userName}>{user.lastName}</div>
      </div>
      <div className={styles.buttonsContainer}>
        <a
          className={`${styles.periodButton} ${
            periodType === DAILY ? styles.selected : ""
          }`}
          onClick={() => onPeriodSelect(DAILY)}
        >
          Daily
        </a>
        <a
          className={`${styles.periodButton} ${
            periodType === WEEKLY ? styles.selected : ""
          }`}
          onClick={() => onPeriodSelect(WEEKLY)}
        >
          Weekly
        </a>
        <a
          className={`${styles.periodButton} ${
            periodType === MONTHLY ? styles.selected : ""
          }`}
          onClick={() => onPeriodSelect(MONTHLY)}
        >
          Monthly
        </a>
      </div>
    </div>
  );
};
