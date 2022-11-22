import axios, { AxiosError } from "axios";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { userRegisterCredentials } from "../../redux/features/userSlice/types";
import { useAppDispatch } from "../../redux/hooks";
import userRoutes from "../../routes/userRoute";

const useUser = () => {
  const dispatch = useAppDispatch();

  const baseUrl = process.env.REACT_APP_API_URL;

  const { registerRoute, usersRoute } = userRoutes;

  const userRegister = async (registerFormData: userRegisterCredentials) => {
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
      if (error instanceof AxiosError) {
        dispatch(
          showModalActionCreator({
            isError: true,
            text: "There was an error during registration. Try again!",
          })
        );
      }
    }
  };
  return {
    userRegister,
  };
};

export default useUser;
