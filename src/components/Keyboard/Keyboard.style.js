import styled from "styled-components";
import { color1, color2, color3 } from "../../theme";

export const Wrapper = styled.div`
  border: 1px solid ${color2};
  border-radius: 10px;
  box-shadow: 1px 1px 10px 3px ${color2};
  background-color: ${color1};
  padding: 25px;
  width: 920px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-top: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 10px;
`;

export const Key = styled.div`
  color: ${({ color }) => color || color3};
  background: ${color2};
  border: 1px solid #9a9a9a;
  border-radius: 6px;
  padding: 0 25px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: box-shadow 0.3s;
  text-transform: uppercase;
  box-shadow: 0 0 0 1px;

  &:nth-child(69) {
    flex: 1;
  }
`;
