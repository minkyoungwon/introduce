// App.jsx
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import PageBar from './components/PageBar';
import './App.css';

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = 4; // 페이지 수

  const handleScroll = (event) => {
    // 휠을 아래(양수)로 → 다음 페이지, 휠을 위(음수)로 → 이전 페이지
    if (event.deltaY > 0 && pageIndex < totalPages - 1) {
      setPageIndex((prev) => prev + 1);
    } else if (event.deltaY < 0 && pageIndex > 0) {
      setPageIndex((prev) => prev - 1);
    }
  };

  return (
    <div
      className={`app-container page-${pageIndex}`}
      onWheel={handleScroll}
    >
      <PageBar currentPage={pageIndex} totalPages={totalPages} />

      <AnimatePresence mode="wait">
        {pageIndex === 0 && <Page1 key="page1" />}
        {pageIndex === 1 && <Page2 key="page2" />}
        {pageIndex === 2 && <Page3 key="page3" />}
        {pageIndex === 3 && <Page4 key="page4" />}
      </AnimatePresence>
    </div>
  );
}

export default App;
