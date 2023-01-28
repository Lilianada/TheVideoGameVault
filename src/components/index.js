// SHOW SCROLL TOP
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
        <!-- Desktop Menu -->
        <div class="desktop-header">
          <a class="nav-link" href="/">
            <img src="./src/assets/The-Video-Game-Vault_profile_image.jpg" alt="FunConnect Logo" />
          </a>
          <nav class="nav-bar">
            <ul class="nav-list">
              <li class="nav-item">
                <a class="nav-link" href="../pages/blog">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../pages/about">
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../pages/contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
          <a href="/" class="youtube-button">
            <i class="fa fa-youtube" aria-hidden="true"></i>
            <p class="button-text">Youtube</p>
          </a>
        </div>
  
        <!-- Mobile Menu -->
        <div class="mobile-header">
          <a class="nav-logo" href="/">
            <img src="./src/assets/The-Video-Game-Vault_profile_image.jpg" alt="FunConnect Logo" />
            <h5 class="logo-name">TheVideoGameVault</h5>
          </a>
          <div class="nav-toggle">
            <div class="bar bar-one"></div>
            <div class="bar bar-two"></div>
            <div class="bar bar-three"></div>
          </div>
  
          <nav class="nav-bar" id="navbar">
            <ul class="nav-list">
              <li class="nav-item">
                <h6 class="nav-title">Menu</h6>
              </li>
            </ul>
  
            <!-- Navigation List -->
            <ul class="nav-list">
              <li class="nav-item">
                <a class="nav-link" href="../pages/blog">
                  Blog
                </a>
              </li>
  
              <li class="nav-item">
                <a class="nav-link" href="../pages/about">
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../pages/contact">
                  Contact Me
                </a>
              </li>
            </ul>
            <ul class="nav-list">
              <li class="nav-item">
                <h6 class="nav-title">Get in touch</h6>
              </li>
              <li class="nav-item">
                <h6 class="nav-title">Thevideogamevault@gmail.com</h6>
              </li>
            </ul>
            <!-- Youtube Button -->
            <a href="/" class="nav-list youtube-button btn-secondary">
              <i class="fa fa-youtube" aria-hidden="true"></i>
              <p class="button-text">Youtube</p>
            </a>
          </nav>
        </div>
      </header>
        `;
  }
}
customElements.define("my-header", myHeader);

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#navbar");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("change");
  nav.classList.toggle("nav-open");
});
if ( toggle.classList.contains("change")) {
    nav.classList.add("nav-open");
    console.log("open");
}
