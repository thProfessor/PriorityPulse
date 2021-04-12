import styled from "styled-components";
import { motion } from "framer-motion";

//Banner
export const Banner = styled.div`
  background: ${(props) => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;
`;
export const Video = styled.div`
  height: 100%;
  width: 100%;
  video {
    object-fit: cover;
  }
`;
export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
`;

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -120px;
  left: 0px;
  color: ${(props) => props.theme.text};
  pointer-events: none;
  @media (max-width: 768px) {
    bottom: -80px;
  }
  @media (max-width: 540px) {
    bottom: -60px;
  }
`;

export const Headline = styled(motion.span)`
  display: block;
  font-size: 15rem;
  font-weight: 900;
  line-height: 0.76;
  @media (max-width: 768px) {
    font-size: 9rem;
  }
  @media (max-width: 540px) {
    font-size: 3rem;
  }
`;
