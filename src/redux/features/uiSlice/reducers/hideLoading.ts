import { UiState } from "../types";

const showLoading = (currentUiState: UiState) => ({
  ...currentUiState,
  isLoading: false,
});

export default showLoading;
