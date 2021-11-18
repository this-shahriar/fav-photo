import { render } from "@testing-library/react";
import Header from ".";

it("checkHeaderRenders", () => {
  const { queryByTestId } = render(<Header />);
  expect(queryByTestId("header-body")).toBeTruthy();
});
