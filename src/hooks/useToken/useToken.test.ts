import { renderHook } from "@testing-library/react";
import localStorageMock from "../../mocks/localStorage/localStorageMock";
import mockInitialStore from "../../mocks/store/mockInitialStore";
import testProfile from "../../mocks/testProfile";
import { userLoginActionCreator } from "../../redux/features/userSlice/userSlice";
import ProviderWrapper from "../../testUtils/ProviderWrapper";
import { CustomTokenPayload } from "../useUser/types";
import useToken from "./useToken";

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

jest.mock("jwt-decode", () => {
  return () => ({ id: "testid", username: "admin" } as CustomTokenPayload);
});

describe("Given a useToken custom hook", () => {
  describe("When its method getToken is invoked and there isn't a token in local storage", () => {
    test("Then dispatch shouldn't be called", () => {
      const { result } = renderHook(() => useToken(), {
        wrapper: ProviderWrapper,
      });

      result.current.getToken();

      expect(dispatchSpy).not.toHaveBeenCalledWith(
        userLoginActionCreator(testProfile)
      );
    });
  });

  describe("When its method getToken is invoked and there is the token 'testtoken' in local storage", () => {
    test("Then it should call dispatch with a login user action", () => {
      localStorageMock.setItem("token", "token");

      const { result } = renderHook(() => useToken(), {
        wrapper: ProviderWrapper,
      });

      result.current.getToken();

      expect(dispatchSpy).toHaveBeenCalledWith(
        userLoginActionCreator(testProfile)
      );
    });
  });

  describe("When its method deleteToken is invoked and there is the token 'testtoken' in local storage", () => {
    test("Then the token should be removed from local storage", async () => {
      const { result } = renderHook(() => useToken(), {
        wrapper: ProviderWrapper,
      });

      await result.current.deleteToken();

      expect(localStorageMock.getItem("token")).toBe(undefined);
    });
  });
});
