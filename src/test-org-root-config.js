import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@test-org/ss-test",
  app: () => System.import("@test-org/ss-test"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
