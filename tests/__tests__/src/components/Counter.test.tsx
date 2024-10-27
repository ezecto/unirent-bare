import { render, fireEvent } from "@testing-library/react-native";

import Counter from "../../../../src/components/Counter";

describe("Counter component", () => {
  it("renders the component with initial result value", () => {
    const result = 5;
    const { getByText } = render(<Counter result={result} />);

    const resultText = getByText(result.toString());

    expect(resultText).toBeTruthy();
  });

  it("calls onMinus when minus button is pressed with a positive result", () => {
    const result = 5;
    const onMinus = jest.fn();
    const { getByText, getByTestId } = render(
      <Counter result={result} onMinus={onMinus} />,
    );

    const minusButton = getByTestId("minus-button");

    fireEvent.press(minusButton);

    expect(onMinus).toHaveBeenCalledWith(result - 1);
  });

  it("does not call onMinus when minus button is pressed with a result of 0", () => {
    const result = 0;
    const onMinus = jest.fn();
    const { getByText, getByTestId } = render(
      <Counter result={result} onMinus={onMinus} />,
    );

    const minusButton = getByTestId("minus-button");

    fireEvent.press(minusButton);

    expect(onMinus).not.toHaveBeenCalled();
  });

  it("calls onPlus when plus button is pressed with a result less than 10", () => {
    const result = 5;
    const onPlus = jest.fn();
    const { getByText, getByTestId } = render(
      <Counter result={result} onPlus={onPlus} />,
    );

    const plusButton = getByTestId("plus-button");

    fireEvent.press(plusButton);

    expect(onPlus).toHaveBeenCalledWith(result + 1);
  });

  it("does not call onPlus when plus button is pressed with a result of 10", () => {
    const result = 10;
    const onPlus = jest.fn();
    const { getByText, getByTestId } = render(
      <Counter result={result} onPlus={onPlus} />,
    );

    const plusButton = getByTestId("plus-button");

    fireEvent.press(plusButton);

    expect(onPlus).not.toHaveBeenCalled();
  });
});
