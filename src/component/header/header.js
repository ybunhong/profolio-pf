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
    <section class="flex flex-row justify-between">
        <div>
            <a href="#">
                <p class="text-4xl">Y BUNHONG</p>
            </a>
        </div>
        <div class="flex flex-row gap-4">
            <a href="#">
            <p class="text-4xl underline">ABOUT</p>
            </a>
            <a href="#">
            <p class="text-4xl underline">WORK</p>
            </a>
            <a href="#">
            <p class="text-4xl underline">CONTACT</p>
            </a>
        </div>
        </section>
    </header>
    `;
    this.render();
  }
}

customElements.define("main-header", MainHeader);
