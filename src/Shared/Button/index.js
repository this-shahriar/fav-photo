import styled from "styled-components";
import { colors } from "../../Theme/colors";

const buttonTypes = {
  secondary: "gray",
  warning: "yellow",
  ghost: "transparent",
  error: colors.secondary,
  primary: colors.accent2,
};

export const Button = styled.button`
  color: #fff;
  border: none;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  letter-spacing: 1px;
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
  text-transform: uppercase;
  position: ${({ pos }) => pos};
  font-family: "Cairo", sans-serif;
  border-radius: ${({ br }) => br};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  right: ${({ alignRight }) => (alignRight ? 0 : "")};
  background-color: ${({ type, disabled }) =>
    disabled ? "gray" : buttonTypes[type]};
  width: ${({ width, full }) => (full ? "100%" : width)};

  &:hover {
    transform: scale(${({ hoverScale }) => hoverScale});
    transition: all linear 0.1s;
  }

  &:active {
    opacity: 70%;
  }
`;

Button.defaultProps = {
  p: 0,
  m: 0,
  pos: "",
  br: "6px",
  width: "auto",
  height: "auto",
  type: "primary",
  hoverScale: 1.03,
  fontSize: "0.6rem",
};
