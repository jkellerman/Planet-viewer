export const COLORS = {
  primary: "#FFFFFF",
  secondary: "#838391",
  background: "#070724",
  hoverTab: "#38384F",
  mercury: "#419EBB",
  venus: "#EDA249",
  earth: "#6D2ED5",
  mars: "#D83A34",
  jupiter: "#D86534",
  saturn: "#B87D43",
  uranus: "#1EC1A2",
  neptune: "#2D68F0",
};

// FONTS

export const FONTFAMILY = {
  antonio: "Antonio",
  spartan: "League Spartan",
};

export const FONTWEIGHT = {
  regular: 400,
  bold: 700,
};

// THEMES FOR TABS

export const THEME = [
  { name: "mercury", color: `${COLORS.mercury}` },
  { name: "venus", color: `${COLORS.venus}` },
  { name: "earth", color: `${COLORS.earth}` },
  { name: "mars", color: `${COLORS.mars}` },
  { name: "jupiter", color: `${COLORS.jupiter}` },
  { name: "saturn", color: `${COLORS.saturn}` },
  { name: "uranus", color: `${COLORS.uranus}` },
  { name: "neptune", color: `${COLORS.neptune}` },
];

// NAVIGATION

export const LINKS = [
  { name: "mercury", id: 1 },
  { name: "venus", id: 2 },
  { name: "earth", id: 3 },
  { name: "mars", id: 4 },
  { name: "jupiter", id: 5 },
  { name: "saturn", id: 6 },
  { name: "uranus", id: 7 },
  { name: "neptune", id: 8 },
];

// MEDIA QUERIES

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

// PLANET MODEL SIZES

export const MODELSIZES = [
  { name: "mercury", size: "220px" },
  { name: "venus", size: "320px" },
  { name: "earth", size: "370px" },
  { name: "mars", size: "270px" },
  { name: "jupiter", size: "582px" },
  { name: "saturn", size: "560px" },
  { name: "uranus", size: `458px` },
  { name: "neptune", size: `450px` },
];
