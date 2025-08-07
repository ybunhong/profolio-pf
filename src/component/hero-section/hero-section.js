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
    const isMirrored = this.mirror === "true" || this.mirror === true;

    this.template = `
      <section class="max-w-[1280px] mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-6 p-6 ${
          isMirrored ? "lg:flex-row-reverse" : ""
        }">

          <div class="w-full lg:w-1/2">
            <img src="${
              this.src
            }" class="w-full h-auto object-cover rounded-xl shadow-md" />
          </div>

          <div class="w-full lg:w-1/2 flex flex-col gap-4 justify-center">
            ${
              this.title
                ? `<p class="text-2xl text-blue-300 font-medium">${this.title}</p>`
                : ""
            }
            ${this.label ? `<p>${this.label}</p>` : ""}
            ${
              this.primaryButton
                ? `<div class="flex justify-center lg:justify-start">
                    <div class="w-[300px]">
                      <base-button label="${this.primaryButton}" href="${this.buttonHref}"></base-button>
                    </div>
                  </div>`
                : ""
            }
          </div>
        </div>
      </section>
    `;

    this.render();
  }
}

customElements.define("hero-section", HeroSection);
