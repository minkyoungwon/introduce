// StarsBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function StarsBackground() {
  // tsparticles 초기화
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  // 효과 옵션
  const particlesOptions = {
    // 배경색을 투명 처리
    background: {
      color: {
        value: "transparent", // 원래 #333333 이던 부분을 투명으로
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
        resize: true,
      },
    },
    particles: {
      // 별 개수
      number: {
        value: 80, // 적당히 조절
        density: {
          enable: true,
          value_area: 800,
        },
      },
      // 별 색 (원하는 색으로 변경 가능)
      color: { value: "#ffffff" }, 
      shape: { type: "circle" },
      opacity: { value: 0.7 },
      size: {
        value: 3, 
        random: true,
      },
      move: {
        enable: true,
        speed: 5,          // 좀 더 빠르게 떨어지도록
        direction: "bottom", // 아래 방향
        outModes: { default: "out" },
      },
      // trail 옵션으로 꼬리(잔상) 효과
      trail: {
        enable: true,
        length: 10,
        fillColor: "#000000", // 꼬리 영역을 덮을 색 (검정/투명 등)
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}

export default StarsBackground;
