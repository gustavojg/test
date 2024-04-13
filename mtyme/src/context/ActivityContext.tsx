import { createActivityDataFetcher } from "@/api/activityData";
import { DAILY } from "@/constants";
import { Activity } from "@/model/activityModel";
import React, { createContext, useState } from "react";

type ActivityProviderProps = {
  children: React.ReactNode;
};

const initialActivityState = {
  activities: [] as Activity[],
  loading: true,
  periodType: DAILY,
  setPeriodType: (periodType: string) => {},
  getActivityData: (id: number, periodType: string) => {},
};

export const ActivityContext = createContext(initialActivityState);

export const ActivityProvider: React.FC<ActivityProviderProps> = ({
  children,
}) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [periodType, setPeriodType] = useState(DAILY);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const changePeriodType = (newPeriodType: string) => {
    setPeriodType(newPeriodType);
  };

  const getActivityData = async (id: number, periodType: string) => {
    const fetchActivityData = createActivityDataFetcher();
    const fetchData = async () => {
      try {
        const {activityList} = await fetchActivityData(id, periodType);
        setActivities(activityList);
        setPeriodType(periodType);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  };

  // Create the activity context value
  const activityContextValue = {
    activities,
    periodType,
    loading,
    error,
    setPeriodType: changePeriodType,
    getActivityData,
  };

  return (
    <ActivityContext.Provider value={activityContextValue}>
      {children}
    </ActivityContext.Provider>
  );
};
