import * as types from "./types";

export const onChangeColor = (color) => ({
  type: types.ONCHANGE_COLOR,
  payload: color,
});

export const onChangeActivePreset = (activePreset) => ({
  type: types.ONCHANGE_ACTIVE_PRESET,
  payload: activePreset,
});

export const onChangeTheme = ({id, color}) => ({
  type: types.ONCHANGE_THEME,
  payload: {
    id,
    color,
  },
});

export const setTheme = theme => ({type: types.SET_THEME, payload: theme})

export const onChangePresets = ({ name, theme }) => ({
  type: types.ONCHANGE_PRESETS,
  payload: {
    name,
    theme,
  },
});
