import { render, screen } from "@testing-library/react";
import { UserInfo, UserInfoProps } from "@/components/UserInfo";
import { DAILY } from "@/constants";
describe("UserInfo", () => {
    test("renders user information correctly", () => {
        const userInfoProps: UserInfoProps = {
            user: {id: 1, name: "John", lastName: "Doe", image: "/images/users/image-jeremy.png"},
            periodType: DAILY,
            onPeriodSelect: jest.fn()
        };

        // Render the component with the user data
        render(<UserInfo {...userInfoProps} />);

        // Assert that the user information is rendered correctly
        expect(screen.getByText(userInfoProps.user.name)).toBeInTheDocument();
        expect(screen.getByText(userInfoProps.user.lastName)).toBeInTheDocument();
    });
});
