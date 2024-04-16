import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../App";
import React from "react";
import { StyledIcon } from "../component/Icon";

describe("ViewTube App", () => {
  beforeEach(() => render(<App />));
  afterEach(() => cleanup());

  test("should have StyledIcon component", function () {
    expect(StyledIcon).toBeTruthy();
  });

  test("should have StyledIcon component of type i element", () => {
    const component = <StyledIcon></StyledIcon>;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <i
        className="sc-bdvvtL LHHIw"
      />
    `);

    expect(tree.type).toBe("i");
  });

  test("should have StyledIcon component with color property", () => {
    const component = <StyledIcon></StyledIcon>;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <i
        className="sc-bdvvtL LHHIw"
      />
    `);

    expect(
      window.getComputedStyle(
        document.getElementsByClassName(tree.props.className)[0]
      ).color
    ).toBeTruthy();
  });
});
