import styled from "styled-components";
import { buildingsSize } from "../config/config.ts";

export const StyledElevatorCell = styled.div`
  border: 1px solid var(--color-white);
  width: ${buildingsSize.WIDTH}px;
  height: ${buildingsSize.HEIGHT}px;
`;

export const StyledFloorRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledFloorCell = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: ${buildingsSize.WIDTH}px;
  height: ${buildingsSize.HEIGHT}px;
  padding-right: 0.313rem;
`;
