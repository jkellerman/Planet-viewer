import { useState, useEffect } from "react";
import { useActiveTab } from "../../contexts/activeTab";

import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { PLANETS } from "../../data/data";

import * as S from "./Navigation.styled";

interface Props {
  $isNavOpen: boolean;
}

const Navigation: React.FC<Props> = () => {
  const location = useLocation();
  const { setActiveTab } = useActiveTab();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
    document.body.classList.toggle("no-scroll", isNavOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      // When route switches, delay changing current tab state to overview so images/models of planets don't clash during animation transition.
      setActiveTab("overview");
    }, 500);
  }, [location, setActiveTab]);

  // Framer Animations
  const navVariants = {
    visible: {
      x: ["-100vw", "0vw"],
      transition: {
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    visible: { x: ["-100vw", "0vw"] },
  };

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.$Link
          to="/planet/mercury"
          onClick={() => {
            setIsNavOpen(false);
          }}
        >
          planet viewer
        </S.$Link>
        <S.NavButton aria-label="open menu" type="button" onClick={toggleMenu}>
          <S.SVG
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="17"
            $isNavOpen={isNavOpen}
          >
            <g fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
          </S.SVG>
        </S.NavButton>
        <S.Nav $isNavOpen={isNavOpen}>
          <motion.ul variants={navVariants} animate={isNavOpen && "visible"}>
            {PLANETS.map((link) => {
              const { id, name } = link;
              return (
                <motion.li variants={item} key={id}>
                  <S.NavLinkContainer>
                    <S.$NavLink
                      to={`/planet/${name}`}
                      onClick={() => {
                        setIsNavOpen(false);
                      }}
                    >
                      {name}
                    </S.$NavLink>
                    <S.Chevron src="../assets/icon-chevron.svg" alt="chevron" />
                  </S.NavLinkContainer>
                </motion.li>
              );
            })}
          </motion.ul>
        </S.Nav>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Navigation;
