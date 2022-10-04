import { usePlanetFactsContext } from "../context/context";
import { useRouter } from "next/router";
import styled, { ThemeProvider } from "styled-components";
import { COLORS, FONTWEIGHT, PLANETS, QUERIES } from "../utils/variables";
import { centerDiv, setupBorder } from "../utils/helpers";

const Tabs = () => {
  const { setCurrentTab, currentTab } = usePlanetFactsContext();
  const router = useRouter();
  const { planet } = router.query;
  const Planet = PLANETS.find((item) => item.name === planet);
  const { color } = Planet;

  return (
    <ThemeProvider theme={{ color }}>
      <StyledTabsContainer>
        <StyledTabList>
          <StyledTab
            currentTab={currentTab}
            type="button"
            onClick={() => setCurrentTab("overview")}
          >
            <StyledNum>01&nbsp;</StyledNum>
            overview
          </StyledTab>
          <StyledTab
            currentTab={currentTab}
            type="button"
            onClick={() => setCurrentTab("structure")}
          >
            <StyledNum>02&nbsp;</StyledNum>
            <StyledExtraText>internal&nbsp;</StyledExtraText>structure
          </StyledTab>
          <StyledTab
            currentTab={currentTab}
            type="button"
            onClick={() => setCurrentTab("surface")}
          >
            <StyledNum>03&nbsp;</StyledNum>
            surface<StyledExtraText>&nbsp;geology (3D)</StyledExtraText>
          </StyledTab>
        </StyledTabList>
      </StyledTabsContainer>
    </ThemeProvider>
  );
};

const StyledTabsContainer = styled.div`
  min-width: 100vw;
  border-bottom: ${setupBorder};

  @media (${QUERIES.tablet}) {
    min-width: unset;
    width: 100%;
    display: flex;
    align-items: center;
    grid-area: 2 / 2;
    border-bottom: none;
  }

  @media (${QUERIES.laptop}) {
    grid-area: 3 / 3;
    transform: translateY(-7.5rem);
    max-width: 350px;
  }
`;

const StyledTabList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ${centerDiv}
  gap: 3rem;

  @media (${QUERIES.mobileS}) {
    gap: 1.5rem;
  }

  @media (${QUERIES.mobileL}) {
    justify-content: space-between;
    width: 80%;
  }

  @media (${QUERIES.tablet}) {
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    margin: unset;
  }
`;

const StyledTab = styled.button`
  color: ${COLORS.secondary};
  text-transform: uppercase;
  font-size: 0.5625rem;
  font-weight: ${FONTWEIGHT.bold};
  letter-spacing: 1.93px;
  background-color: transparent;
  border: none;
  padding: 1.25rem 0 1rem;
  white-space: nowrap;
  cursor: pointer;
  border-bottom: ${setupBorder({ width: 4, color: "transparent" })};

  &:nth-child(1) {
    border-bottom-color: ${({ currentTab, theme }) => {
      if (currentTab === "overview") return `${theme.color}`;
    }};
    color: ${({ currentTab }) => {
      if (currentTab === "overview") return `${COLORS.primary}`;
    }};
  }

  &:nth-child(2) {
    border-bottom-color: ${({ currentTab, theme }) => {
      if (currentTab === "structure") return `${theme.color}`;
    }};
    color: ${({ currentTab }) => {
      if (currentTab === "structure") return `${COLORS.primary}`;
    }};
  }

  &:nth-child(3) {
    border-bottom-color: ${({ currentTab, theme }) => {
      if (currentTab === "surface") return `${theme.color}`;
    }};
    color: ${({ currentTab }) => {
      if (currentTab === "surface") return `${COLORS.primary}`;
    }};
  }

  @media (${QUERIES.tablet}) {
    height: 48px;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    padding: 0.75rem 1.25rem;
    max-width: 281px;
    width: 100%;
    border: ${setupBorder({})};
    color: ${COLORS.primary};
    transition: all 200ms ease-in-out;

    &:nth-child(1) {
      border-color: ${({ currentTab, theme }) => {
        if (currentTab === "overview") return `${theme.color}`;
      }};
      background: ${({ currentTab, theme }) => {
        if (currentTab === "overview") return `${theme.color}`;
      }};
    }

    &:nth-child(2) {
      border-color: ${({ currentTab, theme }) => {
        if (currentTab === "structure") return `${theme.color}`;
      }};
      background: ${({ currentTab, theme }) => {
        if (currentTab === "structure") return `${theme.color}`;
      }};
    }

    &:nth-child(3) {
      border-color: ${({ currentTab, theme }) => {
        if (currentTab === "surface") return `${theme.color}`;
      }};
      background: ${({ currentTab, theme }) => {
        if (currentTab === "surface") return `${theme.color}`;
      }};
    }

    @media (hover: hover) {
      &:hover {
        background: ${COLORS.hoverTab};
        border-color: ${COLORS.hoverTab};
      }
    }
  }

  @media (${QUERIES.laptop}) {
    max-width: unset;
  }
`;

const StyledNum = styled.span`
  display: none;

  @media (${QUERIES.tablet}) {
    display: inline;
    color: ${COLORS.secondary};
    margin-right: 12px;
  }
`;

const StyledExtraText = styled.span`
  display: none;
  @media (${QUERIES.tablet}) {
    display: inline;
  }
`;

export default Tabs;
