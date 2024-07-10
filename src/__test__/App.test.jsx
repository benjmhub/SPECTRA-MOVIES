import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
describe("Testing app", () => {
  it(" render the app component", async () => {
    render(<App />);

    const landingPage = await screen.findByText("SPECTRA");
    expect(landingPage).toBeInTheDocument();
  });
});
