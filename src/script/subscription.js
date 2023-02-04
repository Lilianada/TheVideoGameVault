class Subscription extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <section class="subscription-section">
          <div class="subscription-texts">
            <h2 class="subscription-title">Subscribe to our
              <span class="gradient-text"> Newsletter</span>
            </h2>
            <p class="subscription-description">
              Subscribe to our newsletter and get our latest news and updates.
            </p>
          </div>
          <form class="subscription-form" action="">
            <input type="email" name="email" class="subscription-input" placeholder="Enter your email">
            <button type="submit" class=" btn-secondary">Subscribe</button>
          </form>
        </section>
      
      `;
    }
  }
  customElements.define("subscription-component", Subscription);