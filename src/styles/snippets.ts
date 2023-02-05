import { css } from "styled-components";
import { Theme } from "./theme";

export const border = css`
  border: 1px solid ${Theme.colors.paynesGrey};
`;

export const borderBottom = css`
  border-bottom: 1px solid ${Theme.colors.paynesGrey};
`;

export const center = css`
  width: 90%;
  margin: 0 auto;
`;

export const flexRowSpaceBetween = css`
  // TODO: remove flex-direction and then make adjustments
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;
