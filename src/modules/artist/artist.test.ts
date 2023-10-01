import { describe, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import ArtistComponent from "./index.vue";

describe("Artist Component Tests", async () => {
  it("should render correctly", () => {
    render(ArtistComponent);
    screen.getByText("Top Tracks");
    screen.getByText("Albums");
    // debug();
  });
});
