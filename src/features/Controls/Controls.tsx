import { ControlButton } from "../../components";
import { StyledParagraph, StyledSection, StyledWrapper } from "./styled";
import { BuildingProps } from "../../hooks";

type ControlsProps = {
  buildingStore: BuildingProps;
  setElevatorFloor: (floor: number) => void;
};

export const Controls = ({
  buildingStore,
  setElevatorFloor,
}: ControlsProps) => {
  return (
    <StyledSection>
      <StyledParagraph>Select the floor you need</StyledParagraph>
      <StyledWrapper>
        {Array.from({ length: buildingStore.floors }, (_, index) => (
          <ControlButton
            onClick={() => setElevatorFloor(index + 1)}
            key={index}
            text={index + 1}
          />
        ))}
      </StyledWrapper>
    </StyledSection>
  );
};
