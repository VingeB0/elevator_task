import './App.css'
import {Controls, Constructor, Construction} from "./features";
import {useBuildingStore} from "./hooks";
import {useEffect, useState} from "react";

const ANIMATION_TIME = 300

type ElevatorAction = "available" | "busy";
type MovingElevator = {
    action: ElevatorAction
    floor: number
};
export type MovingElevators = MovingElevator[]

function App() {
    const {buildingStore, setBuildingStore} = useBuildingStore();
    // console.log('buildingStore', buildingStore)

    const [movingElevators, setMovingElevators] = useState<MovingElevators>([]);
    // console.log('movingElevators', movingElevators)

    const setElevatorFloor = (floor: number) => {
        console.log('--- -- -- start -- -- ---')
        console.log('floor', floor)
        const existsFloor = movingElevators.find(item => item.floor === floor)
        const available = movingElevators.find(item => item.action === 'available')
        if (existsFloor || !available) return false

        const floorsDiff = movingElevators.map((elevator, index) => {
            const diff = Math.abs(floor - elevator.floor);
            return {index: index, diff: diff, action: elevator.action};
        });
        console.log('floorsDiff', floorsDiff)
        const minDiff = Math.min(
            ...floorsDiff
                .filter(item => item.action === 'available')
                .map(item => item.diff)
        )
        console.log('minDiff', minDiff)
        const indexMinDiff = floorsDiff
            .map(item => item.diff && item.action === 'available' ? item.diff : null)
            .indexOf(minDiff)

        console.log('indexMinDiff', indexMinDiff)
        // console.log('floorsDiff', floorsDiff)
        const move = movingElevators.map((elevator, index) => {
            if (index === indexMinDiff) {
                return {floor: floor, action: 'busy' as ElevatorAction};
            }
            return elevator
        })
        console.log('move', move)
        console.log('--- -- end -- ---')
        setMovingElevators(move)
        console.log('ANIMATION_TIME * minDiff 1', ANIMATION_TIME * minDiff)
        setTimeout(() => {
            setMovingElevators(prevState => {
                return prevState.map((elevator, index) => {
                    if (index === indexMinDiff) {
                        return {...elevator, action: 'available' as ElevatorAction};
                    }
                    return elevator
                })
            })
        }, ANIMATION_TIME * minDiff)
    }

    useEffect(() => {
        const initialElevators: MovingElevators = Array.from({length: buildingStore.elevators}, () => {
            return {action: 'available' as ElevatorAction, floor: 1};
        });
        setMovingElevators(initialElevators)
    }, [buildingStore.elevators])

    return (
        <>
            <Construction buildingStore={buildingStore} movingElevators={movingElevators}/>
            <Controls buildingStore={buildingStore} setElevatorFloor={setElevatorFloor}/>
            <Constructor buildingStore={buildingStore} setBuildingStore={setBuildingStore}/>
        </>
    )
}

export default App
