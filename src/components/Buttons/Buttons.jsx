import { useSelector, useDispatch } from 'react-redux'

import { onChangeActivePreset, onChangePresets } from '../../store/actions'
import { useApp } from '../../store/selectors'

import { Button, ButtonsWrap } from './Buttons.style'

const Buttons = () => {
  const { presets, theme, activePreset } = useSelector(useApp)
  const dispatch = useDispatch()

  const setPresetsToLocalStorage = data => {
    localStorage.setItem('presets', JSON.stringify(data))
  }

  const savePreset = () => {
    const presetName = `preset-${Object.keys(presets).length || 0}`

    dispatch(onChangePresets({ name: presetName, theme }))
    dispatch(onChangeActivePreset(presetName))
    setPresetsToLocalStorage({ ...presets, [presetName]: theme })
  }

  const updatePreset = () => {
    dispatch(onChangePresets({ name: activePreset, theme }))
    setPresetsToLocalStorage({ ...presets, [activePreset]: theme })
  }

  return (
    <ButtonsWrap>
      <Button onClick={savePreset}>Save</Button>
      <Button onClick={updatePreset} disabled={!activePreset}>
        Update
      </Button>
    </ButtonsWrap>
  )
}

export default Buttons
