import { css } from "styled-components";
import { COLORS, THEME } from "./variables";

// Utility functions
// ================

// set border

export const setupBorder = ({
  width = 1,
  type = "solid",
  color = `${COLORS.hoverTab}`,
}) => {
  return `${width}px ${type} ${color}`;
};

// set unique background color for nav underline and mobile nav bulletpoints/balls

const getBackgroundColor = (i, colorsIndex) => {
  return `
    &:nth-child(${i + 1}n)::before{
      background: ${THEME[colorsIndex++].color};
    }
  `;
};

export const calculateBackgrounds = () => {
  let str = "";
  let colorsIndex = -1;
  for (let index = 0; index < THEME.length; index++) {
    colorsIndex++;
    if (colorsIndex === colorsIndex.length - 1) colorsIndex = 0;
    str += getBackgroundColor(index, colorsIndex);
  }
  return str;
};

// css helper functions
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
