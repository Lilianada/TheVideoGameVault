class otherHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
          <header>
          <!-- Desktop Menu -->
          <div class="desktop-header">
            <a class="nav-logo" href="/">
              <img src="../../src/assets/The-Video-Game-Vault_profile_image.webp" alt="FunConnect Logo" loading="lazy" />
              <h4 class="logo-name">TheVideoGameVault</h4>
              </a>
            <nav class="nav-bar">
              <ul class="nav-list">
                <li class="nav-item">
                  <a class="nav-link" href="../../pages/blog/">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../../pages/videos/">
                    Videos
                  </a>
                </li>
                <li class="nav-item">
                  <a href="https://www.youtube.com/@TheVideoGameVault/videos" 
                  target="_blank"
                  rel="noopener noreferrer"
                   class="btn-secondary">
                    <i class="fa fa-youtube" aria-hidden="true"></i>
                    Youtube
                  </a>
                </li>
              </ul>
            </nav>
          </div>
    
          <!-- Mobile Menu -->
          <div class="mobile-header">
            <a class="nav-logo" href="/">
              <img src="../../src/assets/The-Video-Game-Vault_profile_image.webp" alt="FunConnect Logo" loading="lazy" />
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
                  <a class="nav-link" href="../../index.html">
                    Home
                  </a>
                </li>
  
                <li class="nav-item">
                  <a class="nav-link" href="../../pages/blog/">
                    Blog
                  </a>
                </li>
    
                <li class="nav-item">
                  <a class="nav-link" href="../../pages/videos/">
                    Videos
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
              <a href="https://www.youtube.com/@TheVideoGameVault/videos" class="nav-list youtube-button btn-secondary" 
              target="_blank"
              rel="noopener noreferrer">
                <i class="fa fa-youtube" aria-hidden="true"></i>
                Youtube
              </a>
            </nav>
          </div>
        </header>
          `;
    }
  }
  customElements.define("other-header", otherHeader);
  
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#navbar");
  const link = document.querySelectorAll(".nav-link");
  
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("change");
    nav.classList.toggle("nav-open");
  });
  
  if (toggle.classList.contains("change")) {
    nav.classList.add("nav-open");
    console.log("open");
  }
  
  link.forEach((link) => {
    link.addEventListener("click", () => {
      link.classList.add("active-link");
      toggle.classList.remove("change");
      nav.classList.remove("nav-open");
    });
  });
  