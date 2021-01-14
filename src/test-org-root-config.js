import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@test-org/ss-test",
  app: () => System.import("@test-org/ss-test"),
  activeWhen: ["/2"]
});

start({
  urlRerouteOnly: true,
});
