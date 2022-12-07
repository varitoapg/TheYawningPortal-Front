import axios, { AxiosError } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteCharacterActionCreator,
  getAllCharactersActionCreator,
  getCharacterByIdActionCreator,
  getMoreCharactersActionCreator,
} from "../../redux/features/characterSlice/characterSlice";
import { CharacterForm } from "../../redux/features/characterSlice/reducer/types";
import {
  getPagesActionCreator,
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

  const getUserCharacters = useCallback(
    async (page = 0, characterClass = "all") => {
      try {
        dispatch(showLoadingActionCreator());

        const response = await axios.get(`${baseUrl}${charactersRoute}`, {
          params: {
            page,
            characterClass,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { allCharacters, isNextPage, count } = response.data;

        if (page === 0) {
          dispatch(
            getAllCharactersActionCreator({ allCharacters, total: count })
          );
        } else {
          dispatch(
            getMoreCharactersActionCreator({ allCharacters, total: count })
          );
        }

        dispatch(getPagesActionCreator({ isNextPage, currentPage: page }));
        dispatch(hideLoadingActionCreator());
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
    [baseUrl, charactersRoute, dispatch, token]
  );

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

  const createCharacter = async (characterData: CharacterForm) => {
    try {
      dispatch(showLoadingActionCreator());

      await axios.post(
        `${baseUrl}${charactersRoute}${createRoute}`,
        characterData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
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

  const getCharacterById = useCallback(
    async (idCharacter: string) => {
      try {
        dispatch(showLoadingActionCreator());
        const response = await axios.get(
          `${baseUrl}${charactersRoute}/${idCharacter}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        dispatch(getCharacterByIdActionCreator(response.data));
        dispatch(hideLoadingActionCreator());
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
    [baseUrl, charactersRoute, dispatch, token]
  );

  return {
    getUserCharacters,
    deleteCharacter,
    createCharacter,
    getCharacterById,
  };
};
export default useCharacter;
