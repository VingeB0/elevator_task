import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 0.6em 1.03em;
  width: 3rem;
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
