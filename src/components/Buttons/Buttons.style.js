import styled from "styled-components";
import { color1, color2 } from "../../theme";

export const Button = styled.button`
  min-width: 150px;
  margin: 20px 15px 0 0;
  padding: 5px 10px;
  letter-spacing: 2px;
  border: 1px solid ${color2};
  border-radius: 5px;
  text-transform: uppercase;
  background-color: ${color1};
  ${({ disabled }) =>
    !disabled &&
    `
    &:hover {
      cursor: pointer;
      color: #0081ff;
      transition: color ease-in-out 0.3s;
    }
  `}
`;

export const ButtonsWrap = styled.div`
  min-width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
