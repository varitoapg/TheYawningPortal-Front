import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";
import showModal from "./reducers/showModal";
import hideModal from "./reducers/hideModal";

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
    hideModal,
  },
});

export const {
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
