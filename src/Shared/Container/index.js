import styled from "styled-components";
import { Flex } from "../Flex";

export const Container = styled(Flex)`
  width: 100vw;
  margin: auto;
  height: 100vh;

  @media screen and (max-width: 960px) {
    height: 100%;
  }
`;
