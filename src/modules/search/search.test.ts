import { describe, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import { createTestingPinia } from "@pinia/testing";
import SearchPage from "./index.vue";
import { artists } from "./search.mock";

describe("Search Component Tests", () => {
  it("should show please search for an artist", async () => {
    await render(SearchPage, {
      routes: [],
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              search: { artists: [] },
            },
          }),
        ],
      },
    });

    screen.getByText("Please Search For An Artist");
  });

  it("should show artists, if artists exists in store", async () => {
    await render(SearchPage, {
      routes: [],
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              search: {
                artists,
              },
            },
          }),
        ],
      },
    });

    screen.getByText("Eminem");
  });
});
