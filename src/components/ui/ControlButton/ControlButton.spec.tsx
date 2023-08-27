import { render, fireEvent } from "@testing-library/react";
import { ControlButton } from "./ControlButton.tsx";
import "@testing-library/jest-dom";

describe("ControlButton", () => {
  it("renders the button with the provided text", () => {
    const { getByText } = render(<ControlButton text="Click me" />);
    const buttonElement = getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <ControlButton text="Click me" onClick={onClickMock} />,
    );

    const buttonElement = getByText("Click me");
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });
});
