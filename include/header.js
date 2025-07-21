const header = `
<div class="inner">
        <div class="logo-wrap">
        <h1>
          <a class="logo" href="index.html">EUNBI'S</a>
          </h1>
        </div>
        <nav id="nav" class="en">
          <button type="button" id="menubtn">
            <span class="text">Menu</span>
            <span class="bar">
              <em>
                <i></i>
                <i></i>
                <i></i>
              </em>
            </span>
          </button>
          <div class="menu-wrap">
            <ul>
              <li>
                <a href="index.html" title="HOME">HOME</a>
              </li>
              <li>
                <a href="about.html" title="ABOUT">ABOUT</a>
              </li>
              <li>
                <a href="work1.html" title="WORKS1">WORKS1</a>
              </li>
              <li>
                <a href="work2.html" title="WORKS2">WORKS2</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
`;
document.write(header);

window.addEventListener("DOMContentLoaded", () => {
  let OnPage = location.pathname.split("/").pop();

  // index.html 꺼내기
  if (OnPage === "") {
    OnPage = "index.html";
  }

  const menuLink = document.querySelectorAll(".menu-wrap a");

  menuLink.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === OnPage) {
      link.parentElement.classList.add("on");
    } else {
      link.parentElement.classList.remove("on");
    }
  });
});
