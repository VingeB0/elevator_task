import { useForm, SubmitHandler } from "react-hook-form";
import { BuildingProps } from "../../hooks";
import {
  StyledButton,
  StyledError,
  StyledErrorsWrapper,
  StyledForm,
  StyledInput,
  StyledInputsWrapper,
  StyledLabel,
  StyledSection,
} from "./styled";

type FormTypes = {
  elevators: number;
  floors: number;
};

export const Constructor = ({
  setBuildingStore,
  buildingStore,
}: {
  setBuildingStore: Function;
  buildingStore: BuildingProps;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>();
  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    setBuildingStore(data);
  };

  const disabled = !!errors.elevators || !!errors.floors;

  return (
    <StyledSection>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputsWrapper>
          <StyledLabel>
            Elevators:
            <StyledInput
              defaultValue={buildingStore.elevators}
              type="number"
              {...register("elevators", {
                required: true,
                min: 2,
              })}
            />
          </StyledLabel>

          <StyledLabel>
            Floors:
            <StyledInput
              defaultValue={buildingStore.floors}
              type="number"
              {...register("floors", {
                required: true,
                min: 2,
              })}
            />
          </StyledLabel>
          <StyledButton disabled={disabled}>rebuild</StyledButton>
        </StyledInputsWrapper>
        <StyledErrorsWrapper>
          {errors.elevators && (
            <StyledError>Elevators cannot be empty or less than 2</StyledError>
          )}
          {errors.floors && (
            <StyledError>Floors cannot be empty or less than 2</StyledError>
          )}
        </StyledErrorsWrapper>
      </StyledForm>
    </StyledSection>
  );
};
