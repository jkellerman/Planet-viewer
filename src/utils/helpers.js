import { css } from "styled-components";

export const setupBorder = ({ width, type = "solid", color }) => {
  return `${width}px ${type} ${color}`;
};

export const centerDiv = css`
  width: "87.5%";
  margin: "0 auto";
`;

export const flexRowSpaceBetween = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const flexColumnSpaceBetween = css`
  display: flex;
  flex-direction: column;
`;
