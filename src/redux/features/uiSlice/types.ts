export interface ModalState {
  isError: boolean;
  text: string;
  isOpen: boolean;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  isNextPage: boolean;
}
export interface ShowModalActionPayload {
  isError: boolean;
  text: string;
}

export interface UiState {
  isLoading: boolean;
  modal: ModalState;
  pages: Pagination;
}
