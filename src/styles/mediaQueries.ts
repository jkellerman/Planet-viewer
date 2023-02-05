const BREAKPOINTS = {
  mobileS: "20em",
  mobileL: "30em",
  tablet: "48em",
  tabletL: "64em",
  laptop: "75em",
  desktop: "90em",
};

export const QUERIES = {
  mobileS: `max-width: ${BREAKPOINTS.mobileS}`,
  mobileL: `min-width: ${BREAKPOINTS.mobileL}`,
  tablet: `min-width: ${BREAKPOINTS.tablet}`,
  tabletL: `min-width: ${BREAKPOINTS.tabletL}`,
  laptop: `min-width: ${BREAKPOINTS.laptop}`,
  desktop: `min-width: ${BREAKPOINTS.desktop}`,
};
