import { useActiveTab } from "../../contexts/activeTab";
import { useParams } from "react-router-dom";
import { PLANETS } from "../../data/data";
import { motion } from "framer-motion";

import * as S from "./PlanetDescription.styled";

const PlanetDescription = () => {
  const { activeTab } = useActiveTab();
  const { planetName } = useParams();
  const planet = PLANETS.find((planet) => planet.name === planetName);

  return (
    <S.PlanetDescriptionContainer>
      <S.Name
        initial={{ y: "5vw", opacity: 0 } as any}
        animate={
          {
            y: "0",
            opacity: 1,
            transition: { delay: 1 },
            type: "spring",
            stiffness: 500,
          } as any
        }
        exit={{ opacity: 0 }}
      >
        {planetName}
      </S.Name>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
        exit={{ opacity: 0 }}
      >
        <S.Paragraph>
          {activeTab === "overview"
            ? planet?.overview.content
            : activeTab === "structure"
            ? planet?.structure.content
            : planet?.geology.content}
        </S.Paragraph>
        {/* TODO: add styles and add body typography */}
        <S.Source>
          <S.SourceHeading>source :&nbsp;</S.SourceHeading>
          <S.WikiLink
            href={
              activeTab === "overview"
                ? planet?.overview.source
                : activeTab === "structure"
                ? planet?.structure.source
                : planet?.geology.source
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            wikipedia
          </S.WikiLink>
          <S.SVG xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" />
          </S.SVG>
        </S.Source>
      </motion.div>
    </S.PlanetDescriptionContainer>
  );
};

export default PlanetDescription;
