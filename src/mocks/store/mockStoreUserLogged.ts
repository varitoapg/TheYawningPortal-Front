import { configureStore } from "@reduxjs/toolkit";
import { characterReducer } from "../../redux/features/characterSlice/characterSlice";
import { uiReducer } from "../../redux/features/uiSlice/uiSlice";
import { userReducer } from "../../redux/features/userSlice/userSlice";
import { store } from "../../redux/store";
import { fourCharactersState } from "../states/characterState";
import { mockUiModalOpenState } from "../states/uiState";
import { mockUserLogged } from "../states/userState";

const mockStoreUserLogged: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    characters: characterReducer,
  },
  preloadedState: {
    ui: mockUiModalOpenState,
    user: mockUserLogged,
    characters: fourCharactersState,
  },
});

export default mockStoreUserLogged;
