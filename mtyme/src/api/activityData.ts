import { DAILY } from "@/constants";
import { Activity } from "@/model/activityModel";

type ApiResponse = {
    activityList: Activity[];
}

export function createActivityDataFetcher() {
  let list: any = {};

  return async function fetchActivityData(
    id: number,
    periodType: string = DAILY
  ): Promise<ApiResponse> {
    if (list.length > 0) {
      return list;
    }
    const response = await fetch(
      `http://localhost:3000/api/activity?periodType=${periodType}&id=${id}`
    );
    list = await response.json();
    return list;
  };
}
