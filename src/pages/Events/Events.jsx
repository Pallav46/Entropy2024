import React, { useEffect, useRef } from 'react';
import './Events.css';

const Events = () => {
  const config = {
    bodyClipPathHeightFraction: 0.6,
    headClipPathHeight: 64,
  };

  const ids = {
    gradient: 'myGradient',
    bottomStraightLine: 'bottomStraightLine',
    topStraightLine: 'topStraightLine',
    curveLine: 'curveLine',
    topStraightLineHead: 'topStraightLineHead',
    clipPathBody: 'clipPathBody',
    clipPathBodyRect: 'clipPathBodyRect',
    clipPathHead: 'clipPathHead',
    clipPathHeadRect: 'clipPathHeadRect',
  };

  let headClipStartY;

  const mainRef = useRef(null);
  const targetsRef = useRef([]);
  const svgRef = useRef(null);
  const defsRef = useRef(null);
  const clipPathBodyRectRef = useRef(null);
  const clipPathHeadRectRef = useRef(null);

  function setY(elem, y) {
    if (elem) {
      elem.setAttribute('y', y);
    }
  }

  function moveBodyRect(scrollY) {
    setY(clipPathBodyRectRef.current, scrollY);
  }

  function moveHeadRect(scrollY) {
    const newY = headClipStartY + scrollY;
    setY(clipPathHeadRectRef.current, newY);
  }

  function rAFThrottle(callback) {
    let requestID;

    return function (...args) {
      const context = this;

      cancelAnimationFrame(requestID);

      requestID = requestAnimationFrame(() => {
        callback.call(context, ...args);
      });
    };
  }

  function getCurveCoords(x, y, isLeft) {
    if (isLeft) {
      return `
          L ${x} ${y - 120}
          c 0 60 -60 60 -60 120
          c 0 60 60 60 60 120
      `;
    }

    return `
          L ${x} ${y - 120}
          c 0 60 60 60 60 120
          c 0 60 -60 60 -60 120
      `;
  }

  function createCurveLine(x, height, targetsData) {
    const path = `
      <path
          id="${ids.curveLine}"
          d="
              M ${x} 0 
              ${targetsData
                .map(({ y, isLeft }) => getCurveCoords(x, y, isLeft))
                .join(' ')}
              L ${x} ${height}
          "
          vector-effect="non-scaling-stroke"
          clip-path="url(#${ids.clipPathBody})"
          stroke="url(#${ids.gradient})"
      />
      `;
    svgRef.current.insertAdjacentHTML('beforeend', path);
  }

  function createStraightLine(x, height, id, clipPathId) {
    const line = `
      <line
          id="${id}"
          x1="${x}"
          y1="0"
          x2="${x}"
          y2="${height}"
          vector-effect="non-scaling-stroke"
          ${clipPathId ? `clip-path="url(#${clipPathId})"` : ``}
      />
    `;
    svgRef.current.insertAdjacentHTML('beforeend', line);
  }

  function getTargetData(svgLeft) {
    return Array.from(targetsRef.current).map((target) => {
      const { left, height, top } = target.getBoundingClientRect();
      return { y: top + window.scrollY + height / 2, isLeft: left < svgLeft };
    });
  }

  function createClipPathBody(width, height) {
    const clipPath = `
      <clipPath id="${ids.clipPathBody}">
        <rect id="${ids.clipPathBodyRect}" x="0" y="0" width="${width}" height="${height}" />
      </clipPath>
    `;
    defsRef.current.insertAdjacentHTML('beforeend', clipPath);
    clipPathBodyRectRef.current = document.querySelector(`#${ids.clipPathBodyRect}`);
  }

  function createClipPathHead(width, height) {
    const clipPath = `
      <clipPath id="${ids.clipPathHead}">
        <rect id="${ids.clipPathHeadRect}" x="0" y="${headClipStartY}" width="${width}" height="${height}" />
      </clipPath>
    `;
    defsRef.current.insertAdjacentHTML('beforeend', clipPath);
    clipPathHeadRectRef.current = document.querySelector(`#${ids.clipPathHeadRect}`);
  }

  function createGradient() {
    const gradient = `
      <linearGradient
        id="${ids.gradient}"
        x1="0"
        y1="0"
        x2="1"
      >
        <stop offset="0%" stop-color="#c380f7" />
        <stop offset="50%" stop-color="#6caef7" />
        <stop offset="100%" stop-color="#c380f7" />
      </linearGradient>
    `;
    defsRef.current.insertAdjacentHTML('beforeend', gradient);
  }

  function createSvg() {
    const svg = `
      <svg style="position: fixed; top: 0; left: 0; width: 100%; height: 100%;">
        <defs></defs>
      </svg>
    `;
    mainRef.current.insertAdjacentHTML('beforeend', svg);
    svgRef.current = mainRef.current.querySelector('svg');
    defsRef.current = mainRef.current.querySelector('defs');
  }

  function onScroll() {
    const scrollY = window.scrollY;
    moveBodyRect(scrollY);
    moveHeadRect(scrollY);
  }

  const onScrollThrottled = rAFThrottle(onScroll);

  function onResize() {
    window.removeEventListener('scroll', onScrollThrottled);
    if (svgRef.current) svgRef.current.remove();
    init();
  }

  function init() {
    createSvg();
    createGradient();

    const { bodyClipPathHeightFraction, headClipPathHeight } = config;
    const bodyClipPathHeight = window.innerHeight * bodyClipPathHeightFraction;
    headClipStartY = bodyClipPathHeight - 24;
    const { left, width, height } = svgRef.current.getBoundingClientRect();
    const x = width / 2;
    const targetsData = getTargetData(left);

    createStraightLine(x, height, ids.bottomStraightLine);
    createStraightLine(x, height, ids.topStraightLine, ids.clipPathBody);
    createCurveLine(x, height, targetsData);
    createStraightLine(x, height, ids.topStraightLineHead, ids.clipPathHead);
    createClipPathBody(width, bodyClipPathHeight);
    createClipPathHead(width, headClipPathHeight);

    window.addEventListener('scroll', onScrollThrottled);
    window.addEventListener('resize', onResize);
  }

  useEffect(() => {
    targetsRef.current = document.querySelectorAll('.target');
    init();
    return () => {
      window.removeEventListener('scroll', onScrollThrottled);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="full">
      <main ref={mainRef}>
        {/* Your gridSquare elements here */}
        <div className="gridSquare col1"></div>
        <div className="gridSquare col3"></div>
        <div className="gridSquare col1"></div>
        <div className="gridSquare col3 target">target</div>
        <div className="gridSquare col1"></div>
        <div className="gridSquare col3 target">target</div>
        <div className="gridSquare col1 target">target</div>
        <div className="gridSquare col3"></div>
        <div className="gridSquare col1"></div>
        <div className="gridSquare col3"></div>
        <div className="gridSquare col1"></div>
        <div className="gridSquare col3"></div>
      </main>
    </div>
  );
};

export default Events;
