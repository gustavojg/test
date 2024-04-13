import React from "react";
import { ActivityView } from "./View";
import { ActivityViewModel } from "./ViewModel";
import { Activity } from "@/model/activityModel";

export const ActivityInfo: React.FC<Activity> = (props) => {
  const activityViewModel = ActivityViewModel(props);
  return <ActivityView {...activityViewModel} />;
};
