import axios, { AxiosError } from "axios";
import { useCallback } from "react";
import { getAllCharactersActionCreator } from "../../redux/features/characterSlice/characterSlice";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import characterRoutes from "../../routes/charactersRoute";
import { AxiosResponseBody } from "../useUser/types";

const useCharacter = () => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const { charactersRoute } = characterRoutes;

  const dispatch = useAppDispatch();

  const token = localStorage.getItem("token");

  const getUserCharacters = useCallback(async () => {
    try {
      dispatch(showLoadingActionCreator());

      const response = await axios.get(`${baseUrl}${charactersRoute}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const charactersResponse = response.data;

      dispatch(getAllCharactersActionCreator(charactersResponse.allCharacters));
      dispatch(hideLoadingActionCreator());
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: true,
          text: (error as AxiosError<AxiosResponseBody>).response?.data.error!,
        })
      );
    }
  }, [baseUrl, charactersRoute, dispatch, token]);

  return { getUserCharacters };
};

export default useCharacter;
