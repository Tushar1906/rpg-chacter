import { html, fixture, expect } from '@open-wc/testing';
import "../rpg-chacter.js";

describe("RpgChacter test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <rpg-chacter
        title="title"
      ></rpg-chacter>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
