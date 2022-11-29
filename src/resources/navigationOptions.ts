export interface NavigationOptionsStructure {
  paths: string[];
  texts: string[];
}

export const isLoggedOptions: NavigationOptionsStructure = {
  paths: ["/home", "/create", "/logout"],
  texts: ["home", "create", "Logout"],
};

export const notLogguedOptions: NavigationOptionsStructure = {
  paths: ["/login", "/register"],
  texts: ["login", "register"],
};
