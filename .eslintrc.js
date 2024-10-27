module.exports = {
  root: true,
  extends: ["universe/native", "universe/web", "prettier"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
