import React from "react";
export default function Hello({ name = "Mustafa" }) {
  return <div data-testid="hello">Hello, {name}!</div>;
};