// app.config.ts
import { defineConfig } from "@solidjs/start/config";
var app_config_default = defineConfig({
  server: {
    prerender: {
      routes: ["/"]
    }
  }
});
export {
  app_config_default as default
};
