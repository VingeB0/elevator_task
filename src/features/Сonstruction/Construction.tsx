import { BuildingProps, useBuild } from "../../hooks";
import { Elevator } from "../../components";
import { useEffect, useMemo, useRef } from "react";
import { MovingElevators } from "../../App.tsx";
import { StyledLayoutMovingElevator, StyledSection } from "./styled";

type ConstructionProps = {
  buildingStore: BuildingProps;
  movingElevators: MovingElevators;
};

export const Construction = ({
  buildingStore,
  movingElevators,
}: ConstructionProps) => {
  const Building = useBuild(buildingStore);
  const prevMovingElevator = useRef<MovingElevators>();

  const buildMovingElevators = useMemo(() => {
    return movingElevators.map((item, index) => {
      const diff =
        prevMovingElevator.current &&
        Math.abs(prevMovingElevator.current?.[index]?.floor - item.floor);
      return <Elevator key={index} moveTo={item.floor} time={diff || 0} />;
    });
  }, [movingElevators]);

  useEffect(() => {
    prevMovingElevator.current = movingElevators;
  });

  return (
    <StyledSection>
      {Building}
      <StyledLayoutMovingElevator>
        {buildMovingElevators}
      </StyledLayoutMovingElevator>
    </StyledSection>
  );
};
