import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { InitialEntry } from "@remix-run/router";
import { ThemeProvider } from "styled-components";
import { uiReducer } from "../redux/features/uiSlice/uiSlice";
import { RootState, store } from "../redux/store";
import GlobalStyle from "../styles/GlobalStyle";
import mainTheme from "../styles/mainTheme/mainTheme";
import { userReducer } from "../redux/features/userSlice/userSlice";
import { characterReducer } from "../redux/features/characterSlice/characterSlice";

interface ExtendedRenderOptions extends RenderOptions {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
  initialEntries?: InitialEntry[];
}

interface ExtendedPropsWithChildren extends PropsWithChildren {
  initialEntries?: InitialEntry[];
}

const Router = ({
  children,
  initialEntries,
}: ExtendedPropsWithChildren): JSX.Element => {
  return initialEntries ? (
    <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
  ) : (
    <BrowserRouter>{children}</BrowserRouter>
  );
};

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState,
    initialEntries,
    store = configureStore({
      reducer: {
        ui: uiReducer,
        user: userReducer,
        characters: characterReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <>
        <Router initialEntries={initialEntries}>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyle />
              {children}
            </ThemeProvider>
          </Provider>
        </Router>
      </>
    );
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
