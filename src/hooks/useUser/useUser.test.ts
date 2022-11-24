import { renderHook } from "@testing-library/react";
import mockInitialStore from "../../mocks/store/mockInitialStore";
import { ShowModalActionPayload } from "../../redux/features/uiSlice/types";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { UserRegisterCredentials } from "../../redux/features/userSlice/types";
import ProviderWrapper from "../../testUtils/ProviderWrapper";
import { CustomTokenPayload } from "./types";
import useUser from "./useUser";
import testProfile from "../../mocks/testProfile";
import { userLoginActionCreator } from "../../redux/features/userSlice/userSlice";
import { getRandomUserCredentials } from "../../factories/userFactory";

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

const userCredentials: UserRegisterCredentials = getRandomUserCredentials();

jest.mock("jwt-decode", () => {
  return () => ({ id: "testid", username: "admin" } as CustomTokenPayload);
});

jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");

Object.setPrototypeOf(window.localStorage.setItem, jest.fn());

describe("Given the custom hook useUser", () => {
  describe("And its method userRegister is invoked", () => {
    describe("When it's invoked with username 'AdminAdmin', email 'admin@test.com' and password 'AdminAdmin'", () => {
      test("Then dispatch should be called once with showModalActionCreator witn isError false and text 'Crit! Welcome, traveler!", async () => {
        const { result } = renderHook(() => useUser(), {
          wrapper: ProviderWrapper,
        });

        const actionPayload: ShowModalActionPayload = {
          isError: false,
          text: "Crit! Welcome, traveler!",
        };

        await result.current.userRegister(userCredentials);

        expect(dispatchSpy).toHaveBeenCalledWith(
          showModalActionCreator(actionPayload)
        );
      });
    });

    describe("When its method registerUser is invoked with username 'AdminAdmin', that is already in the database", () => {
      test("Then dispatch should be called with showModalActionCreator with isError true and text 'There was an error during registration. Try again!'", async () => {
        const { result } = renderHook(() => useUser(), {
          wrapper: ProviderWrapper,
        });

        userCredentials.username = "AdminRepetad";
        const actionPayload: ShowModalActionPayload = {
          isError: true,
          text: "username already exists",
        };

        await result.current.userRegister(userCredentials);

        expect(dispatchSpy).toHaveBeenCalledWith(
          showModalActionCreator(actionPayload)
        );
      });
    });
  });

  describe("And its method userLogin is invoked", () => {
    describe("When it is called with an username and wrong password '12345678'", () => {
      test("Then dispatch should be called one with showModalActionCreator with an error message 'Wrong credentials", async () => {
        const { result } = renderHook(() => useUser(), {
          wrapper: ProviderWrapper,
        });
        userCredentials.password = "12345678";

        const expectedPayload: ShowModalActionPayload = {
          isError: true,
          text: "Wrong credentials",
        };

        await result.current.userLogin(userCredentials);

        expect(dispatchSpy).toHaveBeenCalledWith(
          showModalActionCreator(expectedPayload)
        );
      });
    });

    describe("When it is called and there isn't a token", () => {
      test("Then dispatch should be called one with showModalActionCreator with an error message 'Something goes wrong, please try again!", async () => {
        const { result } = renderHook(() => useUser(), {
          wrapper: ProviderWrapper,
        });

        const expectedPayload: ShowModalActionPayload = {
          isError: true,
          text: "Something goes wrong, please try again!",
        };

        await result.current.userLogin(userCredentials);

        expect(dispatchSpy).toHaveBeenCalledWith(
          showModalActionCreator(expectedPayload)
        );
      });
    });

    describe("When it's called with a correct username and password", () => {
      test("Then it should called userLoginActionCreator with the user information", async () => {
        const { result } = renderHook(() => useUser(), {
          wrapper: ProviderWrapper,
        });
        const expectedUser = testProfile;
        const user = {
          username: testProfile.username,
          password: "password",
        };

        await result.current.userLogin(user);

        expect(dispatchSpy).toHaveBeenCalledWith(
          userLoginActionCreator(expectedUser)
        );
        expect(window.localStorage.setItem).toHaveBeenCalledWith(
          "token",
          expectedUser.token
        );
      });
    });
  });
});
