import { renderHook } from "@testing-library/react";
import { getRandomUserCredentials } from "../../factories/userFactory";
import mockInitialStore from "../../mocks/store/mockInitialStore";
import { ShowModalActionPayload } from "../../redux/features/uiSlice/types";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { UserRegisterCredentials } from "../../redux/features/userSlice/types";
import ProviderWrapper from "../../testUtils/ProviderWrapper";
import useUser from "./useUser";

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

const userCredentials: UserRegisterCredentials = getRandomUserCredentials();

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
});
