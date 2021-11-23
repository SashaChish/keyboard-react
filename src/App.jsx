import Keyboard from "./components/Keyboard";
import Buttons from "./components/Buttons";
import ControlGroup from "./components/ControlGroup";

import { Wrapper } from "./App.style";

export default function App() {
  return (
    <Wrapper>
      <Keyboard />
      <ControlGroup />
      <Buttons />
    </Wrapper>
  );
}
