import styled from "styled-components";
import { h2Styles, h4Styles } from "../../styles/typography";
import {
  flexRowSpaceBetween,
  flexColumn,
  center,
  border,
} from "../../styles/snippets";
import { QUERIES } from "../../styles/mediaQueries";
import { Theme } from "../../styles/theme";
import { motion } from "framer-motion";

export const List = styled.dl`
  ${center}
  ${flexColumn}
  gap: .5rem;
  margin-bottom: 3rem;

  @media (${QUERIES.mobileL}) {
    width: 80%;
  }

  @media (${QUERIES.tablet}) {
    ${flexRowSpaceBetween}
    width: 90%;
    gap: 0;
  }
  @media (${QUERIES.tabletL}) {
    width: 80%;
  }

  @media (${QUERIES.laptop}) {
    width: 90%;
    max-width: 1110px;
    transform: translateX(-0.55rem);
  }
`;

export const ListContainer = styled.div`
  ${flexRowSpaceBetween}
  ${border}
  padding: 1rem 1.5rem;

  @media (${QUERIES.tablet}) {
    ${flexColumn}
    padding: 1rem 1rem;
    align-items: flex-start;
    min-width: 24%;
  }
`;

export const Title = styled.dt`
  @media (${QUERIES.mobileS}) {
    font-size: 0.675rem;
  } // TODO: check to see if needed

  ${h4Styles}
  color: ${Theme.colors.primary};

  @media (${QUERIES.laptop}) {
    margin-bottom: 0.875rem;
  }
`;
export const Data = styled(motion.dd)`
  ${h2Styles}
`;
