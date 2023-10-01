import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/vue";
import SearchInput from "./index.vue";

describe("Search Component Tests", async () => {
  it("should be disabled without search input", () => {
    render(SearchInput);

    expect(
      screen.getByTestId("search-button").attributes.getNamedItem("disabled"),
    ).toBeDefined();
  });

  it("should be enabled with search input", async () => {
    render(SearchInput);

    await fireEvent.update(screen.getByTestId("search-input"), "eminem");
    expect(
      screen.getByTestId("search-button").attributes.getNamedItem("disabled"),
    ).toBeDefined();
  });
});
