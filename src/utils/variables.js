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

// PLANET ID, THEME & SIZES

export const PLANETS = [
  { name: "mercury", id: 1, theme: `${COLORS.mercury}`, size: "290px" },
  { name: "venus", id: 2, theme: `${COLORS.venus}`, size: "400px" },
  { name: "earth", id: 3, theme: `${COLORS.earth}`, size: "450px" },
  { name: "mars", id: 4, theme: `${COLORS.mars}`, size: "336px" },
  { name: "jupiter", id: 5, theme: `${COLORS.jupiter}`, size: "582px" },
  { name: "saturn", id: 6, theme: `${COLORS.saturn}`, size: "600px" },
  { name: "uranus", id: 7, theme: `${COLORS.uranus}`, size: "458px" },
  { name: "neptune", id: 8, theme: `${COLORS.neptune}`, size: "455px" },
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
