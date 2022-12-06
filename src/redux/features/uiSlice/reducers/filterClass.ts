import { PayloadAction } from "@reduxjs/toolkit";
import { UiState } from "../types";

const filterClass = (
  previousUi: UiState,
  action: PayloadAction<string>
): UiState => ({
  ...previousUi,
  filter: action.payload,
  pages: { ...previousUi.pages, currentPage: 0 },
});

export default filterClass;
