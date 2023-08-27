import styled from "styled-components";
import { buildingsSize } from "../../config/config.ts";

export const StyledSection = styled.section`
  display: inline-block;
  position: relative;
  margin: 0 0 10px -50px;
`;

export const StyledLayoutMovingElevator = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  left: ${buildingsSize.WIDTH}px;
`;
