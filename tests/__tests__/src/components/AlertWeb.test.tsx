import alert from "../../../../src/components/Alert";

// Mocking the window.confirm function for the web
window.confirm = jest.fn();

// Mocking React Native's Alert.alert function
jest.mock("react-native", () => ({
  Alert: {
    alert: jest.fn(),
  },
  Platform: {
    OS: "web",
  },
}));

describe("Alert Web", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call window.confirm and onPress callback on web", () => {
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

    window.confirm.mockReturnValue(true);

    alert(title, description, options);

    expect(window.confirm).toHaveBeenCalledWith(`${title}\n${description}`);
    expect(options[0].onPress).toHaveBeenCalled();
    expect(options[1].onPress).not.toHaveBeenCalled();
  });
});
