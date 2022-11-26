import { getRandomUserState } from "../../../factories/userFactory";
import { mockUserInitialState } from "../../../mocks/states/userState";
import { UserState } from "./types";
import {
  userLoginActionCreator,
  userLogoutActionCreator,
  userReducer,
} from "./userSlice";

const newUserState = getRandomUserState();

describe("Given a userReducer", () => {
  describe("When it receives the initial state and an unknown action", () => {
    test("Then it should return a copy of the intial state", () => {
      const unknownAction = {
        type: "unknown",
      };

      const newState = userReducer(mockUserInitialState, unknownAction);

      expect(newState).toStrictEqual(mockUserInitialState);
    });
  });

  describe("And its reducer userLogin is invoked", () => {
    describe("When it receives an initial state and a userLogin action with a new user in its payload", () => {
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

  describe("When its reducer userLogout is invoked", () => {
    test("Then the userState should return to its initial state", () => {
      const currentState: UserState = {
        id: "",
        isLogged: true,
        token: "",
        username: "",
      };
      const expectedStated: UserState = {
        id: "",
        isLogged: false,
        token: "",
        username: "",
      };

      const newState = userReducer(currentState, userLogoutActionCreator());

      expect(newState).toStrictEqual(expectedStated);
    });
  });
});
