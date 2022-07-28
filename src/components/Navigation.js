import { useState, useEffect } from "react";
import { usePlanetFactsContext } from "../context/context";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { QUERIES, COLORS, FONTFAMILY, FONTWEIGHT } from "../utils/variables";
import {
  flexRowSpaceBetween,
  flexColumnSpaceBetween,
  setupBorder,
  centerDiv,
  calculateBackgrounds,
} from "../utils/helpers";

const Navigation = (props) => {
  const { setCurrentTab } = usePlanetFactsContext();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (isNavOpen) return body.classList.add("no-scroll");
    return body.classList.remove("no-scroll");
  }, [isNavOpen]);

  return (
    <Header>
      <HeaderContainer>
        <Title>planet viewer</Title>
        <NavButton type="button" onClick={() => toggleMenu()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
            <g
              fill={isNavOpen ? `${COLORS.hoverTab}` : `${COLORS.primary}`}
              fillRule="evenodd"
            >
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
          </svg>
        </NavButton>
        <Nav isNavOpen={isNavOpen}>
          <ul>
            <li>
              <StyledNavLinkContainer>
                <StyledNavLink
                  to="/planet/mercury"
                  onClick={() => {
                    setIsNavOpen(false);
                    setCurrentTab("overview");
                  }}
                >
                  mercury
                </StyledNavLink>
                <Chevron src="../assets/icon-chevron.svg" alt="chevron" />
              </StyledNavLinkContainer>
            </li>
            <li>
              <StyledNavLinkContainer>
                <StyledNavLink
                  to="/planet/venus"
                  onClick={() => {
                    setIsNavOpen(false);
                    setCurrentTab("overview");
                  }}
                >
                  venus
                </StyledNavLink>
                <Chevron src="../assets/icon-chevron.svg" alt="chevron" />
              </StyledNavLinkContainer>
            </li>
            <li>
              <StyledNavLinkContainer>
                <StyledNavLink
                  to="/"
                  onClick={() => {
                    setIsNavOpen(false);
                    setCurrentTab("overview");
                  }}
                >
                  earth
                </StyledNavLink>
                <Chevron src="../assets/icon-chevron.svg" alt="chevron" />
              </StyledNavLinkContainer>
            </li>
            <li>
              <StyledNavLinkContainer>
                <StyledNavLink
                  to="/planet/mars"
                  onClick={() => {
                    setIsNavOpen(false);
                    setCurrentTab("overview");
                  }}
                >
                  mars
                </StyledNavLink>
                <Chevron src="../assets/icon-chevron.svg" alt="chevron" />
              </StyledNavLinkContainer>
            </li>
            <li>
              <StyledNavLinkContainer>
                <StyledNavLink
                  to="/planet/jupiter"
                  onClick={() => {
                    setIsNavOpen(false);
                    setCurrentTab("overview");
                  }}
                >
                  jupiter
                </StyledNavLink>
                <Chevron src="../assets/icon-chevron.svg" alt="chevron" />
              </StyledNavLinkContainer>
            </li>
            <li>
              <StyledNavLinkContainer>
                <StyledNavLink
                  to="/planet/saturn"
                  onClick={() => {
                    setIsNavOpen(false);
                    setCurrentTab("overview");
                  }}
                >
                  saturn
                </StyledNavLink>
                <Chevron src="../assets/icon-chevron.svg" alt="chevron" />
              </StyledNavLinkContainer>
            </li>
            <li>
              <StyledNavLinkContainer>
                <StyledNavLink
                  to="/planet/uranus"
                  onClick={() => {
                    setIsNavOpen(false);
                    setCurrentTab("overview");
                  }}
                >
                  uranus
                </StyledNavLink>
                <Chevron src="../assets/icon-chevron.svg" alt="chevron" />
              </StyledNavLinkContainer>
            </li>
            <li>
              <StyledNavLinkContainer>
                <StyledNavLink
                  to="/planet/neptune"
                  onClick={() => {
                    setIsNavOpen(false);
                    setCurrentTab("overview");
                  }}
                >
                  neptune
                </StyledNavLink>
                <Chevron src="../assets/icon-chevron.svg" alt="chevron" />
              </StyledNavLinkContainer>
            </li>
          </ul>
        </Nav>
      </HeaderContainer>
    </Header>
  );
};

const Header = styled.header`
  margin: 1rem 0 0;
  border-bottom: ${setupBorder({})};
  position: relative;

  @media (${QUERIES.tablet}) {
    margin-top: 2rem;
  }

  @media (${QUERIES.laptop}) {
    margin-top: 1.375rem;
  }
`;

const HeaderContainer = styled.div`
  ${centerDiv}
  ${flexRowSpaceBetween}
  margin-bottom: 1rem;

  @media (${QUERIES.tablet}) {
    display: none;
    ${flexColumnSpaceBetween}
  }

  @media (${QUERIES.laptop}) {
    ${flexRowSpaceBetween}
  }

  @media (${QUERIES.desktop}) {
    max-width: 1336px;
  }
`;

const Title = styled.div`
  font-size: 1.75rem;
  text-transform: uppercase;
  letter-spacing: -1.05px;
  font-family: ${FONTFAMILY.antonio}, -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;

  @media (${QUERIES.tablet}) {
    margin-bottom: 2.4375rem;
  }

  @media (${QUERIES.laptop}) {
    margin: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transform: translateY(0.25rem);
  @media (${QUERIES.tablet}) {
    display: none;
  }
`;

const Nav = styled.nav`
  position: absolute;
  z-index: 5;
  ${flexColumnSpaceBetween}
  top: 4.5rem;
  left: 0;
  padding: 0.5rem 1.5rem;
  width: 100vw;
  height: 100vh;
  background: ${COLORS.background};
  display: ${({ isNavOpen }) => (isNavOpen ? "block" : "none")};

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
      cursor: pointer;

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

      ${calculateBackgrounds}

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

const Chevron = styled.img`
  transform: translateX(-0.5rem);
  @media (${QUERIES.tablet}) {
    display: none;
  }
`;

export default Navigation;
