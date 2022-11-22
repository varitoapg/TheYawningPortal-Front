import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "../../redux/features/uiSlice/uiSlice";
import { store } from "../../redux/store";
import { mockUiInitialState } from "../states/uiState";

const mockInitialStore: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
  },
  preloadedState: {
    ui: mockUiInitialState,
  },
});

export default mockInitialStore;
