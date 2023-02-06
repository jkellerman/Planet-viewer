import { useActiveTab } from "../../contexts/activeTab";
import { useParams } from "react-router-dom";
import { PLANETS } from "../../data/data";

import * as S from "./Tabs.styled";

const Tabs: React.FC = () => {
  const { setActiveTab, activeTab } = useActiveTab();
  const { planetName } = useParams();
  const planet = PLANETS.find((planet) => planet.name === planetName);

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <S.TabsContainer>
      <S.TabList>
        <S.Tab
          planetTheme={planet?.theme as string}
          $activeTab={activeTab}
          type="button"
          onClick={() => handleActiveTab("overview")}
        >
          <S.Num>01&nbsp;</S.Num>
          overview
        </S.Tab>
        <S.Tab
          planetTheme={planet?.theme as string}
          $activeTab={activeTab}
          type="button"
          onClick={() => handleActiveTab("structure")}
        >
          <S.Num>02&nbsp;</S.Num>
          <S.ExtraText>internal&nbsp;</S.ExtraText>structure
        </S.Tab>
        <S.Tab
          planetTheme={planet?.theme as string}
          $activeTab={activeTab}
          type="button"
          onClick={() => handleActiveTab("surface")}
        >
          <S.Num>03&nbsp;</S.Num>
          surface<S.ExtraText>&nbsp;geology (3D)</S.ExtraText>
        </S.Tab>
      </S.TabList>
    </S.TabsContainer>
  );
};

export default Tabs;
