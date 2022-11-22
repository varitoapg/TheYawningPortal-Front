import { PayloadAction } from "@reduxjs/toolkit";
import { ShowModalActionPayload, UiState } from "../types";

const showModal = (
  currentState: UiState,
  action: PayloadAction<ShowModalActionPayload>
) => ({
  ...currentState,
  modal: {
    isOpen: true,
    isError: action.payload.isError,
    text: action.payload.text,
  },
});

export default showModal;
