import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { QUERIES } from "../../styles/mediaQueries";
import { PLANETS } from "../../data/data";
import { navTextStyles, titleStyles } from "../../styles/typography";
import { Theme } from "../../styles/theme";
import {
  flexRowSpaceBetween,
  flexColumn,
  center,
  borderBottom,
} from "../../styles/snippets";

interface Props {
  $isNavOpen: boolean;
}

const getNavTheme = (i: number) => {
  return `
      &:nth-child(${i + 1}n)::before{
        background: ${PLANETS[i].theme};
      }
    `;
};

const calculateNavTheme = () => {
  let str = "";
  for (let i = 0; i < PLANETS.length; i++) {
    str += getNavTheme(i);
  }
  return str;
};

export const Header = styled.header`
  margin: 1rem 0 0;
  ${borderBottom}
  position: relative;

  @media (${QUERIES.tablet}) {
    margin-top: 2rem;
  }

  @media (${QUERIES.laptop}) {
    margin-top: 1.375rem;
    padding-bottom: 1rem;
  }
`;

export const HeaderContainer = styled.div`
  ${center}
  ${flexRowSpaceBetween}
  margin-bottom: 1rem;

  @media (${QUERIES.tablet}) {
    display: none;
    ${flexColumn}
  }

  @media (${QUERIES.tabletL}) {
    width: 80%;
  }

  @media (${QUERIES.laptop}) {
    ${flexRowSpaceBetween}
    ${center}
  }

  @media (${QUERIES.desktop}) {
    max-width: 1336px;
  }
`;

export const $Link = styled(Link)`
  ${titleStyles}
  color: ${Theme.colors.primary};
  text-decoration: none;

  @media (${QUERIES.tablet}) {
    margin-bottom: 2.4375rem;
  }

  @media (${QUERIES.laptop}) {
    margin: 0;
  }
`;

export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transform: translateY(0.25rem);
  @media (${QUERIES.tablet}) {
    display: none;
  }
`;

export const SVG = styled.svg<Props>`
  g {
    fill: ${({ $isNavOpen }) =>
      $isNavOpen ? Theme.colors.paynesGrey : Theme.colors.primary};
  }
`;

export const Nav = styled.nav<Props>`
  position: absolute;
  z-index: 5;
  ${flexColumn}
  top: 4.5rem;
  left: 0;
  padding: 0.5rem 1.5rem;
  width: 100vw;
  height: 100vh;
  background: ${Theme.colors.background};
  display: ${({ $isNavOpen }) => ($isNavOpen ? "block" : "none")};

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
      ${borderBottom};
      position: relative;
      ${calculateNavTheme}

      /* planet circle (mobile) & underline (desktop) */

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

export const NavLinkContainer = styled.div`
  ${flexRowSpaceBetween}
  padding: 1.5rem 0;
`;

export const $NavLink = styled(NavLink)`
  ${navTextStyles}
  color: ${Theme.colors.primary};
  text-decoration: none;
  margin-left: 2.75rem;
  position: relative;

  @media (${QUERIES.tablet}) {
    margin-left: unset;
    opacity: 0.7;

    &:hover {
      opacity: 1;
      transition: 200ms ease-in-out;
    }
  }
`;

export const Chevron = styled.img`
  transform: translateX(-0.5rem);
  @media (${QUERIES.tablet}) {
    display: none;
  }
`;
