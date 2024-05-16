import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import AgeLimitChip from "./AgeLimitChip";

describe("AgeLimitChip component", () => {
  test("renders with correct styles", () => {
    render(<AgeLimitChip label="Test Label" />);
    const chipElement = screen.getByText("Test Label").closest('.MuiChip-root');
    
    // Check if chip has correct borderRadius, padding, fontSize, and height
    expect(chipElement).toHaveStyle("border-radius: 0");
    expect(chipElement).toHaveStyle("font-size: 12px");
    expect(chipElement).toHaveStyle("height: 100%");
  });

});
