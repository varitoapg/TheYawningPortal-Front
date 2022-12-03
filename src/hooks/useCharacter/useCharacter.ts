import axios, { AxiosError } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteCharacterActionCreator,
  getAllCharactersActionCreator,
} from "../../redux/features/characterSlice/characterSlice";
import { Character } from "../../redux/features/characterSlice/reducer/types";
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
  const { charactersRoute, deleteRoute, createRoute } = characterRoutes;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const deleteCharacter = useCallback(
    async (idCharacter: string) => {
      try {
        dispatch(showLoadingActionCreator());

        await axios.delete(
          `${baseUrl}${charactersRoute}${deleteRoute}/${idCharacter}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(deleteCharacterActionCreator(idCharacter));
        dispatch(hideLoadingActionCreator());
        dispatch(
          showModalActionCreator({
            isError: false,
            text: "Character deleted successfully!",
          })
        );
      } catch (error: unknown) {
        dispatch(hideLoadingActionCreator());
        dispatch(
          showModalActionCreator({
            isError: true,
            text: (error as AxiosError<AxiosResponseBody>).response?.data
              .error!,
          })
        );
      }
    },
    [baseUrl, charactersRoute, deleteRoute, dispatch, token]
  );

  const createCharacter = async (characterData: Partial<Character>) => {
    try {
      dispatch(showLoadingActionCreator());

      await axios.post(
        `${baseUrl}${charactersRoute}${createRoute}`,
        characterData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: false,
          text: "Character created successfully!",
        })
      );

      navigate("/home");
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
  return { getUserCharacters, deleteCharacter, createCharacter };
};

export default useCharacter;
