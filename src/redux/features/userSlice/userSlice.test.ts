import { getRandomUserState } from "../../../factories/userFactory";
import { mockUserInitialState } from "../../../mocks/states/userState";
import { UserState } from "./types";
import { userLoginActionCreator, userReducer } from "./userSlice";

const newUserState = getRandomUserState();

describe("Given a userReducer", () => {
  describe("And it's invoked", () => {
    describe("When it receives the initial state and an unknown action", () => {
      test("Then it should return a copy of the intial state", () => {
        const unknownAction = {
          type: "unknown",
        };

        const newState = userReducer(mockUserInitialState, unknownAction);

        expect(newState).toStrictEqual(mockUserInitialState);
      });
    });

    describe("And its reducer loginUser is invoked", () => {
      describe("When it receives an initial state and a loginUser action with a new user in its payload", () => {
        test("Then it should toggle isLogged property of the user", () => {
          const expectedState: UserState = {
            ...newUserState,
            isLogged: true,
          };

          const newState = userReducer(
            newUserState,
            userLoginActionCreator(expectedState)
          );

          expect(newState).toStrictEqual(expectedState);
        });
      });
    });
  });
});
