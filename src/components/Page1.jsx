// Page1.jsx
import React from "react";
import { motion } from "framer-motion";
import "../style/Page.css";
import StarsBackground from "./StarsBackground";

function Page1() {
  return (
    <motion.div
      className="page page1"
      // overflow를 visible로 바꿔 별이 화면을 벗어나도 잘리지 않게!
      style={{ position: "relative", overflow: "visible" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* 별똥별 배경 */}
      <StarsBackground />

      {/* 실제 내용(별 위로 올리기 위해 zIndex:1) */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.h1
          className="title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          안녕하세요
        </motion.h1>

        <div>
          <motion.img
            src="/picture/확인용 gif 파일 .gif"
            alt="프로필 사진"
            className="profile-image"
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            민경원입니다.
          </motion.h2>
        </div>

        <motion.p
          className="scroll-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          휠을 통하여 이동하실 수 있습니다.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Page1;
