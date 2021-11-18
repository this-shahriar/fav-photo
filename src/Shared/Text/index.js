import styled from "styled-components";
import { colors } from "../../Theme/colors";

export const Text = styled.p`
  margin: ${({ m }) => m};
  text-align: ${({ align }) => align};
  padding: ${({ p }) => (p.lg ? p.lg : p)};
  letter-spacing: ${({ lSpacing }) => lSpacing};
  font-size: ${({ size }) => (size.lg ? size.lg : size)};
  font-weight: ${({ weight }) => (weight.lg ? weight.lg : weight)};
  color: ${({ color }) => (colors[color] ? colors[color] : color)};

  @media (max-width: 580px) {
    padding: ${({ p }) => (p.sm ? p.sm : p)};
    font-size: ${({ size }) => (size.sm ? size.sm : size)};
    font-weight: ${({ weight }) => (weight.sm ? weight.sm : weight)};
  }

  @media (max-width: 960px) {
    padding: ${({ p }) => (p.md ? p.md : p)};
    font-size: ${({ size }) => (size.md ? size.md : size)};
    font-weight: ${({ weight }) => (weight.md ? weight.md : weight)};
  }
`;

Text.defaultProps = {
  m: 0,
  p: 0,
  lSpacing: 0,
  size: "1rem",
  align: "start",
  weight: "normal",
  color: colors["text"],
};
