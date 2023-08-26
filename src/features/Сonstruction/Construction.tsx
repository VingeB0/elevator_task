import {Props, useBuild} from "../../hooks";
import {Elevator} from "../../components";
import {useEffect, useMemo, useRef} from "react";
import {MovingElevators} from "../../App.tsx";

type ConstructionProps = {
    buildingStore: Props
    movingElevators: MovingElevators
}

export const Construction = ({buildingStore, movingElevators}: ConstructionProps) => {
    const Building = useBuild(buildingStore);
    const prevMovingElevator = useRef<any>()
    console.log('movingElevators', movingElevators)

    const buildMovingElevators = useMemo(() => {
        return movingElevators.map((item, index) => {
            const diff = Math.abs(prevMovingElevator.current[index]?.floor - item.floor);
            return <Elevator key={index} text={index + 1} moveTo={item.floor} time={diff || 0} />
        })
    }, [movingElevators]);

    useEffect(() => {
        prevMovingElevator.current = movingElevators;
    });

    return (
        <section style={{margin: "0 0 10px -50px", position: "relative", display: "inline-block"}}>
            {Building}
            <div style={{
                position: "absolute",
                bottom: 0,
                left: "50px",
                display: "flex",
            }}>
                {buildMovingElevators}
            </div>
        </section>
    );
};