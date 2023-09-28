import { createApp } from "vue";
import * as Sentry from "@sentry/vue";

import App from "./App.vue";
import router from "./router";
// import "normalize.css";
import "./main.css";

const app = createApp(App);

app.use(router);

Sentry.init({
  app,
  dsn: "https://26525e3823e6ce79096789b50a76e0c4@o403757.ingest.sentry.io/4505955757654016",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

app.mount("#app");
