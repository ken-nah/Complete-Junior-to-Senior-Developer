import React from "react";
import { shallow } from "enzyme";
import Card from "./card";

it("expect to render card component", () => {
  expect(shallow(<Card />).length).toEqual(1);
});
