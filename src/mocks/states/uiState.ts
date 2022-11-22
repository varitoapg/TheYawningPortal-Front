import { UiState } from "../../redux/features/uiSlice/types";

export const mockUiInitialState: UiState = {
  isLoading: false,
  modal: {
    isError: false,
    isOpen: false,
    text: "",
  },
};
