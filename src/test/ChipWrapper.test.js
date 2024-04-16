import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../App";
import React from "react";
import { ChipWrapper } from "../component/Chip";

describe("ViewTube App", () => {
  beforeEach(() => render(<App />));
  afterEach(() => cleanup());

  test("should have ChipWrapper component", function () {
    expect(ChipWrapper).toBeTruthy();
  });

  test("should have ChipWrapper component of type button element", () => {
    const component = <ChipWrapper></ChipWrapper>;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="sc-pVTFL ceMEPT"
      />
    `);

    expect(tree.type).toBe("button");
  });

  test("should have ChipWrapper component with border, background-color and color property", () => {
    const component = <ChipWrapper></ChipWrapper>;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="sc-pVTFL ceMEPT"
      />
    `);

    expect(
      window.getComputedStyle(
        document.getElementsByClassName(tree.props.className)[0]
      ).backgroundColor
    ).toBeTruthy();

    expect(
      window.getComputedStyle(
        document.getElementsByClassName(tree.props.className)[0]
      ).color
    ).toBeTruthy();

    expect(
      window.getComputedStyle(
        document.getElementsByClassName(tree.props.className)[0]
      ).borderRadius
    ).toBeTruthy();
  });
});
