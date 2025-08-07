import "./main-footer.css";
import { BaseComponent } from "../base-component";
import telegram from "/icons/telegram.svg";
import facebook from "/icons/facebook.svg";
import instagram from "/icons/instagram.svg";
import linkin from "/icons/linkin.svg";

export class MainFooter extends BaseComponent {
  static ["label"];

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
    const navIcon = [
      { icon: telegram, href: "https://t.me/ybunhongg" },
      { icon: instagram, href: "https://www.instagram.com/ybunhongg_" },
      { icon: facebook, href: "https://www.facebook.com/ybunhonggg" },
      { icon: linkin, href: "https://www.linkedin.com/in/ybunhonggg" },
    ];

    const navList = navIcon
      .map(
        (items) =>
          `<div class="rounded-xl bg-blend-darken p-3"><icon-button icon="${items.icon}" href="${items.href}" size="1.7"></icon-button></div>`
      )
      .join("");
    this.template = `
    <div class="max-width-container">
    <footer class="flex justify-between p-6 pt-10 pb-10">
        <p class="name text-3xl">ybunhong</p>
        <div class="contact-container flex items-center">
            <div class="pr-6">
                <p class="text-3xl">Reaching me:</p>
            </div>
            <div class="icon-container flex gap-8">
                ${navList}
            </div>
        </div>
    </footer>
    </div>`;
    this.render();
  }
}

customElements.define("main-footer", MainFooter);
