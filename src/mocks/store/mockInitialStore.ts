import { configureStore } from "@reduxjs/toolkit";
import { characterReducer } from "../../redux/features/characterSlice/characterSlice";
import { uiReducer } from "../../redux/features/uiSlice/uiSlice";
import { userReducer } from "../../redux/features/userSlice/userSlice";
import { store } from "../../redux/store";
import { mockInitialCharacterState } from "../states/characterState";
import { mockUiInitialState } from "../states/uiState";
import { mockUserInitialState } from "../states/userState";

const mockInitialStore: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    characters: characterReducer,
  },
  preloadedState: {
    ui: mockUiInitialState,
    user: mockUserInitialState,
    characters: mockInitialCharacterState,
  },
});

export default mockInitialStore;
