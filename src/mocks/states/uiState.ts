import { UiState } from "../../redux/features/uiSlice/types";

export const mockUiInitialState: UiState = {
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

export const mockUiModalOpenState: UiState = {
  isLoading: false,
  modal: {
    isError: true,
    isOpen: true,
    text: "Error modal",
  },
  pages: {
    currentPage: 0,
    totalPages: 1,
  },
};

export const mockUiLoadingOpenState: UiState = {
  isLoading: true,
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
