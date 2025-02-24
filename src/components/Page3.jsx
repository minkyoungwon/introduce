// src/components/Page3.jsx
import React from "react";
import { motion } from "framer-motion";
import "../style/Page.css";
//import MatrixRain from "../components/MatrixRain";
import StarsBackground from "./StarsBackground";

function Page3() {
  return (
    <motion.div
      className="page page3"
      style={{ position: "relative", overflow: "hidden" }}
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <StarsBackground />

      {/* 실제 내용 */}
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* 기존 Page3에서 작성했던 기술스택 / 링크 등 */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '60px',
          width: '80%',
          margin: '0 auto',
        }}>
          {/* 왼쪽 사진 */}
          <motion.div
            style={{ flex: 0.5, textAlign: 'center' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <img
              src="/picture/민경원 셀카.jpg"
              alt="프로필 사진"
              className="profile-image2"
            />
          </motion.div>

          {/* 오른쪽 스킬 소개 */}
          <div style={{ flex: 1, textAlign: 'left' }}>
            <h1>기술 스택</h1>
            <div style={{ marginBottom: '20px' }}>
              <h2>SQL</h2>
              <ul>
                <li>PostgresSQL</li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h2>Cloud / Linux</h2>
              <ul>
                <li>AWS EC2</li>
                <li>Ubuntu</li>
                <li>VMware(CentOS)</li>
              </ul>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h2>Languages</h2>
              <ul>
                <li>JavaScript
                  <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>React / Vite</li>
                  </ul>
                </li>
                <li>Python
                  <ul>
                    <li>Pandas, Numpy, Matplotlib</li>
                    <li>Seaborn, scikit-learn</li>
                  </ul>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Page3;
