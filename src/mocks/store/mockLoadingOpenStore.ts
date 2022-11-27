import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "../../redux/features/uiSlice/uiSlice";
import { userReducer } from "../../redux/features/userSlice/userSlice";
import { store } from "../../redux/store";
import { mockUiLoadingOpenState } from "../states/uiState";
import { mockUserInitialState } from "../states/userState";

const mockLoadingOpenStore: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
  },
  preloadedState: {
    ui: mockUiLoadingOpenState,
    user: mockUserInitialState,
  },
});

export default mockLoadingOpenStore;
