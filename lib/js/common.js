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

window.addEventListener("DOMContentLoaded", () => {
  const sTxt = document.querySelector(".text-box .s_txt");
  const item = document.querySelector(".text-box .item");

  if (sTxt) sTxt.classList.add("reveal");
  if (item) {
    setTimeout(() => {
      item.classList.add("reveal");
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

// aboutme, contact 페이드 효과
const reveal = document.querySelectorAll(".reveal");
const revealItem = new IntersectionObserver(
  (item) => {
    item.forEach((text) => {
      // 스크롤 시 영역 나올 때
      if (text.isIntersecting) {
        text.target.classList.add("show");
      } else {
        text.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);
reveal.forEach((elm) => revealItem.observe(elm));

//project hover 모바일
/// *********** 이거 확인 ***************//
const isMobile = window.matchMedia(
  "(hover: none) and (pointer: coarse)"
).matches;
if (isMobile) {
  const closeBtn = document.getElementById("mob-close-btn");
  document.querySelectorAll(".projectSec .list li").forEach((li) => {
    li.addEventListener("click", () => {
      li.classList.add("on");
      closeBtn.classList.add("on");
    });
  });

  closeBtn.addEventListener("click", () => {
    closeBtn.classList.remove("on");
    document.querySelector(".detail-pop").classList.remove("open");
    document.querySelector("body").classList.remove("popon");
    //닫기 버튼 클릭 시 li에서 on 제거
    document.querySelectorAll(".projectSec .list li").forEach((li) => {
      li.classList.remove("on");
    });
  });
}

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
    detailPOP.classList.remove("open");
  }
});

// 스크롤 탑 버튼
$(".top-btn").on("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
