import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "../../redux/features/uiSlice/uiSlice";
import { userReducer } from "../../redux/features/userSlice/userSlice";
import { store } from "../../redux/store";
import { mockUiInitialState } from "../states/uiState";
import { mockUserInitialState } from "../states/userState";

const mockInitialStore: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
  },
  preloadedState: {
    ui: mockUiInitialState,
    user: mockUserInitialState,
  },
});

export default mockInitialStore;
