// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DAILY, MONTHLY, TIME_TYPES, WEEKLY } from "@/constants";
import type { NextApiRequest, NextApiResponse } from "next";

type Activity = {
  type: string;
  currentDuration: number;
  perriodDuration: number;
  periodType: string;
};

type Data = {
  activityList: Activity[];
};

type ActivityReq = {
  periodType: string;
};

const activityListDaily = [
  {
    type: TIME_TYPES.WORK,
    currentDuration: 6,
    perriodDuration: 8,
    periodType: DAILY,
  },
  {
    type: TIME_TYPES.PLAY,
    currentDuration: 1,
    perriodDuration: 2,
    periodType: DAILY,
  },
  {
    type: TIME_TYPES.STUDY,
    currentDuration: 3,
    perriodDuration: 3,
    periodType: DAILY,
  },
  {
    type: TIME_TYPES.EXERCISE,
    currentDuration: 1,
    perriodDuration: 1,
    periodType: DAILY,
  },
  {
    type: TIME_TYPES.SOCIAL,
    currentDuration: 3,
    perriodDuration: 4,
    periodType: DAILY,
  },
  {
    type: TIME_TYPES.SELF_CARE,
    currentDuration: 1,
    perriodDuration: 1,
    periodType: DAILY,
  },
];

const activityListWeekly = [
  {
    type: TIME_TYPES.WORK,
    currentDuration: 10,
    perriodDuration: 20,
    periodType: WEEKLY,
  },
  {
    type: TIME_TYPES.PLAY,
    currentDuration: 4,
    perriodDuration: 8,
    periodType: WEEKLY,
  },
  {
    type: TIME_TYPES.STUDY,
    currentDuration: 3,
    perriodDuration: 10,
    periodType: WEEKLY,
  },
  {
    type: TIME_TYPES.EXERCISE,
    currentDuration: 4,
    perriodDuration: 4,
    periodType: WEEKLY,
  },
  {
    type: TIME_TYPES.SOCIAL,
    currentDuration: 9,
    perriodDuration: 20,
    periodType: WEEKLY,
  },
  {
    type: TIME_TYPES.SELF_CARE,
    currentDuration: 1,
    perriodDuration: 6,
    periodType: WEEKLY,
  },
];

const activityListMonthly = [
  {
    type: TIME_TYPES.WORK,
    currentDuration: 20,
    perriodDuration: 120,
    periodType: MONTHLY,
  },
  {
    type: TIME_TYPES.PLAY,
    currentDuration: 22,
    perriodDuration: 30,
    periodType: MONTHLY,
  },
  {
    type: TIME_TYPES.STUDY,
    currentDuration: 60,
    perriodDuration: 85,
    periodType: MONTHLY,
  },
  {
    type: TIME_TYPES.EXERCISE,
    currentDuration: 12,
    perriodDuration: 20,
    periodType: MONTHLY,
  },
  {
    type: TIME_TYPES.SOCIAL,
    currentDuration: 30,
    perriodDuration: 90,
    periodType: MONTHLY,
  },
  {
    type: TIME_TYPES.SELF_CARE,
    currentDuration: 20,
    perriodDuration: 30,
    periodType: MONTHLY,
  },
];

export default function getActivities(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let activityList: Activity[] = [];
  const { periodType } = req.query as ActivityReq;
  if (periodType === "DAILY") {
    activityList = activityListDaily;
  } else if (periodType === "WEEKLY") {
    activityList = activityListWeekly;
  } else if (periodType === "MONTHLY") {
    activityList = activityListMonthly;
  }

  res.status(200).json({ activityList });
}
