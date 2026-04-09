import React from "react";
export default function Hello({ name = "World" }) {
  return <div data-testid="hello">Hello, {name}!</div>;
};