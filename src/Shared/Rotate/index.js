import styled, { keyframes } from "styled-components";
import { Flex } from "../Flex";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled(Flex)`
  animation: ${rotate} 2s linear infinite;
`;
