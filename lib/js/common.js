//스크롤 fade 효과
// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");
//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;
//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// 헤더 토글 메뉴
const menuWrap = document.getElementById("nav");
const menuBtn = document.getElementById("menubtn");
const menuToggle = () => {
  menuWrap.classList.toggle("open");
};
menuBtn.addEventListener("click", menuToggle);

//Intro 문구 fade
window.addEventListener("DOMContentLoaded", () => {
  const sTxt = document.querySelector(".text-box .s_txt");
  const item = document.querySelector(".text-box .item");

  if (sTxt) sTxt.classList.add("show");
  if (item) {
    setTimeout(() => {
      item.classList.add("show");
    }, 200);
  }
});

//about 타이핑 애니메이션
const aniTexts = ["PUBLISHING", "DEVELOPMENT", "UI/UX"];
const textbox = document.querySelector(".textbox span");
if (textbox) {
  let wordIndex = 0;
  let charIndex = 0;

  function animationText() {
    const Word = aniTexts[wordIndex];
    if (charIndex <= Word.length) {
      textbox.textContent = Word.substring(0, charIndex);
      charIndex++;
      setTimeout(animationText, 100);
    } else {
      setTimeout(() => {
        charIndex = 0;
        wordIndex = (wordIndex + 1) % aniTexts.length;
        animationText();
      }, 1200);
    }
  }
  document.addEventListener("DOMContentLoaded", animationText);
}
//about textSec 스크롤 다운
const scrollBtn = document.querySelector(".scroll-btn");
if (scrollBtn) {
  scrollBtn.addEventListener("click", function () {
    const aboutSec = this.closest("section");
    const nextSec = aboutSec.nextElementSibling;

    if (nextSec) {
      nextSec.scrollIntoView({ behavior: "smooth" });
    }
  });
}
//info 소개 글, contact me 요소 페이드
const reveal = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.1, // 10% 보일 때 동작
  }
);
reveal.forEach((el) => observer.observe(el));

//모바일에서 상세 팝업 닫기 버튼 처리
(() => {
  const isMobile = window.matchMedia(
    "(hover: none) and (pointer: coarse)"
  ).matches;

  if (isMobile) {
    const closeBtn = document.getElementById("mob-close-btn");
    if (!closeBtn) return; // 버튼 없으면 실행X

    const listItems = document.querySelectorAll(".projectSec .list li");

    listItems.forEach((li) => {
      li.addEventListener("click", () => {
        listItems.forEach((item) => item.classList.remove("on"));
        li.classList.add("on");
        closeBtn.classList.add("on");
      });
    });

    closeBtn.addEventListener("click", () => {
      closeBtn.classList.remove("on");
      document.querySelector(".detail-pop")?.classList.remove("open");
      document.querySelector("body")?.classList.remove("popon");
      //닫기 버튼 클릭 시 li에서 on 제거
      listItems.forEach((li) => li.classList.remove("on"));
    });
  }
})();
// 상세 팝업 열기
const detailItems = document.querySelectorAll(".projectSec li");

detailItems.forEach((item) => {
  const detailBtn = item.querySelector(".detail-btn");
  const detailPOP = item.querySelector(".detail-pop");
  const popCloseBtn = item.querySelector(".detail-pop .pop-btn");
  if (detailBtn && detailPOP && popCloseBtn) {
    detailBtn.addEventListener("click", () => {
      detailPOP.classList.add("open");
      document.body.classList.add("popon");
    });
    popCloseBtn.addEventListener("click", () => {
      detailPOP.classList.remove("open");
      document.body.classList.remove("popon");
    });
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const openPopup = document.querySelector(".detail-pop.open");
    openPopup?.classList.remove("open");
    document.body.classList.remove("popon");
  }
});

// 스크롤 탑 버튼
$(".top-btn").on("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
