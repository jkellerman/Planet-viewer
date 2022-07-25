import styled from "styled-components";
import { COLORS, FONTWEIGHT } from "../utils/variables";
import { setupBorder } from "../utils/helpers";

const Tabs = () => {
  return (
    <TabsContainer>
      <TabList>
        <Tab type="button">
          <span>01&nbsp;</span>
          overview
        </Tab>
        <Tab type="button">
          <span>02&nbsp;</span>
          structure
        </Tab>
        <Tab type="button">
          <span>03&nbsp;</span>
          surface (3d)
        </Tab>
      </TabList>
    </TabsContainer>
  );
};

const TabsContainer = styled.div`
  min-width: 100vw;
  border-bottom: ${setupBorder};
`;

const TabList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
  transform: translateX(0.75rem);

  span {
    display: none;
  }
`;

export default Tabs;
