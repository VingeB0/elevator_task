import { BuildingProps } from "./useBuildingStore.tsx";
import { useMemo } from "react";
import { StyledElevatorCell, StyledFloorCell, StyledFloorRow } from "./styled";

export function useBuild({ floors, elevators }: BuildingProps) {
  const buildElevators = useMemo(
    () =>
      Array.from({ length: elevators }, (_, index) => (
        <StyledElevatorCell key={index} />
      )),
    [elevators],
  );

  const buildFloors = useMemo(() => {
    return Array.from({ length: floors }, (_, index) => (
      <StyledFloorRow key={index}>
        <StyledFloorCell>{floors - index}</StyledFloorCell>
        {buildElevators}
      </StyledFloorRow>
    ));
  }, [buildElevators, floors]);

  const Building = () => buildFloors;

  return <Building />;
}
