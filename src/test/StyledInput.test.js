import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../App";
import React from "react";
import { StyledInput } from "../component/Input";

describe("ViewTube App", () => {
  beforeEach(() => render(<App />));
  afterEach(() => cleanup());

  test("should have StyledInput component", function () {
    expect(StyledInput).toBeTruthy();
  });

  test("should have StyledInput component of type input element", () => {
    const component = <StyledInput></StyledInput>;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <input
        className="sc-gsDKAQ fpIcnW"
      />
    `);

    expect(tree.type).toBe("input");
  });

  test("should have StyledInput component with border property", () => {
    const component = <StyledInput></StyledInput>;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <input
        className="sc-gsDKAQ fpIcnW"
      />
    `);

    expect(
      window.getComputedStyle(
        document.getElementsByClassName(tree.props.className)[0]
      ).border
    ).toBeTruthy();
  });
});
