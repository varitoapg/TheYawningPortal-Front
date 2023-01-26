import { defineConfig } from "cypress";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.CYPRESS_BASE_URL;

export default defineConfig({
  env: {
    apiUrl: process.env.REACT_APP_API_URL,
  },
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: url,
  },
});
