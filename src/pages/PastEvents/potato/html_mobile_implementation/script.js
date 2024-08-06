"use strict";

let boxes = Array.from(document.querySelectorAll(".box"));
let inView = elem => {
  return (
    window.scrollY >= elem.offsetTop - window.innerHeight + 200 &&
    window.scrollY <= elem.offsetTop + elem.offsetHeight
  );
};
let outView = elem => {
  return (
    window.scrollY >= elem.offsetTop + elem.offsetHeight ||
    window.scrollY <= elem.offsetTop - window.innerHeight
  );
};

let scroller = () => {
  boxes.forEach(i => {
    if (inView(i)) {
      i.classList.add("inView");
    }
    if (outView(i)) {
      i.classList.remove("inView");
    }
  });
};

window.addEventListener("scroll", scroller, false);