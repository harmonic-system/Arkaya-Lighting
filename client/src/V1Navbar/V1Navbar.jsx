const V1Navbar = () => {

  // search-box open close js code
  let navbar = document.querySelector(".navbar");
  let searchBox = document.querySelector(".search-box .bx-search");
  // let searchBoxCancel = document.querySelector(".search-box .bx-x");

  searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
      searchBox.classList.replace("bx-search", "bx-x");
    } else {
      searchBox.classList.replace("bx-x", "bx-search");
    }
  });

  // sidebar open close js code
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");
  menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
  }
  menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
  }


  // sidebar submenu open close js code
  let htmlcssArrow = document.querySelector(".htmlcss-arrow");
  htmlcssArrow.onclick = function () {
    navLinks.classList.toggle("show1");
  }
  let moreArrow = document.querySelector(".more-arrow");
  moreArrow.onclick = function () {
    navLinks.classList.toggle("show2");
  }
  let jsArrow = document.querySelector(".js-arrow");
  jsArrow.onclick = function () {
    navLinks.classList.toggle("show3");
  }
  let jsArrow1 = document.querySelector(".name-arrow");
  jsArrow1.onclick = function () {
    navLinks.classList.toggle("show3");
  }

  return (
    <>
      <nav>
        <div class="navbar">
          <i class='bx bx-menu'></i>
          <div class="logo">
            <a href="#">
              <img src="./images/arkaya-logo.png" alt="Arkaya Logo" style="width: 100%; height: 100%; padding: 2rem;" />
            </a>
          </div>
          <div class="nav-links">
            <div class="sidebar-logo">
              <span class="logo-name">Arkaya Lighting</span>
              <i class='bx bx-x'></i>
            </div>
            <ul class="links">
              <li><a href="#">HOME</a></li>
              <li>
                <a href="#">PRODUCTS</a>
                <i class='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
                <ul class="htmlCss-sub-menu sub-menu">
                  <li class="more">
                    <span><a href="#">More</a>
                      <i class='bx bxs-chevron-right arrow more-arrow'></i>
                    </span>
                    <ul class="more-sub-menu sub-menu">
                      <li><a href="#">Neumorphism</a></li>
                      <li><a href="#">Pre-loader</a></li>
                      <li><a href="#">Glassmorphism</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Entertainment</a></li>
                  <li><a href="#">Login Forms</a></li>
                  <li><a href="#">Card Design</a></li>
                </ul>
              </li>
              <li><a href="#">BRANDS</a></li>
              <li>
                <a href="#">RESOURCES</a>
                <i class='bx bxs-chevron-down js-arrow arrow '></i>
                <ul class="js-sub-menu sub-menu">
                  <li><a href="#">Dynamic Clock</a></li>
                  <li><a href="#">Form Validation</a></li>
                  <li><a href="#">Card Slider</a></li>
                  <li><a href="#">Complete Website</a></li>
                </ul>
              </li>
              <li><a href="#">DISCOVER US</a></li>
              <li><a href="#">CONTACT US</a></li>
              <li>
                <a href="#">NAME</a>
                <i class='bx bxs-chevron-down name-arrow arrow '></i>
                <ul class="js-sub-menu sub-menu">
                  <li><a href="#">Dynamic Clock</a></li>
                  <li><a href="#">Form Validation</a></li>
                  <li><a href="#">Card Slider</a></li>
                  <li><a href="#">Complete Website</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="search-box">
            <i class='bx bx-search'></i>
            <div class="input-box">
              <form action="">
                <input type="search" placeholder="Search..." />
                <button>Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default V1Navbar;