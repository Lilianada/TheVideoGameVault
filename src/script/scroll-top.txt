class ScrollTop extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <a href="" class="scroll_top show-scroll" id="scroll-top">
        <i class="icofont-caret-up scrolltop_icon"></i>
      </a> 
      
      `;
    }
  }
  customElements.define("scrollTop-component", ScrollTop);