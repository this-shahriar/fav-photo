import styled from "styled-components";

export const Image = styled.img`
  border: 0;
  overflow: hidden;
  object-fit: cover;
  padding: ${({ p }) => (p ? p : 0)};
  src: ${({ src }) => (src ? src : "")};
  border-radius: ${({ br }) => (br ? br : 0)};
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")};
`;
