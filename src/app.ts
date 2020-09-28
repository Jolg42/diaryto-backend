import { WebApp } from "./base/web-app";

import { routeMap } from "./routes";

const webApp = new WebApp()

webApp.addRoutes(routeMap)
webApp.serve(8000)