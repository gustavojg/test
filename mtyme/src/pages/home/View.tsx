import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { UserInfo } from "@/components/UserInfo";
import { ActivityInfo } from "@/components/ActivityModule";
import { User } from "@/model/userModel";
import { Activity } from "@/model/activityModel";
const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  activityData: Activity[];
  userData: User | null;
  periodType: string;
  onPeriodSelect: any;
}

export const HomeView: React.FC<HomeProps> = (props) => {
  const { activityData, userData, periodType, onPeriodSelect } = props;
  return (
    <>
      <Head>
        <title>Time Tracking</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={`${styles.activityContainer} ${styles.gridContainer}`}>
          <UserInfo onPeriodSelect={onPeriodSelect} user={userData} periodType={periodType} />
          {activityData.map((activity, index) => {
            return <ActivityInfo
              key={index}
              type={activity.type}
              periodType={activity.periodType}
              currentDuration={activity.currentDuration}
              perriodDuration={activity.perriodDuration}
            />;
          })}
        </div>
      </main>
    </>
  );
};
