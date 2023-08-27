import styled from "styled-components";

export const StyledSection = styled.section``;
export const StyledForm = styled.form``;
export const StyledLabel = styled.label``;
export const StyledInput = styled.input`
  padding: 0.4em;
  border-radius: 0.5rem;
  margin-left: 0.5rem;
  border: transparent;
  font-size: 1em;
  font-weight: bold;
`;
export const StyledInputsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 0.4em 1.03em;
  border-radius: 0.5rem;
  border: 1px solid var(--color-white);
  background-color: var(--color-primary);
  font-size: 1em;
  font-weight: 500;
  color: var(--color-white);
  transition: border-color 0.3s linear;

  &:hover {
    border-color: var(--color-secondary);
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
export const StyledErrorsWrapper = styled.div``;
export const StyledError = styled.span`
  font-size: 0.75rem;
  color: var(--color-error);
`;
