export const COLORS = {
  primary: "#FFFFFF",
  secondary: "#838391",
  background: "#070724",
  hoverTab: "#38384F",
  mercury: "#419EBB",
  venus: "#EDA249",
  earth: "#6D2ED5",
  mars: "#D14C32",
  jupiter: "#ECAD7A",
  saturn: "#FCCB6B",
  uranus: "#1EC1A2",
  neptune: "#2D68F0",
};

const BREAKPOINTS = {
  mobileS: "20em",
  mobileM: "23.4375em",
  mobileL: "30em",
  tablet: "48em",
  tabletL: "64em",
  laptop: "75em",
  desktop: "90em",
};

export const QUERIES = {
  mobileS: `max-width: ${BREAKPOINTS.mobileS}`,
  mobileM: `min-width: ${BREAKPOINTS.mobileM}`,
  mobileL: `min-width: ${BREAKPOINTS.mobileL}`,
  tablet: `min-width: ${BREAKPOINTS.tablet}`,
  tabletL: `min-width: ${BREAKPOINTS.tabletL}`,
  laptop: `min-width: ${BREAKPOINTS.laptop}`,
  desktop: `min-width: ${BREAKPOINTS.desktop}`,
};
