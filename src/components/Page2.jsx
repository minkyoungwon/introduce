// src/components/Page2.jsx
import React from "react";
import { motion } from "framer-motion";
import "../style/Page.css";
import StarsBackground from "../components/StarsBackground";

function Page2() {
  return (
    <motion.div
      className="page page2"
      style={{ position: "relative", overflow: "hidden" }}
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* 별똥별 배경 */}
      <StarsBackground />

      <div style={{ position: "relative", zIndex: 1, width: "80%", margin: "0 auto", display: "flex", gap: "50px" }}>
        {/* 왼쪽 - 경력 사항 */}
        <motion.div
          style={{ flex: 1, textAlign: "left" }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1>경력 사항</h1>

          <div style={{ marginBottom: "20px" }}>
            <h2>모비젠 (2023.02 ~ 2024.02)</h2>
            <ul>
              <li>방산산업 구축 및 고도화 업무지원</li>
              <li>통계누리 통합채널 고도화 및 운영 DB 관리(PostgresSQL)</li>
            </ul>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h2>씨에스쉐어링 (2022.08 ~ 2022.11)</h2>
            <ul>
              <li>시스템 구축 및 사무보조</li>
            </ul>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h2>제니엘이지메디컴 (2019.03 ~ 2020.03)</h2>
            <ul>
              <li>제품 관리 및 영업 운영 담당</li>
            </ul>
          </div>

          <h2>교육사항</h2>
          <p>• Sesac 프로젝트기반 자바스크립트 웹 서비스 개발자 (2024.10 ~ 2025.01)</p>
          <p>• Hi서울협회 Python 기반 빅데이터 분석 및 시각화 (2022.05 ~ 2022.08)</p>

          <h2>자격증</h2>
          <p>• 네트워크 관리기사 (2020.05 취득)</p>
        </motion.div>

        {/* 오른쪽 - 프로필 사진 */}
        <motion.div
          style={{ flex: 0.5, textAlign: "center" }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.img
            // src="/picture/강릉 민경원.jpg"
            // alt="프로필 사진"
            // className="profile-image2"
            // initial={{ rotateY: 180, opacity: 0 }}
            // animate={{ rotateY: 0, opacity: 1 }}
            // transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Page2;
