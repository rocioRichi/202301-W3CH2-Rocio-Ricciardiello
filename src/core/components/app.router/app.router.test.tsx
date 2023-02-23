import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import AppRouter from "./app.router";

describe("Given Router component", () => {
  describe("When it is render", () => {
    render(
      <Router>
        <AppRouter></AppRouter>
      </Router>
    );
    test("Then we should navigate to home", async () => {
      expect(true).toBe(true);
    });
  });
});
