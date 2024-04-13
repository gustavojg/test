import { DAILY, MONTHLY, TIME_TYPES, WEEKLY } from "@/constants";

export const getStaticInfo = (type: string) => {
  switch (type) {
    case TIME_TYPES.WORK:
      return {
        title: "Work",
        icon: "/images/icon-work.svg",
        color: "hsl(15, 100%, 70%)",
      };
    case TIME_TYPES.EXERCISE:
      return {
        title: "Exercise",
        icon: "/images/icon-exercise.svg",
        color: "hsl(145, 58%, 55%)",
      };
    case TIME_TYPES.PLAY:
      return {
        title: "Play",
        icon: "/images/icon-play.svg",
        color: "hsl(195, 74%, 62%)",
      };
    case TIME_TYPES.SELF_CARE:
      return {
        title: "Self Care",
        icon: "/images/icon-self-care.svg",
        color: "hsl(43, 84%, 65%)",
      };
    case TIME_TYPES.SOCIAL:
      return {
        title: "Social",
        icon: "/images/icon-social.svg",
        color: "hsl(264, 64%, 52%)",
      };
    case TIME_TYPES.STUDY:
      return {
        title: "Study",
        icon: "/images/icon-study.svg",
        color: "hsl(348, 100%, 68%)",
      };
    default:
      return { title: "", icon: "", color: "" };
  }
};

export const getPeriodText = (period: string) => {
  switch (period) {
    case DAILY:
      return "Yesterday";
    case WEEKLY:
      return "Last Week";
    case MONTHLY:
      return "Last Month";
    default:
      return "";
  }
};
