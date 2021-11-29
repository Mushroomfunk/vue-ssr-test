import axios from "axios";
import { APP_BASE_URL } from "../config.js";

const api = axios.create({
  baseURL: APP_BASE_URL,
  headers: {
    "Content-type": "application/json",
    "bf-localization": "AT,EUR,en",
  },
});

export const getTheme = (theme) => {
  return api.get(`/page:type=category&query=${theme}`);
};

export const getNavigation = () => {
  return api.get(`/common:navigation`);
};
