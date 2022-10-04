import { useState, useEffect } from "react";
import { usePlanetFactsContext } from "../context/context";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
  QUERIES,
  COLORS,
  FONTFAMILY,
  FONTWEIGHT,
  PLANETS,
} from "../utils/variables";
import {
  flexRowSpaceBetween,
  flexColumnSpaceBetween,
  setupBorder,
  centerDiv,
  calculateBackgrounds,
} from "../utils/helpers";

const Navigation = () => {
  const location = useLocation();
  const { setCurrentTab } = usePlanetFactsContext();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      // When route switches, delay changing current tab state to overview so images/models of planets don't clash when transitioning.
      setCurrentTab("overview");
    }, 500);
  }, [location, setCurrentTab]);

  useEffect(() => {
    // Prevent user from scrolling when mobile navigation is open
    const body = document.querySelector("body");
    if (isNavOpen) return body.classList.add("no-scroll");
    return body.classList.remove("no-scroll");
  }, [isNavOpen]);

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledLink
          to="/planet/mercury"
          onClick={() => {
            setIsNavOpen(false);
          }}
        >
          planet viewer
        </StyledLink>
        <StyledNavButton
          aria-label="open menu"
          type="button"
          onClick={() => toggleMenu()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
            <g
              fill={isNavOpen ? `${COLORS.hoverTab}` : `${COLORS.primary}`}
              fillRule="evenodd"
            >
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
          </svg>
        </StyledNavButton>
        <StyledNav isnavopen={isNavOpen.toString()}>
          <motion.ul variants={navVariants} animate={isNavOpen && "visible"}>
            {PLANETS.map((link) => {
              const { id, name } = link;
              return (
                <motion.li variants={item} key={id}>
                  <StyledNavLinkContainer>
                    <StyledNavLink
                      to={`/planet/${name}`}
                      onClick={() => {
                        setIsNavOpen(false);
                      }}
                    >
                      {name}
                    </StyledNavLink>
                    <StyledChevron
                      src="../assets/icon-chevron.svg"
                      alt="chevron"
                    />
                  </StyledNavLinkContainer>
                </motion.li>
              );
            })}
          </motion.ul>
        </StyledNav>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  margin: 1rem 0 0;
  border-bottom: ${setupBorder({})};
  position: relative;

  @media (${QUERIES.tablet}) {
    margin-top: 2rem;
  }

  @media (${QUERIES.laptop}) {
    margin-top: 1.375rem;
    padding-bottom: 1rem;
  }
`;

const StyledHeaderContainer = styled.div`
  ${centerDiv}
  ${flexRowSpaceBetween}
  margin-bottom: 1rem;

  @media (${QUERIES.tablet}) {
    display: none;
    ${flexColumnSpaceBetween}
  }

  @media (${QUERIES.tabletL}) {
    width: 80%;
  }

  @media (${QUERIES.laptop}) {
    ${flexRowSpaceBetween}
    ${centerDiv}
  }

  @media (${QUERIES.desktop}) {
    max-width: 1336px;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.75rem;
  text-transform: uppercase;
  letter-spacing: -1.05px;
  font-family: ${FONTFAMILY.antonio}, -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  color: ${COLORS.primary};
  text-decoration: none;

  @media (${QUERIES.tablet}) {
    margin-bottom: 2.4375rem;
  }

  @media (${QUERIES.laptop}) {
    margin: 0;
  }
`;

const StyledNavButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transform: translateY(0.25rem);
  @media (${QUERIES.tablet}) {
    display: none;
  }
`;

const StyledNav = styled.nav`
  position: absolute;
  z-index: 5;
  ${flexColumnSpaceBetween}
  top: 4.5rem;
  left: 0;
  padding: 0.5rem 1.5rem;
  width: 100vw;
  height: 100vh;
  background: ${COLORS.background};
  display: ${({ isnavopen }) => (isnavopen === "false" ? "none" : "block")};

  @media (${QUERIES.tablet}) {
    display: block;
    position: unset;
    top: unset;
    z-index: unset;
    background: unset;
    width: 100%;
    height: unset;
    padding: unset;
  }

  @media (${QUERIES.laptop}) {
    width: unset;
  }

  ul {
    @media (${QUERIES.tablet}) {
      ${flexRowSpaceBetween}
    }

    @media (${QUERIES.laptop}) {
      gap: 2.0625rem;
    }
    li {
      list-style: none;
      border-bottom: ${setupBorder({ width: 0.5 })};
      position: relative;
      ${calculateBackgrounds}

      &::before {
        content: "";
        position: absolute;
        top: 1.25rem;
        width: 20px;
        height: 20px;
        border-radius: 50%;

        @media (${QUERIES.tablet}) {
          display: none;
        }

        @media (${QUERIES.laptop}) {
          display: block;
          top: -1.5em;
          left: unset;
          width: 100%;
          height: 4px;
          border-radius: unset;
          transition: transform 200ms ease-in-out;
          transform: scaleX(0);
        }
      }

      &:hover::before {
        transform: scaleX(1);
      }

      &:last-of-type {
        border-bottom: none;
      }
      @media (${QUERIES.tablet}) {
        border-bottom: none;
      }
    }
  }
`;

const StyledNavLinkContainer = styled.div`
  ${flexRowSpaceBetween}
  padding: 1.5rem 0;
`;

const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  color: ${COLORS.primary};
  text-decoration: none;
  font-size: 1rem;
  font-weight: ${FONTWEIGHT.bold};
  letter-spacing: 1.36px;
  margin-left: 2.75rem;
  position: relative;

  @media (${QUERIES.tablet}) {
    font-size: 0.75rem;
    margin-left: unset;
    letter-spacing: 1px;
    opacity: 0.7;

    &:hover {
      opacity: 1;
      transition: 200ms ease-in-out;
    }
  }
`;

const StyledChevron = styled.img`
  transform: translateX(-0.5rem);
  @media (${QUERIES.tablet}) {
    display: none;
  }
`;

// Animations

export const navVariants = {
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

export default Navigation;
