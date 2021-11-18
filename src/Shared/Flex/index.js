import styled from "styled-components";
import { colors } from "../../Theme/colors";

export const Flex = styled.div`
  display: flex;
  position: ${({ pos }) => pos};
  border-radius: ${({ br }) => br};
  border: ${({ border }) => border};
  overflow: ${({ overflow }) => overflow};
  margin: ${({ m }) => (m.lg ? m.lg : m)};
  padding: ${({ p }) => (p.lg ? p.lg : p)};
  box-shadow: ${({ boxShadow }) => boxShadow};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "")};
  width: ${({ width }) => (width.lg ? width.lg : width)};
  height: ${({ height }) => (height.lg ? height.lg : height)};
  align-items: ${({ align }) => (align.lg ? align.lg : align)};
  background-color: ${({ bg }) => (colors[bg] ? colors[bg] : bg)};
  justify-content: ${({ justify }) => (justify.lg ? justify.lg : justify)};
  flex-direction: ${({ direction }) =>
    direction.lg ? direction.lg : direction};

  @media (max-width: 580px) {
    margin: ${({ m }) => (m.sm ? m.sm : m)};
    padding: ${({ p }) => (p.sm ? p.sm : p)};
    width: ${({ width }) => (width.sm ? width.sm : width)};
    height: ${({ height }) => (height.sm ? height.sm : height)};
    align-items: ${({ align }) => (align.sm ? align.sm : align)};
    justify-content: ${({ justify }) => (justify.sm ? justify.sm : justify)};
    flex-direction: ${({ direction }) =>
      direction.sm ? direction.sm : direction};
  }

  @media (max-width: 960px) {
    margin: ${({ m }) => (m.md ? m.md : m)};
    padding: ${({ p }) => (p.md ? p.md : p)};
    width: ${({ width }) => (width.md ? width.md : width)};
    height: ${({ height }) => (height.md ? height.md : height)};
    align-items: ${({ align }) => (align.md ? align.md : align)};
    justify-content: ${({ justify }) => (justify.md ? justify.md : justify)};
    flex-direction: ${({ direction }) =>
      direction.md ? direction.md : direction};
  }
`;

Flex.defaultProps = {
  p: 0,
  m: 0,
  br: 0,
  pos: "",
  width: "auto",
  height: "auto",
  delBtnId: "-1",
  border: "none",
  overflow: "auto",
  direction: "row",
  boxShadow: "none",
  align: "flex-start",
  justify: "flex-start",
};
