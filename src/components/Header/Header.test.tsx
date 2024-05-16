import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import { MAIN_PATH } from "src/constant";

describe("Header component", () => {
  test("renders with correct text", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const textElement = screen.getByText("Trajector Frontend Assignment");
    expect(textElement).toBeInTheDocument();
  });

  test("renders with correct link", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", `/${MAIN_PATH.browse}`);
  });

  test("renders with white color and font size 20", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const textElement = screen.getByText("Trajector Frontend Assignment");
    expect(textElement).toHaveStyle("color: white");
    expect(textElement).toHaveStyle("font-size: 20px");
  });
});
