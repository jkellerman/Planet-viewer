import styled from "styled-components";
import { COLORS, FONTWEIGHT } from "../utils/variables";
import { centerDiv, setupBorder } from "../utils/helpers";
import { QUERIES } from "../utils/variables";

const Tabs = () => {
  return (
    <TabsContainer>
      <TabList>
        <Tab type="button">
          <Num>01&nbsp;</Num>
          overview
        </Tab>
        <Tab type="button">
          <Num>02&nbsp;</Num>
          <ExtraText>internal&nbsp;</ExtraText>structure
        </Tab>
        <Tab type="button">
          <Num>03&nbsp;</Num>
          surface <ExtraText>&nbsp;geology (3d viewer)</ExtraText>
        </Tab>
      </TabList>
    </TabsContainer>
  );
};

const TabsContainer = styled.div`
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
    transform: translateY(-8.5rem);
    max-width: 350px;
  }
`;

const TabList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ${centerDiv}
  gap: 3rem;

  @media (${QUERIES.mobileS}) {
    gap: 1.5rem;
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

const Tab = styled.button`
  color: ${COLORS.secondary};
  text-transform: uppercase;
  font-size: 0.5625rem;
  font-weight: ${FONTWEIGHT.bold};
  letter-spacing: 1.93px;
  background-color: transparent;
  border: none;
  padding: 1.25rem 0 1rem;
  border-bottom: ${setupBorder({ width: 4, color: "transparent" })};
  white-space: nowrap;

  @media (${QUERIES.tablet}) {
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0.75rem 1.25rem;
    max-width: 281px;
    width: 100%;
    border: ${setupBorder({})};
    color: ${COLORS.primary};
  }

  @media (${QUERIES.laptop}) {
    max-width: unset;
    font-size: 0.75rem;
  }
`;

const Num = styled.span`
  display: none;

  @media (${QUERIES.tablet}) {
    display: inline;
    color: ${COLORS.secondary};
    margin-right: 12px;
  }
`;

const ExtraText = styled.span`
  display: none;
  @media (${QUERIES.tablet}) {
    display: inline;
  }
`;

export default Tabs;
