import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  onChangeActivePreset,
  onChangeColor,
  setTheme,
} from "../../store/actions";
import { useApp } from "../../store/selectors";

import { Column, H3, Select, OptionsWrap, PresetName } from "./ControlGroup.style";

const ControlGroup = () => {
  const { color, activePreset, presets } = useSelector(useApp);
  const dispatch = useDispatch();

  const presetNameList = useMemo(() => Object.keys(presets), [presets]);

  const handleOnChangeColor = (e) => {
    dispatch(onChangeColor(e.target.value));
  };

  const onChangeSelect = (e) => {
    const value = e.target.value;

    dispatch(onChangeActivePreset(value));
    dispatch(setTheme(presets[value]));
  };

  return (
    <>
      <OptionsWrap>
        {presetNameList.length && (
          <Column>
            <H3>Choose preset</H3>
            <Select value={activePreset} onChange={onChangeSelect}>
              {presetNameList.map((item, index) => (
                <option key={item + index}>{item}</option>
              ))}
            </Select>
          </Column>
        )}
        <Column>
          <H3>Choose color</H3>
          <input type="color" onChange={handleOnChangeColor} value={color} />
        </Column>
      </OptionsWrap>

      <PresetName>
        {activePreset
          ? activePreset
          : `preset-${Object.keys(presets).length || 0}`}
      </PresetName>
    </>
  );
};

export default ControlGroup;
