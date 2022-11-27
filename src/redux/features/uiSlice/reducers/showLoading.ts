import { UiState } from "../types";

const showLoading = (currentUiState: UiState) => ({
  ...currentUiState,
  isLoading: true,
});

export default showLoading;
