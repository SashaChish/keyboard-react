import { useSelector, useDispatch } from 'react-redux'

import { allKeys } from '../../data'
import { onChangeTheme } from '../../store/actions'
import { useApp } from '../../store/selectors'

import { Row, Wrapper, Key } from './Keyboard.style'

const Keyboard = () => {
  const { theme, color } = useSelector(useApp)
  const dispatch = useDispatch()

  const handleChangeTheme = e => {
    dispatch(onChangeTheme({ id: e.target.id, color }))
  }

  return (
    <Wrapper>
      <Row>
        {allKeys.map((item, index) => {
          const id = `${item}-${index}`
          return (
            <Key key={id} id={id} color={theme[id]} onClick={handleChangeTheme}>
              {item}
            </Key>
          )
        })}
      </Row>
    </Wrapper>
  )
}

export default Keyboard
