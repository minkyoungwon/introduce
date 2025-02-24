// 임시 보류 
// // src/components/effects/MatrixRain.jsx
// import React, { useRef, useEffect } from "react";

// function MatrixRain() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     // 초기 사이즈 설정
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     // 리사이즈 이벤트
//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     window.addEventListener("resize", handleResize);

//     // 문자 세트
//     const letters = "アカサタナハマヤラワ012345789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const fontSize = 10;
//     const columns = Math.floor(canvas.width / fontSize);
//     const drops = [];

//     for (let x = 0; x < columns; x++) {
//       drops[x] = 1;
//     }

//     function draw() {
//       // 배경을 반투명으로 덮어서 잔상 효과
//       ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       ctx.fillStyle = "#0F0"; // 녹색
//       ctx.font = `${fontSize}px monospace`;

//       for (let i = 0; i < drops.length; i++) {
//         const text = letters.charAt(Math.floor(Math.random() * letters.length));
//         ctx.fillText(text, i * fontSize, drops[i] * fontSize);

//         // 화면 끝에 도달하면 확률적으로 리셋
//         if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//           drops[i] = 0;
//         }
//         drops[i]++;
//       }
//     }

//     const interval = setInterval(draw, 33); // 대략 30fps

//     return () => {
//       clearInterval(interval);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         zIndex: 0,
//       }}
//     />
//   );
// }

// export default MatrixRain;
