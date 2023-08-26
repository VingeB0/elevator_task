import { Props } from "./useBuildingStore.tsx";
import { useMemo } from "react";

const elevator = {
  WIDTH: 50,
  HEIGHT: 50,
};

export function useBuild({ floors, elevators }: Props) {
  const buildElevators = useMemo(() => {
    return Array.from({ length: elevators }, (_, index) => (
      <div
        key={index}
        style={{
          border: "1px solid #fff",
          width: elevator.WIDTH,
          height: elevator.HEIGHT,
        }}
      ></div>
    ));
  }, [elevators]);

  const buildFloors = useMemo(() => {
    return Array.from({ length: floors }, (_, index) => (
      <div
        key={index}
        data-id={index}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          style={{
            width: elevator.WIDTH,
            height: elevator.HEIGHT,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "5px",
          }}
        >
          {floors - index}
        </div>
        {buildElevators}
      </div>
    ));
  }, [buildElevators, floors]);

  const Building = () => buildFloors;

  return <Building />;
}
