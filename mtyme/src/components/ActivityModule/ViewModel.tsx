import { getPeriodText, getStaticInfo } from "@/lib/staticInfo";
import { Activity } from "@/model/activityModel";

export const ActivityViewModel = ({
  currentDuration,
  perriodDuration,
  periodType,
  type,
}: Activity) => {
  const { title, icon, color } = getStaticInfo(type);
  return {
    type: title,
    currenTime: currentDuration.toString(),
    periodTime: perriodDuration.toString(),
    periodText: getPeriodText(periodType),
    icon,
    bgColor: color,
  };
};
