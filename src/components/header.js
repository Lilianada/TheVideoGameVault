


const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
    <style>
        header {
        width: 100vw;
        background-color: transparent;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        text-transform: capitalize;
        position: sticky;
        }

        /* Mobile Header */
        .mobile-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem;
        }

        .desktop-header {
        display: none;
        }

        .nav-logo {
        display: flex;
        align-items: center;
        }

        .nav-logo img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        }

        .nav-logo .logo-name {
        font-family: var(--font-secondary);
        background: var(--gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-left: .5rem;
        font-size: var(--sixteen);
        }

        .nav-toggle {
        width: 1.75rem;
        height: auto;
        }

        .bar {
        width: 100%;
        height: 3px;
        background-color: var(--white);
        margin: 5px 0;
        border-radius: 3px;
        position: relative;
        z-index: 3;
        cursor: pointer;
        }

        .change .bar-one {
        transform: rotate(48deg) translate(4px, 7px);
        transition: all 0.3s ease-in-out;
        background: var(--gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: border-box;
        }

        .change .bar-two {
        opacity: 0;
        transition: all 0.3s ease-in-out;
        }

        .change .bar-three {
        transform: rotate(-48deg) translate(4px, -8px);
        transition: all 0.3s ease-in-out;
        background: var(--gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: border-box;
        }

        .active-navbar {
        left: 0;
        }

        .navbar {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--brand);
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: -100%;
        padding: 2rem;
        }

        .nav-list {
        margin-top: 2.5rem;
        }

        .nav-list .nav-item {
        padding-bottom: 1.5rem;
        }

        .nav-title {
        color: #e8f8f8;
        font-size: 16px;
        font-family: "Work Sans", sans-serif;
        font-weight: 500;
        text-transform: none;
        }

        .nav-title:last-child{
            font-family: var(--font-secondary);
        }

        .nav-link {
        color: #d9d9d9;
        font-weight: 500;
        text-transform: capitalize;
        }

        .nav-link:hover, .nav-link:focus {
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }


        @media screen and (min-width: 768px) {
        .mobile-header {
            display: none;
        }
        }
        </style>
        <header>
            <!-- Desktop Menu -->
            <div class="desktop-header">
                <a class="nav-link" href="/">
                    <img src="../assets/The-Video-Game-Vault_profile_image.jpg" alt="FunConnect Logo" />
                </a>
                <nav class="navbar">
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
                    <img src="../assets/The-Video-Game-Vault_profile_image.jpg" alt="FunConnect Logo" />
                    <h5 class="logo-name">TheVideoGameVault</h5>
                </a>
                <div class="nav-toggle">
                    <div class="bar bar-one"></div>
                    <div class="bar bar-two"></div>
                    <div class="bar bar-three"></div>
                </div>

                <nav class="navbar">
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

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "closed" });

        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define("headet-component", Header);
