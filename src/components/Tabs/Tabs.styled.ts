import styled from "styled-components";
import { h3Styles } from "../../styles/typography";
import { center, border, borderBottom } from "../../styles/snippets";
import { QUERIES } from "../../styles/mediaQueries";
import { Theme } from "../../styles/theme";

interface TabsProps {
  $activeTab: string;
  planetTheme: string;
}

export const TabsContainer = styled.div`
  min-width: 100vw;
  ${borderBottom};

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

export const TabList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ${center}
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

export const Tab = styled.button<TabsProps>`
  ${h3Styles}
  color: ${Theme.colors.secondary};
  background-color: transparent;
  border: none;
  padding: 1.25rem 0 1rem;
  white-space: nowrap;
  cursor: pointer;
  border-bottom: 4px solid transparent;

  &:nth-child(1) {
    border-bottom-color: ${({ $activeTab, planetTheme }) => {
      if ($activeTab === "overview") return `${planetTheme}`;
    }};
    color: ${({ $activeTab }) => {
      if ($activeTab === "overview") return `${Theme.colors.primary}`;
    }};
  }

  &:nth-child(2) {
    border-bottom-color: ${({ $activeTab, planetTheme }) => {
      if ($activeTab === "structure") return `${planetTheme}`;
    }};
    color: ${({ $activeTab }) => {
      if ($activeTab === "structure") return `${Theme.colors.primary}`;
    }};
  }

  &:nth-child(3) {
    border-bottom-color: ${({ $activeTab, planetTheme }) => {
      if ($activeTab === "surface") return `${planetTheme}`;
    }};
    color: ${({ $activeTab }) => {
      if ($activeTab === "surface") return `${Theme.colors.primary}`;
    }};
  }

  @media (${QUERIES.tablet}) {
    ${border}
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0.75rem 1.25rem;
    max-width: 281px;
    width: 100%;
    color: ${Theme.colors.primary};
    transition: all 200ms ease-in-out;

    &:nth-child(1) {
      border-color: ${({ $activeTab, planetTheme }) => {
        if ($activeTab === "overview") return `${planetTheme}`;
      }};
      background: ${({ $activeTab, planetTheme }) => {
        if ($activeTab === "overview") return `${planetTheme}`;
      }};
    }

    &:nth-child(2) {
      border-color: ${({ $activeTab, planetTheme }) => {
        if ($activeTab === "structure") return `${planetTheme}`;
      }};
      background: ${({ $activeTab, planetTheme }) => {
        if ($activeTab === "structure") return `${planetTheme}`;
      }};
    }

    &:nth-child(3) {
      border-color: ${({ $activeTab, planetTheme }) => {
        if ($activeTab === "surface") return `${planetTheme}`;
      }};
      background: ${({ $activeTab, planetTheme }) => {
        if ($activeTab === "surface") return `${planetTheme}`;
      }};
    }

    @media (hover: hover) {
      &:hover {
        background: ${Theme.colors.paynesGrey};
        border-color: ${Theme.colors.paynesGrey};
      }
    }
  }

  @media (${QUERIES.laptop}) {
    max-width: unset;
  }
`;

export const Num = styled.span`
  display: none;

  @media (${QUERIES.tablet}) {
    display: inline;
    color: ${Theme.colors.secondary};
    margin-right: 12px;
  }
`;

export const ExtraText = styled.span`
  display: none;
  @media (${QUERIES.tablet}) {
    display: inline;
  }
`;
