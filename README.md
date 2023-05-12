# &lt;my-card&gt;

> A cool card that shows important details about athletes on the first page, that flips and shows their description on the back. Each sportive can have their own card.

## Usage
To use this web component in your project you can utilize one of the following styles of syntax.

```js
/* In an existing JS module / web component */
import '@lrnwebcomponents/my-card/my-card.js';
/* At top of an application with build routine */
<script type="module" src="@lrnwebcomponents/my-card/my-card.js"></script>
/* Alternatives for top of application */
<script type="module">
  import '@lrnwebcomponents/my-card/my-card.js';
  // imperative form
  import {MyCard} from '@lrnwebcomponents/my-card';
  // if you don't have a build routine and need to reference directly
  import './node_modules/@lrnwebcomponents/my-card/my-card.js';
</script>
// via unpkg CDN (good for testing)
<script type="module" src="https://unpkg.com/@lrnwebcomponents/my-card/my-card.js"></script>
```

## Develop / Demo
Run `yarn start` will start a local development server, open your default browser to display it, open your finder to the correct window and start watching the `/src` directory for changes and automatically rebuilding the element and documentation site for the demo.
```bash
$ yarn start
```

## Test

```bash
$ yarn run test
```

## Attributes
**Dark** - if dark is set the accent-color will be darker\
**Slot** - says the column on which the element will be placed\
**Name** - the name of the athlete\
**Domain** - the type of sport that the athlete plays\
**Age** - the age of the athlete\
**Wins** - the important wins of the athlete for that sport\
**Description** - a short biography of the athlete\
**Accent-color** - the color of the card\
**Hover-Source** - the gif that will play when you hover the card\
**Media-Source** - the image of the athlete

## Simple Colors Usage
>When writing web components, you can extend the **SimpleColors** base class provided by the **@lrnwebcomponents/simple-colors** package to easily add customizable color themes to your component.

>**SimpleColors** provides a set of CSS custom properties that define a color theme, which can be customized by setting values for these properties on the component's host element. These custom properties are used by the component's internal CSS to apply colors to various parts of the component.

>To use **SimpleColors** in your component, you can extend the base class in your component class declaration. Then, in your component's **static get styles()** method, call **super.styles** to include the **SimpleColors** CSS in your component's styles. You can also define your own custom CSS properties and use them alongside the SimpleColors properties.

## Render function
>This **render** function defines the HTML structure and content that will be displayed by the web component. It uses the html template literal from a web component library (such as **LitElement** or **Polymer**) to define the HTML structure.

>Inside the html template literal, there are several nested HTML elements that are being rendered. These elements include divs, images, and slots, which are used to dynamically render content provided by the component's properties and slots.

>Overall, this render function defines the visual appearance of the web component and how its data is displayed to the user.

## Properties

>**Name, domain, age, wins, description, mediaSource, hoverSource** are the properties used directly in the html components to display certain things given by the user.

>**hoverState** will change its state to on when the card is hovered. This is being used to know when to display the GIF.

>**clickState** will switch its state from true to false and from false to true after each click. This is being used to know when to show the front of the card and when to show the description.

## Important functions

>**constructor()**: This is the constructor function for the class, and is called when a new instance of the element is created. It calls the constructor of the superclass (super()) and sets the initial values for two properties, hoverState and clickState.

>**_hoverStateOff(e)** and **_hoverStateOn(e)**: These functions handle the mouseover and mouseout events, respectively, and set the hoverState property to true or false. 

>**_clickStateSwitch(e)**: This function handles the click event, and toggles the value of the clickState property. 

>**firstUpdated(changedProperties)**: This function is called after the element is first updated (i.e., after the first render cycle). It calls the firstUpdated() function of the superclass (if it exists), and adds event listeners for mouseover, mouseout, and click, which call the corresponding functions described above.\
This is useful for performing any initialization logic that should only be executed once, such as setting up event listeners, initializing state, or fetching data from an external source.\
It's worth noting that firstUpdated is a specific lifecycle method of LitElement, and may not be available in other web component libraries or frameworks.

>The **updated** function is a **LitElement** life cycle hook that gets called when a property is updated. This function takes a single parameter called changedProperties, which is a Map of the properties that have been updated and their previous values.\
> In this particular implementation, the **updated** function first calls the updated function of its superclass if it exists. It then checks if the **hoverState** property has changed and updates the value of the **__source** property based on whether the element is in a hover state or not.\
> Next, the function checks if the clickState property has changed. If the previous value was false, it hides the name, age, wins, domain, and image elements by setting their opacity to 0 and displays the description element by setting its display to 'block'.\
> It also adds two CSS classes to the description and link elements, which trigger animation effects on click. If the previous value was true, it shows the hidden elements by setting their opacity to 100 and hides the description element by setting its display to 'none'.\
> Finally, a timeout is set to remove the CSS class rotate-on-click from the link element after 1.2 seconds.


> The first line, **customElements.define(MyCard.tag, MyCard)**, registers the MyCard custom element with the browser's **CustomElementRegistry**.\
> The second line, **export { MyCard }**, exports the MyCard class from the module. This allows other modules to import and use the MyCard class in their own code.