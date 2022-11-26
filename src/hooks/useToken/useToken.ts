import decodeToken from "jwt-decode";
import { useCallback } from "react";
import {
  userLoginActionCreator,
  userLogoutActionCreator,
} from "../../redux/features/userSlice/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import { CustomTokenPayload } from "../useUser/types";

const useToken = () => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user: CustomTokenPayload = decodeToken(token);

      dispatch(userLoginActionCreator({ ...user, token }));
    }
  }, [dispatch]);

  const deleteToken = () => {
    window.localStorage.removeItem("token");
    dispatch(userLogoutActionCreator());
  };

  return { getToken, deleteToken };
};

export default useToken;
