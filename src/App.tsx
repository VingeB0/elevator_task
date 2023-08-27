import { Controls, Constructor, Construction } from "./features";
import { useBuildingStore } from "./hooks";
import { useEffect, useState } from "react";
import { ANIMATION_TIME } from "./config/config.ts";

type ElevatorAction = "available" | "busy";
type MovingElevator = {
  action: ElevatorAction;
  floor: number;
};
export type MovingElevators = MovingElevator[];

function App() {
  const { buildingStore, setBuildingStore } = useBuildingStore();

  const [movingElevators, setMovingElevators] = useState<MovingElevators>([]);

  const setElevatorFloor = (floor: number) => {
    //do nothing if all elevators are busy or there is already an elevator on the floor
    const existsFloor = movingElevators.find((item) => item.floor === floor);
    const available = movingElevators.find(
      (item) => item.action === "available",
    );
    if (existsFloor || !available) return false;

    //find the nearest elevator
    const floorsDiff = movingElevators.map((elevator, index) => {
      const diff = Math.abs(floor - elevator.floor);
      return { index: index, diff: diff, action: elevator.action };
    });

    const minDiff = Math.min(
      ...floorsDiff
        .filter((item) => item.action === "available")
        .map((item) => item.diff),
    );

    const indexMinDiff = floorsDiff
      .map((item) =>
        item.diff && item.action === "available" ? item.diff : null,
      )
      .indexOf(minDiff);

    //move the nearest elevator that we found
    const move = movingElevators.map((elevator, index) => {
      if (index === indexMinDiff) {
        return { floor: floor, action: "busy" as ElevatorAction };
      }
      return elevator;
    });

    setMovingElevators(move);

    //make the elevator available again after it has arrived at the appointed time after the time (ANIMATION_TIME)
    setTimeout(
      () => {
        setMovingElevators((prevState) => {
          return prevState.map((elevator, index) => {
            if (index === indexMinDiff) {
              return { ...elevator, action: "available" as ElevatorAction };
            }
            return elevator;
          });
        });
      },
      ANIMATION_TIME * 1000 * minDiff,
    );
  };

  useEffect(() => {
    const initialElevators: MovingElevators = Array.from(
      { length: buildingStore.elevators },
      () => {
        return { action: "available" as ElevatorAction, floor: 1 };
      },
    );
    setMovingElevators(initialElevators);
  }, [buildingStore.elevators]);

  return (
    <>
      <Construction
        buildingStore={buildingStore}
        movingElevators={movingElevators}
      />
      <Controls
        buildingStore={buildingStore}
        setElevatorFloor={setElevatorFloor}
      />
      <Constructor
        buildingStore={buildingStore}
        setBuildingStore={setBuildingStore}
      />
    </>
  );
}

export default App;
