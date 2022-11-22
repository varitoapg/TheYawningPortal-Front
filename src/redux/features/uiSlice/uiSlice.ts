import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";
import showModal from "./reducers/showModal";

const initialState: UiState = {
  isLoading: false,
  modal: {
    isError: false,
    isOpen: false,
    text: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showModal,
  },
});

export const { showModal: showModalActionCreator } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
