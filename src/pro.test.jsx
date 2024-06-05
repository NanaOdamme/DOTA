// test/pro.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pro from "../src/pro"; // Ensure the path to Pro component is correct

test("renders subscription plans", () => {
  // Render the Pro component
  render(<Pro />);

  // Check if the main title is rendered
  expect(screen.getByText(/Subscription Plans/i)).toBeInTheDocument();

  // Check if the plan titles are rendered
  expect(screen.getByText(/Basic/i)).toBeInTheDocument();
  expect(screen.getByText(/Advanced/i)).toBeInTheDocument();
  expect(screen.getByText(/Pro/i)).toBeInTheDocument();

  // Check if the buttons are rendered
  expect(screen.getByText(/Start Free Plan/i)).toBeInTheDocument();
  expect(screen.getByText(/Start Advanced Plan/i)).toBeInTheDocument();
  expect(screen.getByText(/Start Pro Plan/i)).toBeInTheDocument();
});
