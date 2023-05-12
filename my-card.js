import { html, css } from "lit";
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";
/**
 * `my-card`
 * `Simple card in a cool retro design`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @demo demo/index.html
 * @element my-card
 */
class MyCard extends SimpleColors {
  //styles function
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          --my-card-level-2: var(
            --simple-colors-default-theme-accent-7,
            #b8a515
          );
          --my-card-level-1: var(
            --simple-colors-default-theme-accent-6,
            #e5cd1b
          );
          --my-card-level-3: var(
            --simple-colors-default-theme-accent-5,
            #ead749
          );
          --my-card-shadow: var(
            --simple-colors-default-theme-accent-8,
            rgba(229, 205, 27, 0.2)
          );
          --my-card-light-color: #f4f1d0;
          --my-card-dark-color: #212121;
        }

        :host([dark]) {
          --my-card-dark-color: #f4f1d0;
          --my-card-light-color: #212121;
        }

        :host([hidden]) {
          display: none;
        }

        :host([hover-state]) .link:nth-child(1n + 0) {
          box-shadow: 16px 16px 0px 0px var(--my-card-shadow);
          border: 16px solid var(--my-card-level-2);
          background-color: var(--my-card-level-1);
        }

        :host([hover-state]) .link {
          color: var(--my-card-light-color);
          padding: 1.25rem;
          border: 16px var(--my-card-level-1) solid;
          box-shadow: 16px 16px 0px 0px var(--my-card-shadow);
          transition: background-color 0.2s ease-in-out 0s,
            padding 0.4s ease-in-out 0s, border 0.4s ease-in-out 0s,
            box-shadow 0.2s ease-in-out 0s;
        }

        .link:nth-child(1n + 0) {
          background-color: var(--my-card-level-3);
          box-shadow: 8px 8px 0px 0px var(--my-card-level-1);
          border: 4px var(--my-card-level-1) solid;
        }

        .link {
          background-color: var(--my-card-level-3);
          border: 4px var(--my-card-level-1) solid;
          padding: var(--my-card-padding, 0.9rem);
          box-shadow: 8px 8px 0px 0px var(--my-card-level-1);
          transition: padding 0.4s ease-in-out 0s, border 0.4s ease-in-out 0s,
            box-shadow 0.2s ease-in-out 0s;
          text-align: left;
          color: var(--my-card-dark-color);
          text-decoration: none;
          line-height: inherit;
          cursor: pointer;
          font-family: "Roboto Mono", Consolas, Monospace;
        }

        .rotate-on-click {
          animation: rotateY-anim 0.5s linear;
        }

         @keyframes rotateY-anim {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(180deg);
          }
        }

        .fade-on-click {
        opacity: 0;
        animation: fade-in 0.7s ease-out 0.51s forwards;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .horizontal-box{
        display: flex;
        }

        .vertical-box{
        display: grid;
        }

        .img {
          border: 2px solid white;
          border-radius: 0%;
          max-width: 100%;
          height: auto;
          -ms-interpolation-mode: bicubic;
          max-height: 190px;
          margin-right:0px;
        }

        .name {
        margin-top:20px;
        font-style: italic;
        font-size: 25px;
        }

        .domain{
          writing-mode: vertical-lr;
          text-orientation: upright;
          margin-left:40px;
          font-size:27px;
          margin-top:10px;
          font-weight:bold;
        }

        .age{
        display:inline;
        margin-top:10px;
        font-family: "Times New Roman", Times, serif;
        font-weight: bold;
        font-size: 35px;
        }

        .wins{
        margin-left:2px;
        margin-top: 2px;
        font-size: 20px;
        }

        hr {
          border-bottom: 1px solid var(--my-card-dark-color);
          max-width: 75rem;
          height: 0;
          border-right: 0;
          border-top: 0;
          border-left: 0;
          margin: 1.25rem auto;
          clear: both;
        }

        .description {
          display: none;
          font-size: 1.0rem;
          height:10px;
        }
      `,
    ];
  }

  // render function
  render() {
    return html` ${html`
      <div>

         <div tabindex="-1" class="link"/>

        <div class="description" part="description">
          <slot name="age">${this.description}</slot>
        </div>

         <div class="horizontal-box">

           <div class="vertical-box">
             <img class="img" loading="lazy" src="${this.__source}"/>

             <div class="age" part="age">
               <slot name="age">${'Age: ' + this.age}</slot>
             </div>

             <div class="wins" part="wins">
               <slot name="wins">${'Wins: ' + this.wins}</slot>
             </div>
           </div>

           <div class="domain" part="domain">
             <slot name="domain">${this.domain}</slot>
           </div>

         </div>

         <hr/>

         <div class="name" part="name">
           <slot name="name">${this.name}</slot>
         </div>

    </div>
    `}`;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      ...super.properties,

      name: {
        type: String,
      },
      domain:{
        type: String,
      },
      age: {
        type: String,
      },
      wins: {
        type: String,
      },
      description: {
        type: String,
      },
      mediaSource: {
        type: String,
        attribute: "media-source",
      },
      hoverSource: {
        type: String,
        attribute: "hover-source",
      },
      hoverState: {
        type: Boolean,
        attribute: "hover-state",
        reflect: true,
      },
      clickState:{
        type: Boolean,
        attribute: "click-state",
        reflect: true,
      },
      __source: {
        type: String,
      },
    };
  }

  /**
   * Convention we use
   */
  static get tag() {
    return "my-card";
  }

  /**
   * HTMLElement
   */
  constructor() {
    super();
    this.hoverState = false;
    this.clickState = false;
  }
  _hoverStateOff(e) {
    this.hoverState = false;
  }
  _hoverStateOn(e) {
    this.hoverState = true;
  }
  _clickStateSwitch(e) {
    this.clickState = !this.clickState;
  }
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.addEventListener("mouseover", this._hoverStateOn.bind(this));
    this.addEventListener("mouseout", this._hoverStateOff.bind(this));
    this.addEventListener("click", this._clickStateSwitch.bind(this));

  }

  /**
   * LitElement life cycle - property changed
   */
  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    changedProperties.forEach((oldValue, propName) => {
      if (propName == "hoverState") {
        this.__source = this[propName] ? this.hoverSource : this.mediaSource;
      }
      if(oldValue!==undefined && propName == "clickState"){
        if(oldValue==false) {
          this.shadowRoot.querySelector(".name").style.opacity = '0';
          this.shadowRoot.querySelector(".wins").style.opacity = '0';
          this.shadowRoot.querySelector(".age").style.opacity = '0';
          this.shadowRoot.querySelector(".domain").style.opacity = '0';
          this.shadowRoot.querySelector(".img").style.opacity = '0';
          this.shadowRoot.querySelector(".description").style.display = 'block';

          this.shadowRoot.querySelector(".description").classList.add("fade-on-click");
          this.shadowRoot.querySelector(".link").classList.add("rotate-on-click");
        }
        else{
          this.shadowRoot.querySelector(".name").style.opacity = '100';
          this.shadowRoot.querySelector(".wins").style.opacity = '100';
          this.shadowRoot.querySelector(".age").style.opacity = '100';
          this.shadowRoot.querySelector(".domain").style.opacity = '100';
          this.shadowRoot.querySelector(".img").style.opacity = '100';
          this.shadowRoot.querySelector(".description").style.display = 'none';
        }
      }
      setTimeout(() => {
        this.shadowRoot.querySelector(".link").classList.remove("rotate-on-click");
      }, 1200);
    });
  }
}
customElements.define(MyCard.tag, MyCard);
export { MyCard };
