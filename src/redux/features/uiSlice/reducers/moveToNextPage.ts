import { UiState } from "../types";

const moveToNextPage = (currentUi: UiState) => ({
  ...currentUi,
  pages: {
    ...currentUi.pages,
    currentPage: currentUi.pages.currentPage + 1,
  },
});

export default moveToNextPage;
