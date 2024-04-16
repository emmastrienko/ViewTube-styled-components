import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../App";
import React from "react";
import { StyledCard } from "../component/Card";

describe("ViewTube App", () => {
  beforeEach(() => render(<App />));
  afterEach(() => cleanup());

  test("should have StyledCard component", function () {
    expect(StyledCard).toBeTruthy();
  });

  test("should have StyledCard component of type div element", () => {
    const component = <StyledCard></StyledCard>;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="sc-jrQzAO irPAav"
      />
    `);

    expect(tree.type).toBe("div");
  });

  test("should have StyledCard component of with width, background-color and color property", () => {
    const component = <StyledCard></StyledCard>;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="sc-jrQzAO irPAav"
      />
    `);

    expect(
      window.getComputedStyle(
        document.getElementsByClassName(tree.props.className)[0]
      ).width
    ).toBeTruthy();

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
  });
});
