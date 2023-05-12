import { html } from "lit-html";
import { withKnobs, text, boolean } from "@open-wc/demoing-storybook";
import { StorybookUtilities } from "@lrnwebcomponents/storybook-utilities/storybook-utilities.js";
import { MyCard } from "./my-card.js";
// need to account for polymer goofiness when webpack rolls this up

export default {
  title: "Cards|Retro Design",
  component: "my-card",
  decorators: [withKnobs],
  parameters: {
    options: { selectedPanel: "storybookjs/knobs/panel" },
  },
};
const utils = new StorybookUtilities();
export const BasicMyCard = () => {
  return utils.makeUsageDocs(
    MyCard,
    import.meta.url,
    utils.makeElementFromHaxDemo(MyCard)
  );
};
