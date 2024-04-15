/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Home from "@/pages/home/index";
import { UserInfo, UserInfoProps } from "@/components/UserInfo";
import { DAILY, TIME_TYPES } from "@/constants";
import { ActivityInfo } from "@/components/ActivityModule";
import { Activity } from "@/model/activityModel";

const activity: Activity = {
  type: TIME_TYPES.WORK,
  currentDuration: 10,
  perriodDuration: 20,
  periodType: DAILY,
};

const userInfoProps: UserInfoProps = {
  user: {id: 1, name: "John", lastName: "Doe", image: "/images/users/image-jeremy.png"},
  periodType: DAILY,
  onPeriodSelect: jest.fn()
};

it("renders homepage unchanged", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});


it("renders UserInfo component", () => {
  const { container } = render(<UserInfo {...userInfoProps} />);
  expect(container).toMatchSnapshot();
});

it("renders ActivityInfo component", () => {
  const { container } = render(<ActivityInfo {...activity} />);
  expect(container).toMatchSnapshot();
});
