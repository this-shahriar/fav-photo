import AddNew from ".";
import { cleanup, render } from "../../Utils/test-utils";

afterEach(cleanup);

const initialState = { accepted: [], rejected: [], current: {} };

it("checkAddNewRenders", () => {
  const { queryByTestId } = render(<AddNew />, {
    preloadedState: initialState,
  });
  expect(queryByTestId("add-new-body")).toBeTruthy();
});

describe("check-AddNew", () => {
  it("check-default-AddNew", () => {
    const { queryByTestId } = render(<AddNew />, {
      preloadedState: initialState,
    });
    expect(queryByTestId("delete-all-btncurrent-random-image")).toBeFalsy();
  });

  it("check-image-loaded-AddNew", () => {
    const { queryByTestId } = render(<AddNew />, {
      preloadedState: {
        current: {
          id: 1,
          url: "https://images.unsplash.com/photo-1636866204464-0335a56e6e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUxOTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzcyNzcyOTY&ixlib=rb-1.2.1&q=80&w=1080",
        },
      },
    });
    expect(queryByTestId("current-random-image")).toBeTruthy();
  });
});
