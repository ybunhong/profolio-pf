import "./hero-section.css";
import { BaseComponent } from "../base-component";
import "../main";

export class HeroSection extends BaseComponent {
  static get observedAttributes() {
    return ["label", "src", "primary-button", "mirror", "title", "button-href"];
  }

  constructor() {
    super();
    this.label = "";
    this.title = "";
    this.src = "";
    this.primaryButton = "";
    this.buttonHref = "#";
    this.mirror = false;
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
        case "title":
          this.title = newValue;
          break;
        case "src":
          this.src = newValue;
          break;
        case "primary-button":
          this.primaryButton = newValue;
          break;
        case "mirror":
          this.mirror = newValue;
          break;
        case "button-href":
          this.buttonHref = newValue;
          break;
      }
      this.updateTemplate();
    }
  }

  updateTemplate() {
    this.template = `
    <section class="max-width-container">
        <div class="flex flex-row gap-6 p-6">
            ${
              this.mirror
                ? `<div class="image-container">
                <img src=${this.src}>
            </div>`
                : ""
            }
            <div class="flex flex-col gap-4">
            <div class="w-auto">
             ${
               this.title
                 ? `<p class="text-2xl text-blue-300 font-medium">${this.title}</p>`
                 : ""
             }
            </div>
            <div class="w-auto">
                ${this.label ? `<p>${this.label}</p>` : ""}
            </div>
            ${
              this.primaryButton
                ? `<div class="button-container w-full flex justify-center items-center">
                <div class="w-[300px]">
                <base-button label="${this.primaryButton}" href="${this.buttonHref}"></button>
            </div>
            </div>`
                : ""
            }
            </div>
            ${
              this.mirror
                ? ""
                : `<div class="image-container">
                <img src=${this.src}>
            </div>`
            }
        </div>
    </section>
    `;
    this.render();
  }
}

customElements.define("hero-section", HeroSection);
