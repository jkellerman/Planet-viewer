import { css } from "styled-components";
import { COLORS, PLANETS } from "./variables";

// Utility Functions
// ================

// set border

export const setupBorder = ({
  width = 1,
  type = "solid",
  color = `${COLORS.hoverTab}`,
}) => {
  return `${width}px ${type} ${color}`;
};

// CSS Helper Functions
// ====================

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
