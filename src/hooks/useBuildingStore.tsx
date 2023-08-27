import { useState } from "react";
import { DEFAULT_ELEVATORS, DEFAULT_FLOORS } from "../config/config.ts";

export type BuildingProps = {
  floors: number;
  elevators: number;
};

export function useBuildingStore() {
  const [building, setBuilding] = useState<BuildingProps>({
    floors: DEFAULT_FLOORS,
    elevators: DEFAULT_ELEVATORS,
  });

  const setBuildingStore = (store: BuildingProps) => setBuilding(store);

  return {
    buildingStore: building,
    setBuildingStore: setBuildingStore,
  };
}
