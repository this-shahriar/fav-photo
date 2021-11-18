import ApprovedList from ".";
import { cleanup, render } from "../../Utils/test-utils";

afterEach(cleanup);

it("checkApprovedListRenders", () => {
  const { queryByTestId } = render(<ApprovedList />);
  expect(queryByTestId("approved-list-body")).toBeTruthy();
});

describe("check-ApprovedList", () => {
  it("check-default-ApprovedList", () => {
    const { queryByTestId } = render(<ApprovedList />);
    expect(queryByTestId("delete-all-btn")).toBeDisabled();
  });

  it("check-some-images-accepted-ApprovedList", () => {
    const { queryByTestId } = render(<ApprovedList />, {
      preloadedState: {
        accepted: [{ id: 1, url: "test" }],
      },
    });
    expect(queryByTestId("delete-all-btn")).toBeEnabled();
  });
});
