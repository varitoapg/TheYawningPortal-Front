import axios, { AxiosError } from "axios";
import decodeToken from "jwt-decode";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import {
  User,
  UserRegisterCredentials,
} from "../../redux/features/userSlice/types";
import {
  userLoginActionCreator,
  userLogoutActionCreator,
} from "../../redux/features/userSlice/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import userRoutes from "../../routes/userRoute";
import useToken from "../useToken/useToken";
import {
  AxiosResponseBody,
  CustomTokenPayload,
  UserLoginCredentials,
} from "./types";

const useUser = () => {
  const dispatch = useAppDispatch();
  const { deleteToken } = useToken();

  const baseUrl = process.env.REACT_APP_API_URL;

  const { registerRoute, usersRoute, loginRoute } = userRoutes;

  const userRegister = async (registerFormData: UserRegisterCredentials) => {
    try {
      dispatch(showLoadingActionCreator());
      await axios.post(
        `${baseUrl}${usersRoute}${registerRoute}`,
        registerFormData
      );

      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: false,
          text: "Crit! Welcome, traveler!",
        })
      );
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: true,
          text: (error as AxiosError<AxiosResponseBody>).response?.data.error!,
        })
      );
    }
  };

  const userLogin = async (userCredentials: UserLoginCredentials) => {
    try {
      dispatch(showLoadingActionCreator());
      const response = await axios.post(
        `${baseUrl}${usersRoute}${loginRoute}`,
        userCredentials
      );
      const { token } = await response.data;

      if (!token) {
        throw new Error();
      }

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const userLogged: User = {
        id: tokenPayload.id,
        token: token,
        username: tokenPayload.username,
      };
      dispatch(hideLoadingActionCreator());
      dispatch(userLoginActionCreator(userLogged));

      window.localStorage.setItem("token", token);
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());
      if (error instanceof AxiosError) {
        dispatch(
          showModalActionCreator({
            isError: true,
            text: (error as AxiosError<AxiosResponseBody>).response?.data
              .error!,
          })
        );
      } else {
        dispatch(
          showModalActionCreator({
            isError: true,
            text: "Something goes wrong, please try again!",
          })
        );
      }
    }
  };

  const userLogout = () => {
    deleteToken();

    dispatch(userLogoutActionCreator());
  };

  return {
    userRegister,
    userLogin,
    userLogout,
  };
};

export default useUser;
