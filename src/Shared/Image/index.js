import styled from "styled-components";

export const Image = styled.img`
  border: 0;
  overflow: hidden;
  object-fit: cover;
  padding: ${({ p }) => (p ? p : 0)};
  src: ${({ src }) => (src ? src : "")};
  border-radius: ${({ br }) => (br ? br : 0)};
  width: ${({ width }) => (width.lg ? width.lg : width)};
  height: ${({ height }) => (height.lg ? height.lg : height)};

  @media (max-width: 580px) {
    width: ${({ width }) => (width.sm ? width.sm : width)};
    height: ${({ height }) => (height.sm ? height.sm : height)};
  }

  @media (max-width: 960px) {
    width: ${({ width }) => (width.md ? width.md : width)};
    height: ${({ height }) => (height.md ? height.md : height)};
  }
`;

Image.defaultProps = {
  width: "auto",
  height: "auto",
};
