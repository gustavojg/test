import { render, screen } from "@testing-library/react";
import { DAILY, TIME_TYPES } from "@/constants";
import { Activity } from "@/model/activityModel";
import { ActivityInfo } from "@/components/ActivityModule";
describe("ActivityInfoModule", () => {
  test("renders activityModuley", () => {
    const activity: Activity = {
      type: TIME_TYPES.WORK,
      currentDuration: 10,
      perriodDuration: 20,
      periodType: DAILY,
    };

    // Render the component with the user data
    render(<ActivityInfo {...activity} />);

    // Assert that the user information is rendered correctly
    expect(screen.getByText("Work")).toBeInTheDocument();
  });
});
