import { Request, Response } from "express"

type HTTP_methodType = "GET" | "POST" | "OPTIONS" | "PUT" | "DELETE"

type Route = {
    url: string
    view: (req: Request, res: Response, ...args: any[]) => void,
    methods: HTTP_methodType[]
}

function perfixRoute(perfix: string, ...routes: Route[]): Route[] {
    routes.forEach((r: Route) => {
        r.url = perfix + r.url
    })

    return routes
}

export { Route, perfixRoute }