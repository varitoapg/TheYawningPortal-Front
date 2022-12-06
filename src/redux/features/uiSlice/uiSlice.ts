import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";
import showModal from "./reducers/showModal";
import hideModal from "./reducers/hideModal";
import showLoading from "./reducers/showLoading";
import hideLoading from "./reducers/hideLoading";
import getPages from "./reducers/getPages";
import moveToNextPage from "./reducers/moveToNextPage";
import filterClass from "./reducers/filterClass";

const initialState: UiState = {
  isLoading: false,
  modal: {
    isError: false,
    isOpen: false,
    text: "",
  },
  pages: {
    currentPage: 0,
    totalPages: 2,
    isNextPage: true,
  },
  filter: "all",
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
    filterClass,
  },
});

export const {
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreator,
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  getPages: getPagesActionCreator,
  moveToNextPage: moveToNextPageActionCreator,
  filterClass: filterClassActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
