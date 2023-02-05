import React from "react";
import { useActiveTab } from "../../contexts/activeTab";
import { useParams } from "react-router-dom";
import { PLANETS } from "../../data/data";

import * as S from "./Planet.styled";

const Planet: React.FC = () => {
  const { activeTab } = useActiveTab();
  const { planetName } = useParams();
  const planet = PLANETS.find((planet) => planet.name === planetName);

  return (
    <S.PlanetContainer>
      <S.ModelContainer
        size={planet?.size as string}
        initial={{
          x: "5vw",
          opacity: 0,
        }}
        animate={{
          x: "0",
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 120,
          },
          opacity: 1,
        }}
        exit={{ x: "-5vw", opacity: 0, transition: { ease: "backOut" } }}
      >
        {activeTab !== "surface" && (
          <img
            src={
              activeTab === "overview"
                ? `${planet?.images.overview}`
                : `${planet?.images.structure}`
            }
            alt={planetName}
            style={{ width: "100%", height: "100%", color: "transparent" }}
          />
        )}
        {activeTab === "surface" && (
          // @ts-expect-error
          <model-viewer
            id="reveal"
            style={{ width: "100%", height: "100%" }}
            alt={`A 3D model of the planet ${planetName}`}
            src={planet?.models.model}
            camera-controls
            auto-rotate
            ar
            ar-modes="webxr scene-viewer quick-look"
            environment-image="neutral"
            ar-placement="wall"
            ios-src={planet?.models.ios}
            poster={planet?.models.poster}
            loading="eager"
          />
        )}
      </S.ModelContainer>
    </S.PlanetContainer>
  );
};

export default Planet;
