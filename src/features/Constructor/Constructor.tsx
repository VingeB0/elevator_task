import {useForm, SubmitHandler} from "react-hook-form";
import {Props} from "../../hooks";

type FormTypes = {
    elevators: number
    floors: number
}

export const Constructor = ({setBuildingStore, buildingStore}: {
    setBuildingStore: Function,
    buildingStore: Props
}) => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormTypes>();
    const onSubmit: SubmitHandler<FormTypes> = (data) => {
        setBuildingStore(data)
    };

    const disabled = !!errors.elevators || !!errors.floors

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{display: "flex", gap: "5px", alignItems: "center", justifyContent: "center"}}>
                    <label>
                        Elevators:
                        <input
                            defaultValue={buildingStore.elevators}
                            type="number"
                            {...register("elevators", {
                                required: true,
                            })} />
                    </label>

                    <label>
                        Floors:
                        <input defaultValue={buildingStore.floors}
                               type="number" {...register("floors", {required: true})} />
                    </label>
                    <button disabled={disabled}>rebuild</button>
                </div>
                <div>
                    {errors.elevators && <span>Elevators cannot be empty</span>}
                    {errors.floors && <span>Floors cannot be empty</span>}
                </div>
            </form>
        </section>
    );

};