import alert from "../../../../src/components/Alert";

// Mocking the window.confirm function for the web
window.confirm = jest.fn();

// Mocking React Native's Alert.alert function
jest.mock("react-native", () => ({
  Alert: {
    alert: jest.fn(),
  },
  Platform: {
    OS: "android",
  },
}));

describe("Alert non Web", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call Alert.alert on non-web platforms", () => {
    const title = "Test Title";
    const description = "Test Description";
    const options = [
      {
        style: "default",
        onPress: jest.fn(),
      },
      {
        style: "cancel",
        onPress: jest.fn(),
      },
    ];

    alert(title, description, options);

    expect(window.confirm).not.toHaveBeenCalled();
    expect(require("react-native").Alert.alert).toHaveBeenCalledWith(
      title,
      description,
      options,
    );
  });
});
