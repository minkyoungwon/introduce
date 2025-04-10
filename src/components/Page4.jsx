// Page4.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../style/Page.css";

const portfolioData = [
  {
    id: 1,
    category: "React",
    image: "/picture/saver메인화면.png",
    title: "React 프로젝트 Saver",
    desc: "React로 만든 간단한 쿠폰 관련 웹 입니다.",
    stack: ["React", "JavaScript", "CSS", "Node.js.Express"],
    url: "https://ssavert1.vercel.app/",
  },
  {
    id: 2,
    category: "React",
    image: "/picture/Changyak_main.png",
    title: "개인 Project",
    desc: "React TypeScript,Node,Express로 만든 청약 정보 웹 입니다.",
    stack: ["React", "TypeScript", "TailWind", "Node.js.Express"],
    url: "https://cheongyak.vercel.app/",
  },
  {
    id: 3,
    category: "React",
    image: "/picture/포폴사이트.png",
    title: "포폴 자소서 사이트                  ",
    desc: "React를 통한 자기소개 사이트",
    stack: ["React","HTML","CSS","Netlify"],
    url: "https://aquamarine-lebkuchen-1759f0.netlify.app/"

  },
  {
    id: 4,
    category: "데이터분석",
    image: "./picture/화재발생_데이터분석2.png",
    title: "데이터 분석 프로젝트",
    desc: "Pandas, Numpy를 사용한 DecisionTree, RandomForest 데이터 분석 및 시각화",
    stack: ["Python", "Pandas", "Numpy"],
    pdfUrl: "https://drive.google.com/drive/folders/1kInOiQ6cMiheWnL5d1VuHBqYZrg13Ik1?usp=drive_link&pli=1",
  },
  {
    id: 5,
    category: "데이터분석",
    image: "/picture/우주타이타닉.png",
    title: "데이터 시각화",
    desc: "Matplotlib, Seaborn으로 시각화 작업.",
    stack: ["Python", "Matplotlib", "Seaborn"],
    pdfUrl: "https://drive.google.com/drive/folders/1kInOiQ6cMiheWnL5d1VuHBqYZrg13Ik1?usp=drive_link&pli=1",
  },
  {
    id: 6,
    category: "시각화",
    image: "/picture/따릉이시각화.png",
    title: "따릉이 시각화",
    desc: "설명 : 공공데이터를 통하여 데이터 시각화",
    stack: ["Python", "Pandas", "Numpy"],
    url: "https://determined-primula-ac4.notion.site/analysis-1a2eae425a69819babf0eb6942e1a2d1?pvs=4",

  },
  {
    id: 7,
    category: "시각화",
    image: "/picture/시각화_전통시장.png",
    title: "전통시장 공공데이터 시각화",
    desc: "PowerBI",
    stack: ["Node.js", "Express", "React"],
    url: "https://determined-primula-ac4.notion.site/Power-BI-Visualization-1a2eae425a6981868463d2834ad1d896?pvs=4",

  },

];

function Page4() {
  const [currentCategory, setCurrentCategory] = useState("전체");
  const [sliderPos, setSliderPos] = useState(0);

  // 자동 슬라이드 이동 (왼쪽으로 이동)
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderPos((prev) => prev - 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // 카테고리 필터링
  const filteredData =
    currentCategory === "전체"
      ? portfolioData
      : portfolioData.filter((item) => item.category === currentCategory);



  return (
    <motion.div
      className="page page4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ padding: "40px 0" }}
    >
      <h2 style={{ marginBottom: "20px" }}>포트폴리오</h2>

      <div style={{ marginTop: '30px' }}>
        <p>포트폴리오는 하단의 상세보기 혹은 노션(포트폴리오)보기 링크를 통해 확인하실 수 있으십니다.</p>
        <a
          href="https://determined-primula-ac4.notion.site/1a2eae425a6980bd9df3c57576c4f49d?pvs=4"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#00e5ff',
            textDecoration: 'underline'
          }}
        >
          👉 노션(포트폴리오)보기
        </a>
      </div>
      <br />
      {/* 필터 버튼들 */}
      <div style={{ marginBottom: "20px" }}>
  {["전체", "React", "데이터분석", "시각화"].map((cat) => (
    <button
      key={cat}
      className={`filter-button ${currentCategory === cat ? "active" : ""}`}
      onClick={() => {
        setCurrentCategory(cat);
        setSliderPos(0);
      }}
    >
      {cat}
    </button>
  ))}
</div>
      {/* 슬라이더 컨테이너 */}
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          overflow: "hidden",
          border: "1px solid #444",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            transform: `translateX(${sliderPos}px)`,
            transition: "transform 0.2s linear",
          }}
        >
          {filteredData.length === 0 && (
            <div style={{ color: "#fff", padding: "20px" }}>해당 카테고리의 포트폴리오가 없습니다.</div>
          )}

          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              className="portfolio-card"
              style={{
                minWidth: "280px",
                marginRight: "20px",
                backgroundColor: "#1e1e1e",
                borderRadius: "8px",
                padding: "16px",
                position: "relative",
              }}
              whileHover={{ y: -5 }} 
            >
              <div
                style={{
                  height: "150px",
                  background: `url(${item.image}) center/cover`,
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              ></div>
              <h3 style={{ marginBottom: "6px", fontSize: "1.2rem" }}>
                {item.title}
              </h3>
              <p style={{ marginBottom: "6px", fontSize: "0.9rem" }}>
                {item.desc}
              </p>
              <p style={{ fontSize: "0.8rem", color: "#ccc" }}>
                기술스택: {item.stack.join(", ")}
              </p>
              <button
                className="dark-button"
                onClick={() => {
                  if (item.url) {
                    window.open(item.url, "_blank");
                  } else if (item.pdfUrl) {
                    const link = document.createElement("a");
                    link.href = item.pdfUrl;
                    link.download = item.pdfUrl.split("/").pop();
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  } else {
                    alert("링크를 아직 첨부하지 않았습니다.");
                  }
                }}
              >
                🔗 상세 보기
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Page4;
