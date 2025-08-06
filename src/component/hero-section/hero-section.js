import "./hero-section.css";
import { BaseComponent } from "../base-component";
import "../main";

export class HeroSection extends BaseComponent {
  static get observedAttributes() {
    return ["label", "src"];
  }

  constructor() {
    super();
    this.label = "";
    this.src = "";
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
        case "src":
          this.src = newValue;
          break;
      }
      this.updateTemplate();
    }
  }

  updateTemplate() {
    this.template = `
    <section class="max-width-container">
        <div class="flex flex-row gap-6">
            <div class="image-container">
                <img src=${this.src}>
            </div>

            <div class="w-auto">
                <p> lorem loreml bunhonglo12orem lorem loreml bunhonglo12orem lorem loreml bunhonglo12orem lorem loreml bunhonglo12orem lorem loreml bunhonglo12orem lorem loreml bunhonglo12orem lorem loreml bunhonglo12orem lorem loreml bunhonglo12orem lorem loreml bunhonglo12orem lorem loreml bunhonglo12orem lorem loreml bunhonglo12orem lorem loreml bunhonglo12orem lorem loreml bunhonglo12orem lorem loreml bunhonglo12 </p>
            </div>
        </div>
    </section>
    `;
    this.render();
  }
}

customElements.define("hero-section", HeroSection);
