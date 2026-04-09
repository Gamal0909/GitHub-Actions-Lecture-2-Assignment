import React from "react";
export default function Hello({ name = "amr" }) {
  return <div data-testid="hello">Hello, {name}!</div>;
};