import "./header.css";
import { BaseComponent } from "../base-component";
import "../main";

export class MainHeader extends BaseComponent {
  static get observedAttributes() {
    return ["label"];
  }

  constructor() {
    super();
    this.label = "";
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateTemplate();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch (name) {
        case "label":
          this.label = newValue;
          break;
      }
      this.updateTemplate();
    }
  }

  updateTemplate() {
    this.template = `
    <header class="max-width-container">
    <section class="header-container flex flex-row justify-between p-10 text-blue-300 text-5xl">
        <div>
            <a href="#">
                <p>Y BUNHONG</p>
            </a>
        </div>
        <div class="link-container flex flex-row gap-6">
            <a href="#about">
            <p class="underline">ABOUT</p>
            </a>
            <a href="#work">
            <p class="underline">WORK</p>
            </a>
            <a href="#contact">
            <p class="underline">CONTACT</p>
            </a>
        </div>
        </section>
    </header>
    `;
    this.render();
  }
}

customElements.define("main-header", MainHeader);
