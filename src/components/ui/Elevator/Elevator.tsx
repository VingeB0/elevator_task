import { StyledElevatorWrapper, StyledElevatorInner } from "./styled";

export type ElevatorProps = {
  time: number;
  moveTo: number;
};

export const Elevator = ({ moveTo, time, ...props }: ElevatorProps) => {
  return (
    <StyledElevatorWrapper move={moveTo} time={time} {...props}>
      <StyledElevatorInner>{moveTo}</StyledElevatorInner>
    </StyledElevatorWrapper>
  );
};
