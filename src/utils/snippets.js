import { css } from "styled-components";
import { COLORS } from "./variables";

export const setupBorder = ({
  width = 1,
  type = "solid",
  color = `${COLORS.hoverTab}`,
}) => {
  return `${width}px ${type} ${color}`;
};

export const centerDiv = css`
  width: 90%;
  margin: 0 auto;
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
