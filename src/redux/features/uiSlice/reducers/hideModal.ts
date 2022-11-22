import { UiState } from "../types";

const hideModal = (currentState: UiState) => ({
  ...currentState,
  modal: {
    isError: false,
    isOpen: false,
    text: "",
  },
});

export default hideModal;
