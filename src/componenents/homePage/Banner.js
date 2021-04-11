import React, { useEffect, useRef } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import {
  Banner,
  Video,
  BannerTitle,
  Canvas,
  Headline,
} from "../../styles/homeStyles";
import banner from "../../assets/images/banner.jpg";
import { useGlobalStateContext } from "../../context/globalContext";
function HomeBanner({ onCursor }) {
  const size = useWindowSize();
  const { currentTheme } = useGlobalStateContext();
  let canvas = useRef(null);

  useEffect(() => {
    let renderingElement = canvas.current;
    let drawingElement = renderingElement.cloneNode();

    let drawingCtx = drawingElement.getContext("2d");
    let renderingCtx = renderingElement.getContext("2d");

    let lastX;
    let lastY;

    let moving = false;
    renderingCtx.globalCompositeOperation = "source-over";
    renderingCtx.fillStyle =
      window.localStorage.getItem("theme") === "dark" ? "#000000" : "#ffffff";

    renderingCtx.fillRect(0, 0, size.width, size.height);

    renderingElement.addEventListener("mouseover", (e) => {
      moving = true;
      lastX = e.pageX - renderingElement.offsetLeft;
      lastY = e.pageY - renderingElement.offsetTop;
    });
    renderingElement.addEventListener("mouseup", (e) => {
      moving = true;
      lastX = e.pageX - renderingElement.offsetLeft;
      lastY = e.pageY - renderingElement.offsetTop;
    });
    renderingElement.addEventListener("mousemove", (e) => {
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over";
        renderingCtx.globalCompositeOperation = "destination-out";
        let currentX = e.pageX - renderingElement.offsetLeft;
        let currentY = e.pageY - renderingElement.offsetTop;
        drawingCtx.lineJoin = "round";
        drawingCtx.moveTo(lastX, lastY);
        drawingCtx.lineTo(currentX, currentY);
        drawingCtx.closePath();
        drawingCtx.lineWidth = 120;
        drawingCtx.stroke();
        lastX = currentX;
        lastY = currentY;
        renderingCtx.drawImage(drawingElement, 0, 0);
      }
    });
  }, [currentTheme]);

  const container = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <Banner>
      <Video>
        <img height="100%" width="100%" src={banner} />
      </Video>
      <Canvas
        height={size.height}
        width={size.width}
        ref={canvas}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
      />
      <BannerTitle variants={container} initial="initial" animate="animate">
        <Headline variants={item}>SCROLL</Headline>
        <Headline variants={item}>DOWN</Headline>
      </BannerTitle>
    </Banner>
  );
}

export default HomeBanner;
