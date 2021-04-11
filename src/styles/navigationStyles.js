import styled from "styled-components";
import { motion } from "framer-motion";

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      height: 96px;
      line-height: 96px;
      overflow: hidden;
      a {
        color: ${(props) => props.theme.text};
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
