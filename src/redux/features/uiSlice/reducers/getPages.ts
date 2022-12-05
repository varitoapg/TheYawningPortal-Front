import { PayloadAction } from "@reduxjs/toolkit";
import { Pagination, UiState } from "../types";

const loadPagesReducer = (
  previousUi: UiState,
  action: PayloadAction<Pagination>
) => ({
  ...previousUi,
  pages: {
    currentPage: action.payload.currentPage,
    totalPages: action.payload.totalPages,
    isNextPage: action.payload.isNextPage,
  },
});

export default loadPagesReducer;
