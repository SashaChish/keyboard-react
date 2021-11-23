import { color1 } from "../theme";
import * as types from "./types";

const initialState = {
  theme: "",
  presets: JSON.parse(localStorage.getItem("presets")) || {},
  activePreset: "",
  color: color1,
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ONCHANGE_THEME:
      return {
        ...state,
        theme: {
          ...state.theme,
          [payload.id]: payload.color,
        },
      };
    case types.SET_THEME:
      return {
        ...state,
        theme: payload,
      };
    case types.ONCHANGE_COLOR:
      return {
        ...state,
        color: payload,
      };
    case types.ONCHANGE_ACTIVE_PRESET:
      return {
        ...state,
        activePreset: payload,
      };
    case types.ONCHANGE_PRESETS:
      return {
        ...state,
        presets: {
          ...state.presets,
          [payload.name]: payload.theme,
        },
      };
    default:
      return state;
  }
};
