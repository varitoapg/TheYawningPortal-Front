import { UiState } from "../../redux/features/uiSlice/types";

export const mockUiInitialState: UiState = {
  isLoading: false,
  modal: {
    isError: false,
    isOpen: false,
    text: "",
  },
};

export const mockUiModalOpenState: UiState = {
  isLoading: false,
  modal: {
    isError: true,
    isOpen: true,
    text: "Error modal",
  },
};

export const mockUiLoadingOpenState: UiState = {
  isLoading: true,
  modal: {
    isError: false,
    isOpen: false,
    text: "",
  },
};
