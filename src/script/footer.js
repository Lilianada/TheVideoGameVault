class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <footer>
      <p class="footerText">
       Copyright © 2023 
       <span class="brand-text">The Video Game Vault</span>
       . All rights reserved.
      </p>
      <p class="footerText">Built by: 
       <a href="http://lilydesigned.vercel.app" target="_blank" rel="noopener noreferrer">Lilydesigned.me</a>
      </p>
   </footer>
      
      `;
    }
  }
  customElements.define("footer-component", Footer);

  document.addEventListener('touchstart', onTouchStart, {passive: true});