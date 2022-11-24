import axios, { AxiosError } from "axios";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { UserRegisterCredentials } from "../../redux/features/userSlice/types";
import { useAppDispatch } from "../../redux/hooks";
import userRoutes from "../../routes/userRoute";
import { AxiosResponseBody } from "./types";

const useUser = () => {
  const dispatch = useAppDispatch();

  const baseUrl = process.env.REACT_APP_API_URL;

  const { registerRoute, usersRoute } = userRoutes;

  const userRegister = async (registerFormData: UserRegisterCredentials) => {
    try {
      await axios.post(
        `${baseUrl}${usersRoute}${registerRoute}`,
        registerFormData
      );

      dispatch(
        showModalActionCreator({
          isError: false,
          text: "Crit! Welcome, traveler!",
        })
      );
    } catch (error: unknown) {
      dispatch(
        showModalActionCreator({
          isError: true,
          text: (error as AxiosError<AxiosResponseBody>).response?.data.error!,
        })
      );
    }
  };

  return {
    userRegister,
  };
};

export default useUser;
