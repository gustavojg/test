import { useContext, useEffect } from "react";
import { UserContext } from "@/context/UserContext";
import { DAILY, TIME_TYPES } from "@/constants";
import { ActivityContext } from "@/context/ActivityContext";

export const HomeViewModel = () => {
  const { user } = useContext(UserContext);
  const { periodType, setPeriodType, activities, getActivityData } =
    useContext(ActivityContext);
  useEffect(() => {
    getActivityData(1, DAILY);
    setPeriodType(DAILY);
  }, []);
  const onPeriodSelect = (period: string) => {
    setPeriodType(period);
    getActivityData(1, period);
  };

  return {
    userData: user,
    activityData: activities,
    periodType,
    onPeriodSelect,
  };
};
