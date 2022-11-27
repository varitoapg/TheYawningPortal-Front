import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";
import showModal from "./reducers/showModal";
import hideModal from "./reducers/hideModal";
import showLoading from "./reducers/showLoading";

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
    showLoading,
  },
});

export const {
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreator,
  showLoading: showLoadingActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
