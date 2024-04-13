import React from "react";
import { UserView } from "./View";
import { User } from "@/model/userModel";

interface UserInfoProps {
  user: User | null;
  periodType: string;
  onPeriodSelect: (period: string) => void;
}

export const UserInfo: React.FC<UserInfoProps> = (props) => {
  return <UserView {...props} />;
};
