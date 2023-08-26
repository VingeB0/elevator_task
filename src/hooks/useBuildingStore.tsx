import {useState} from "react";

export type Props = {
    floors: number;
    elevators: number;
}

const DEFAULT_ELEVATORS: number = 6
const DEFAULT_FLOORS: number = 9

export function useBuildingStore() {
    const [building, setBuilding] = useState<Props>({
        floors: DEFAULT_FLOORS,
        elevators: DEFAULT_ELEVATORS,
    })

    // console.log('store', building)

    const setBuildingStore = (store: Props) => setBuilding(store)

    return {
        buildingStore: building,
        setBuildingStore: setBuildingStore
    }
}