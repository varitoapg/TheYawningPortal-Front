import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";
import showModal from "./reducers/showModal";
import hideModal from "./reducers/hideModal";
import showLoading from "./reducers/showLoading";
import hideLoading from "./reducers/hideLoading";
import getPages from "./reducers/getPages";
import moveToNextPage from "./reducers/moveToNextPage";

const initialState: UiState = {
  isLoading: false,
  modal: {
    isError: false,
    isOpen: false,
    text: "",
  },
  pages: {
    currentPage: 0,
    totalPages: 1,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showModal,
    hideModal,
    showLoading,
    hideLoading,
    getPages,
    moveToNextPage,
  },
});

export const {
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreator,
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  getPages: getPagesActionCreator,
  moveToNextPage: moveToNextPageActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
