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

  sTxt.classList.add("reveal");
  setTimeout(() => {
    item.classList.add("reveal");
  }, 200);
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

// var swiper = new Swiper(".swiper.project_list", {
//   slidesPerView: 3,
//   spaceBetween: 40,
//   mousewheel: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

//구축 프로젝트 상세내용 보기
$(document).on("mouseover", ".con_box a", function (e) {
  e.preventDefault();
  $(this).parents("li").addClass("view_hover");
});
$(document).on("mouseleave", ".con_box a", function (e) {
  e.preventDefault();
  $(this).parents("li").removeClass("view_hover");
});

//부설기관 전체보기 팝업
$(".add_btn").on("click", function () {
  $(".popWrap.detail").addClass("on");
  $("body").addClass("overlay");
  $(".popWrap.detail .popcont").addClass("on");
  $(".list_wrap .popcont.con").addClass("on");
});
// 유지보수 슬라이드
// var project_slide = new Swiper(".item_box .swiper", {
//   slidesPerView: 3,
//   spaceBetween: 0,
//   pagination: {
//     el: ".item_box .swiper-pagination",
//     type: "bullets",
//     clickable: true,
//   },
//   // autoplay: {
//   // 	delay: 3000,
//   // },
//   breakpoints: {
//     760: {
//       slidesPerView: 5,
//     },
//   },
// });

// hover 이벤트에서 spaceBetween 변경
const swiperSlides = document.querySelectorAll(".item_box .swiper-slide");

swiperSlides.forEach((slide) => {
  slide.addEventListener("mouseenter", () => {
    project_slide.params.spaceBetween = 10; // hover 시 spaceBetween 10으로 설정
    project_slide.update(); // Swiper 업데이트
  });

  slide.addEventListener("mouseleave", () => {
    project_slide.params.spaceBetween = 0; // hover 해제 시 spaceBetween 0으로 복원
    project_slide.update(); // Swiper 업데이트
  });
});

$(".item_box .swiper-slide a").on("mouseenter", function (e) {
  $(this).parents(".swiper").addClass("hover");
});
$(".item_box .swiper-slide a").on("mouseleave", function (e) {
  $(this).parents(".swiper").removeClass("hover");
});

// 상세 팝업 //
// 열기 //
$(".pop_link").on("click", function () {
  $(".popWrap").addClass("on");
  $("body").addClass("overlay");
});
// 닫기 //
$(".close_btn").on("click", function () {
  $(".popWrap").removeClass("on");
  $("body").removeClass("overlay");
  $("li").removeClass("on");
  $(".popcont").removeClass("on");
});
// 닫기 hover 효과 //
$(document).on("mouseover", ".close_btn", function (e) {
  e.preventDefault();
  $(this).addClass("hover");
});
$(document).on("mouseleave", ".close_btn", function (e) {
  e.preventDefault();
  $(this).removeClass("hover");
});

$(".ul1 .pop_link").on("click", function () {
  var idx = $(this).parent().index();
  $("li").removeClass("on").eq(idx).addClass("on");
  $(".type1 .popcont").removeClass("on");
  $(".type2 .popcont").removeClass("on");
  $(".type1 .popcont.con" + idx).addClass("on");
});

$(".ul2 .pop_link").on("click", function () {
  var idx = $(this).parent().index();
  $(".ul2 li").removeClass("on").eq(idx).addClass("on");
  $(".type2 .popcont").removeClass("on");
  $(".type1 .popcont").removeClass("on");
  $(".type2 .popcont.con" + idx).addClass("on");
});
$(".career_box .pop_link").on("click", function () {
  $(".career .popcont").addClass("on");
});

// esc 클릭 시 팝업 닫기
$(document).on("keydown", function (e) {
  if (e.key === "Escape") {
    $("body").removeClass("overlay");
    $(".popup").removeClass("open");
    $(".popcont").removeClass("on");
    $(".popWrap").removeClass("on");
  }
});

// 사내프레임워크 자세히보기 스크롤
function scrollMove(seq) {
  var offset = $("#scroll_cont").offset();
  $("html, body").animate({ scrollTop: offset.top }, 400);
}

// 이메일  hover 효과 //
$(document).on("mouseover", ".mail_form button", function (e) {
  e.preventDefault();
  $(this).parent("div").addClass("hover");
});
$(document).on("mouseleave", ".mail_form button", function (e) {
  e.preventDefault();
  $(this).parent("div").removeClass("hover");
});
$(window).on("load scroll", function () {
  windowScroll = $(window).scrollTop();
  //header
  if (windowScroll > 50) {
    $(".header").addClass("scroll");
  } else {
    $(".header").removeClass("scroll");
  }

  if (!windowScroll) {
    $(".top_btn").addClass("top");
  } else {
    $(".top_btn").removeClass("top");
  }
});
