import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 48px;
  right: 0;
  left: 0;
  z-index: 99;
`;
export const Logo = styled.div``;

export const Menu = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${(props) => props.theme.text};
      margin: 8px;
    }
  }
`;
