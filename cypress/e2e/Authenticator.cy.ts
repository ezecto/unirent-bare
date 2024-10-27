// describe("Authenticator:", function () {
//   beforeEach(function () {
//     cy.visit("http://localhost:3000");
//   });

//   describe("Sign In:", () => {
//     it("allows a user to sign in and sign out", () => {
//       cy.get(selectors.usernameInput).type("chee");
//       cy.get(selectors.signInPasswordInput).type("12345678");
//       cy.get(selectors.signInButton).contains("Sign in").click();

//       cy.wait(3000);

//       cy.get(selectors.accountTab).click();
//       cy.get(selectors.signOutButton).contains("Sign out").click();

//       cy.wait(1000);
//     });
//   });
// });

// export const selectors = {
//   usernameInput: '[data-testid="authenticator__text-field__input-username"]',
//   signInPasswordInput:
//     '[data-testid="authenticator__text-field__input-password"]',
//   signInButton: '[data-testid="amplify__button"]',
//   accountTab: '[href="/HomeTab/Account"]',
//   signOutButton: '[tabindex="0"]',
// };
