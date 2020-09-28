import { Route } from "./route"
import express, { Express } from "express"

class WebApp {
    app: Express

    constructor() {
        this.app = express()
    }

    addRoutes(routes: Route[]) {
        routes.forEach((route: Route) => {
            if (route.methods.indexOf('GET') != -1)
                this.app.get(route.url, route.view)

            else if (route.methods.indexOf('POST') != -1)
                this.app.post(route.url, route.view)

            else if (route.methods.indexOf('PUT') != -1)
                this.app.put(route.url, route.view)

            else if (route.methods.indexOf('DELETE') != -1)
                this.app.delete(route.url, route.view)

            else if (route.methods.indexOf('OPTIONS') != -1)
                this.app.options(route.url, route.view)
        })
    }

    serve(port=8000){
        this.app.listen(port, () => {
            console.log(`Going fast... on port ${port}`)
        })
    }
}


export {
    WebApp
}