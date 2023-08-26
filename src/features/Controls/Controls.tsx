import {ControlButton} from "../../components/ui";
import {Props} from "../../hooks";

type ControlsProps = {
    buildingStore: Props,
    setElevatorFloor: Function
}

export const Controls = ({buildingStore, setElevatorFloor}: ControlsProps) => {

    return (
        <section>
            <p style={{marginBottom: "5px"}}>select the floor you need</p>
            <div style={{marginBottom: "10px", display: "flex", justifyContent: "center", flexFlow: "wrap row", gap: "5px"}}>
                {
                    Array.from({length: buildingStore.floors}, (_, index) => (
                        <ControlButton onClick={() => setElevatorFloor(index+1)} key={index} text={index + 1}/>
                    ))
                }
            </div>
        </section>
    );
};