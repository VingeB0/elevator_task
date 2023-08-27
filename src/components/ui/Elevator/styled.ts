import styled from "styled-components";
import { ANIMATION_TIME, buildingsSize } from "../../../config/config.ts";
import { ElevatorProps } from "./Elevator.tsx";

export const StyledElevatorWrapper = styled.div<
  Pick<ElevatorProps, "time"> & { move: number }
>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${buildingsSize.WIDTH}px;
  height: ${buildingsSize.HEIGHT}px;
  transform: translateY(
    ${(props) => -((props.move - 1) * buildingsSize.HEIGHT)}px
  );
  transition: transform ${(props) => props.time * ANIMATION_TIME}s linear;
`;

export const StyledElevatorInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--color-primary);
  background-color: var(--color-white);
  width: ${buildingsSize.WIDTH - 10}px;
  height: ${buildingsSize.HEIGHT - 10}px;
`;
