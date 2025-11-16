const experienceCarouselLeft = document.getElementById(
  "experience-carousel-left"
);
const experienceCarouselRight = document.getElementById(
  "experience-carousel-right"
);

const page = document.getElementById("page");

let curPos = 0;

experienceCarouselLeft.onclick = () => {
  console.log("왼쪽");
  const pageWitdh = page.getBoundingClientRect().width;
  const experienceGrid = document.getElementById("experience-grid");

  if (pageWitdh === 375) {
    ++curPos;

    if (curPos > 0) {
      curPos = -2;
    }

    experienceGrid.style.left = `${315 * curPos || 0}px`;
  } else {
    experienceGrid.style.left = "0px";
  }
};

experienceCarouselRight.onclick = () => {
  console.log("오른쪽");
  const pageWitdh = page.getBoundingClientRect().width;
  const experienceGrid = document.getElementById("experience-grid");

  if (pageWitdh === 375) {
    --curPos;

    if (curPos < -2) curPos = 0;
    experienceGrid.style.left = `${315 * curPos || 0}px`;
  } else {
    experienceGrid.style.left = "-482px";
  }
};

const clientCarouselLeft = document.getElementById("client-carousel-left");
const clientCarouselRight = document.getElementById("client-carousel-right");

let pos = 0;

clientCarouselLeft.onclick = () => {
  console.log("왼쪽");

  const clientLogos = document.getElementById("clients-logos");

  ++pos;

  if (pos > 0) {
    pos = 0;
  }

  clientLogos.style.left = `${200 * pos}px`;
};

clientCarouselRight.onclick = () => {
  console.log("오른쪽");

  const clientLogos = document.getElementById("clients-logos");

  --pos;
  clientLogos.style.left = `${200 * pos}px`;
};
